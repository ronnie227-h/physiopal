type Props = { url: string; className?: string; title?: string };

function getYouTubeId(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com")) {
      return u.searchParams.get("v");
    }
    if (u.hostname.includes("youtu.be")) {
      return u.pathname.slice(1) || null;
    }
    return null;
  } catch {
    return null;
  }
}

export default function VideoPlayer({ url, className, title }: Props) {
  const ytId = getYouTubeId(url);
  if (ytId) {
    const embed = `https://www.youtube.com/embed/${ytId}`;
    return (
      <div className={className}>
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-black">
          <iframe
            className="h-full w-full"
            src={embed}
            title={title || "YouTube video player"}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
  const isMp4 = url.endsWith(".mp4") || url.includes("samplelib.com");
  if (isMp4) {
    return (
      <video controls className={`rounded-xl w-full h-60 object-cover ${className ?? ""}`}>
        <source src={url} type="video/mp4" />
      </video>
    );
  }
  return (
    <a
      href={url}
      target="_blank"
      className={`inline-flex items-center justify-center rounded-lg border px-3 py-2 hover:bg-gray-50 ${className ?? ""}`}
    >
      Open Video
    </a>
  );
}


