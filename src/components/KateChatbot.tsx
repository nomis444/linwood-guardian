"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SESSION_KEY = "lg_chat";
const SECTION_ID = "linwood-chat";

const pageSuggestions: Record<string, string[]> = {
  "/": [
    "What types of insurance do you offer?",
    "How does an independent agency work?",
    "I need a commercial insurance quote",
    "Do you offer personal insurance?",
  ],
  "/business-insurance": [
    "What coverage does my business need?",
    "Tell me about professional liability",
    "Do you cover contractors?",
    "How do I get a quote?",
  ],
  "/personal-insurance": [
    "What personal coverage do you offer?",
    "Tell me about pet insurance",
    "I need home and auto insurance",
    "How do I get started?",
  ],
  "/about": [
    "What makes Linwood Guardian different?",
    "What are your credentials?",
    "How long have you been in business?",
  ],
  "/contact": [
    "What do I need for a quote?",
    "How quickly can I get coverage?",
    "What carriers do you work with?",
  ],
};

function getSuggestions(pathname: string): string[] {
  if (pageSuggestions[pathname]) return pageSuggestions[pathname];
  if (pathname.startsWith("/business-insurance"))
    return pageSuggestions["/business-insurance"];
  if (pathname.startsWith("/blog")) return pageSuggestions["/"];
  return pageSuggestions["/"];
}

function renderContent(content: string) {
  const parts = content.split(/(\[.*?\]\(.*?\)|\*\*.*?\*\*|\n)/g);

  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
    if (linkMatch) {
      return (
        <a
          key={i}
          href={linkMatch[2]}
          className="text-teal hover:text-teal-light underline underline-offset-2 font-medium"
        >
          {linkMatch[1]}
        </a>
      );
    }

    const boldMatch = part.match(/^\*\*(.*?)\*\*$/);
    if (boldMatch) {
      return (
        <strong key={i} className="font-semibold">
          {boldMatch[1]}
        </strong>
      );
    }

    if (part === "\n") return <br key={i} />;

    return <span key={i}>{part}</span>;
  });
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function Avatar() {
  return (
    <div className="w-8 h-8 rounded-full bg-navy flex items-center justify-center flex-shrink-0 mt-0.5">
      <span className="text-white text-[10px] font-bold">LG</span>
    </div>
  );
}

