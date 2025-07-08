'use client'

import Script from 'next/script';

export default function InstagramEmbed() {
  return (
    <>
      {/* Load the Instagram embed script early */}
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        }}
      />

      <div className="w-full sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/dripcaphe_espressobar/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow: "0 0 1px rgba(0,0,0,0.5), 0 1px 10px rgba(0,0,0,0.15)",
            margin: "1px",
            padding: 0,
            width: "100%",
            maxWidth: "100%",
          }}
        >
          <a
            href="https://www.instagram.com/dripcaphe_espressobar/?utm_source=ig_embed&amp;utm_campaign=loading"
            target="_blank"
            rel="noreferrer"
          >
            View this post on Instagram
          </a>
        </blockquote>
      </div>
    </>
  );
}
