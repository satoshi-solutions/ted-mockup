'use client';

interface VideoPlayerProps {
  vimeoId: string;
}

const VideoPlayer = ({ vimeoId }: VideoPlayerProps) => {
  return (
    <div className="relative pt-[56.25%]">
      <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?h=1234567890&title=0&byline=0&portrait=0`}
        className="absolute top-0 left-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title="Video player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer; 