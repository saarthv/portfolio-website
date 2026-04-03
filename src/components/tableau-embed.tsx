"use client";

type TableauEmbedProps = {
  src: string;
  title: string;
};

export function TableauEmbed({ src, title }: TableauEmbedProps) {
  const normalizedSrc = src.includes("?:showVizHome=no")
    ? src
    : `${src.split("?:")[0]}?:showVizHome=no`;

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#130d21] p-2">
      <iframe
        title={title}
        src={normalizedSrc}
        className="h-[720px] w-full rounded-xl border-0"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
}
