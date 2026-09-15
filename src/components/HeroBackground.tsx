import Image from "next/image";

/**
 * Buffalo skyline (City Hall, downtown) behind every page hero. The photo is
 * the same one the previous site used, restored at Tamara's request. It is
 * black and white and sits under a navy wash so the white hero text keeps its
 * contrast; the wash is heaviest on the left where the copy sits.
 */
export function HeroBackground({ priority = false }: { priority?: boolean }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src="/images/buffalo-skyline.jpg"
        alt=""
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-[70%_40%] opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/55" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy/70 to-transparent" />
    </div>
  );
}
