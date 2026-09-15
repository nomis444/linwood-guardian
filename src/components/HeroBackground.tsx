import Image from "next/image";

/**
 * Buffalo skyline (City Hall, downtown) behind every page hero. The photo is
 * the same one the previous site used, restored at Tamara's request. It is
 * black and white and sits under a navy wash so the white hero text keeps its
 * contrast; the wash is heaviest on the left where the copy sits. Lightened
 * 2026-09-15 at Tamara's request; contrast behind the copy is measured in
 * ../../contrast.mjs, keep it above 4.5:1 for the body text.
 */
export function HeroBackground({ priority = false }: { priority?: boolean }) {
  return (
    <div className="absolute inset-0" data-hero-bg aria-hidden="true">
      <Image
        src="/images/buffalo-skyline.jpg"
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-[70%_40%] opacity-85"
      />
      {/* Phone: the copy spans the full width, so a flat wash. Desktop: heavy on the left under the copy, open on the right over City Hall. */}
      <div className="absolute inset-0 bg-navy/70 md:bg-transparent md:bg-gradient-to-r md:from-navy/80 md:via-navy/66 md:via-55% md:to-navy/10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/40 to-transparent" />
    </div>
  );
}
