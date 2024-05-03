/* eslint-disable react/prop-types */
import React from "react";

function ResponsiveYouTubeEmbed({ youtubeUrl }) {
  const videoId = youtubeUrl.split("v=")[1];

  return (
    <div className="aspect-w-16 aspect-h-9 h-[50vh] my-6">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full"
      ></iframe>
    </div>
  );
}

export default ResponsiveYouTubeEmbed;
