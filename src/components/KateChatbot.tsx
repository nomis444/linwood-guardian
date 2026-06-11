"use client";

import { useEffect } from "react";

export function KateChatbot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.retellai.com/chat-embed.js";
    script.async = true;
    script.onload = () => {
      // @ts-expect-error Retell SDK global
      if (window.RetellChat) {
        // @ts-expect-error Retell SDK global
        new window.RetellChat({
          agentId: "agent_b8ac888b7c9e0fe8e81107f7f5",
          triggerType: "bubble",
          bubblePosition: "bottom-right",
          bubbleStyle: {
            backgroundColor: "#2B7A78",
            color: "#FFFFFF",
          },
        });
      }
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
