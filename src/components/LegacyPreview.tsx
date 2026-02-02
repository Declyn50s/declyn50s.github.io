type Props = {
  title: string;
  src: string;
  height?: number;
};

export default function LegacyPreview({ title, src, height = 720 }: Props) {
  const base = import.meta.env.BASE_URL; // important si tu déploies sur GitHub Pages
  const fullSrc = `${base}${src}`.replace(/\/{2,}/g, "/");

  return (
    <div className="rounded-2xl overflow-hidden border shadow-sm bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <p className="text-sm font-medium">{title}</p>

        <a
          href={fullSrc}
          target="_blank"
          rel="noreferrer"
          className="text-xs px-3 py-1.5 rounded-full border hover:bg-slate-50"
        >
          Ouvrir en plein écran
        </a>
      </div>

      <iframe
        title={title}
        src={fullSrc}
        style={{ width: "100%", height }}
        loading="lazy"
        className="bg-white"
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
      />
    </div>
  );
}