export function KateChatbot() {
  const pathname = usePathname();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [launcherVisible, setLauncherVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as ChatMessage[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      try {
        sessionStorage.setItem(SESSION_KEY, JSON.stringify(messages));
      } catch {}
    }
  }, [messages]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Hide the launcher pill while the chat section is on screen
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setLauncherVisible(!entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [pathname]);

  const scrollToChat = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {
      inputRef.current?.focus({ preventScroll: true });
    }, 600);
  };

  const sendMessage = useCallback(
    async (content: string) => {
      if (!content.trim() || isLoading) return;

      const userMsg: ChatMessage = {
        id: `user-${Date.now()}`,
        role: "user",
        content: content.trim(),
      };

      const assistantId = `assistant-${Date.now()}`;
      const assistantMsg: ChatMessage = {
        id: assistantId,
        role: "assistant",
        content: "",
      };

      setMessages((prev) => [...prev, userMsg, assistantMsg]);
      setIsLoading(true);

      const apiMessages = [
        ...messages.map((m) => ({ role: m.role, content: m.content })),
        { role: "user" as const, content: content.trim() },
      ];

      abortRef.current = new AbortController();

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages: apiMessages, currentPage: pathname }),
          signal: abortRef.current.signal,
        });

        if (!res.ok) {
          const err = await res.json().catch(() => ({ error: "Something went wrong" }));
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId
                ? { ...m, content: err.error || "Sorry, I hit a snag. Try again in a moment." }
                : m
            )
          );
          setIsLoading(false);
          return;
        }

        const reader = res.body?.getReader();
        if (!reader) throw new Error("No reader");

        const decoder = new TextDecoder();
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const text = decoder.decode(value, { stream: true });
          setMessages((prev) =>
            prev.map((m) =>
              m.id === assistantId ? { ...m, content: m.content + text } : m
            )
          );
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") return;
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId
              ? { ...m, content: "Sorry, I couldn't connect right now. Please try again." }
              : m
          )
        );
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading, pathname]
  );

  const handleSubmit = () => {
    if (!inputValue.trim() || isLoading) return;
    sendMessage(inputValue.trim());
    setInputValue("");
    if (inputRef.current) inputRef.current.style.height = "auto";
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = Math.min(el.scrollHeight, 120) + "px";
  };

  const chips = getSuggestions(pathname);
  const hasMessages = messages.length > 0;

  return (
    <>
      {/* Embedded chat section — sits above the footer on every page */}
      <section
        id={SECTION_ID}
        ref={sectionRef}
        className="relative bg-gradient-to-b from-sky/40 to-white border-t border-border scroll-mt-24"
      >
        {/* Header */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 pb-6 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-navy mb-4">
            <ShieldIcon className="w-7 h-7 text-teal-light" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy font-[family-name:var(--font-merriweather)] mb-2">
            Have an Insurance Question?
          </h2>
          <p className="text-text-secondary text-sm max-w-md mx-auto">
            Ask our AI assistant about commercial or personal coverage, get
            plain-English answers, or find out what a quote takes.
          </p>
        </div>

        {/* Chat card */}
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden">
            {/* Messages */}
            <div
              ref={containerRef}
              className={`overflow-y-auto ${hasMessages ? "min-h-[200px] max-h-[480px]" : ""} py-4 space-y-3`}
            >
              {/* Welcome state */}
              {!hasMessages && (
                <div className="px-4 sm:px-6 py-8">
                  <div className="flex items-start gap-3 mb-6">
                    <Avatar />
                    <div className="bg-sky rounded-2xl rounded-bl-md px-5 py-3 text-sm text-text-primary leading-relaxed max-w-[85%]">
                      Hi! I&apos;m the Linwood Guardian assistant. I can answer
                      questions about commercial and personal insurance, help you
                      figure out what coverage you need, or connect you with our
                      team. How can I help?
                    </div>
                  </div>

                  {/* Suggestion chips */}
                  <div className="flex flex-wrap gap-2 ml-11">
                    {chips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => sendMessage(chip)}
                        className="text-sm border border-teal/25 text-teal bg-sky/60 hover:bg-teal/10 hover:border-teal/40 rounded-full px-4 py-2 transition-all"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Conversation */}
              {hasMessages && (
                <div className="px-3 sm:px-4 space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex items-start gap-2.5 chat-msg-enter ${
                        msg.role === "user" ? "flex-row-reverse" : ""
                      }`}
                    >
                      {msg.role === "assistant" && <Avatar />}
                      <div
                        className={`max-w-[80%] px-4 py-2.5 text-sm leading-relaxed ${
                          msg.role === "user"
                            ? "bg-teal text-white rounded-2xl rounded-br-md"
                            : "bg-sky text-text-primary rounded-2xl rounded-bl-md"
                        }`}
                      >
                        {msg.role === "user"
                          ? msg.content
                          : msg.content
                          ? renderContent(msg.content)
                          : null}
                      </div>
                    </div>
                  ))}

                  {isLoading &&
                    messages[messages.length - 1]?.content === "" && (
                      <div className="flex items-start gap-2.5">
                        <Avatar />
                        <div className="bg-sky rounded-2xl rounded-bl-md px-4 py-3">
                          <div className="flex items-center gap-1">
                            <span
                              className="w-1.5 h-1.5 bg-text-secondary/50 rounded-full animate-bounce"
                              style={{ animationDelay: "0ms" }}
                            />
                            <span
                              className="w-1.5 h-1.5 bg-text-secondary/50 rounded-full animate-bounce"
                              style={{ animationDelay: "150ms" }}
                            />
                            <span
                              className="w-1.5 h-1.5 bg-text-secondary/50 rounded-full animate-bounce"
                              style={{ animationDelay: "300ms" }}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border p-4 bg-warm-white">
              <div className="flex items-end gap-3">
                <textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={handleInput}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask about insurance..."
                  disabled={isLoading}
                  rows={1}
                  className="flex-1 resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:ring-2 focus:ring-teal/20 focus:border-teal disabled:opacity-50 transition-all"
                />
                <button
                  onClick={handleSubmit}
                  disabled={!inputValue.trim() || isLoading}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-navy hover:bg-navy-dark text-white transition-all disabled:opacity-30 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Send message"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <p className="text-[10px] text-text-secondary/60 mt-2 text-center">
                AI assistant — responses are informational, not insurance advice.
              </p>
            </div>
          </div>
        </div>

        <div className="h-12" />
      </section>

      {/* Launcher pill — scrolls to the chat section, hides when it's in view */}
      <button
        onClick={scrollToChat}
        aria-hidden={!launcherVisible}
        tabIndex={launcherVisible ? 0 : -1}
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-navy hover:bg-navy-dark text-white pl-4 pr-5 py-3 rounded-full shadow-lg shadow-navy/25 hover:shadow-xl transition-all duration-300 group ${
          launcherVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ShieldIcon className="w-5 h-5 text-teal-light" />
        <span className="text-sm font-medium">Ask a question</span>
        <svg
          className="w-4 h-4 text-white/50 group-hover:text-white/80 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </>
  );
}
