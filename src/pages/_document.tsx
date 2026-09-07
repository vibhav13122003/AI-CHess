import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/x-icon" href="/favicon-32x32-v3.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="180x180"
          href="/favicon-32x32-v3.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="128x128"
          href="/favicon-32x32-v3.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="64x64"
          href="/favicon-32x32-v3.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32-v3.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-32x32-v3.png"
        />
        <meta
          name="description"
          content="Analyze your chess games for free on any device with Stockfish!"
        />

        {/* OG (Social networks) */}
        <meta property="og:title" content="ChessAi" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ChessAi" />
        <meta property="og:url" content="https://ai-c-hess-e5f2.vercel.app/" />
        <meta
          property="og:image"
          content="https://ai-c-hess-e5f2.vercel.app/favicon-32x32-v3.png"
        />
        <meta
          property="og:description"
          content="Analyze your chess games for free on any device with Stockfish!"
        />

        {/* Twitter */}
        <meta name="twitter:title" content="ChessAi" />
        <meta name="twitter:domain" content="chesskit.org" />
        <meta name="twitter:url" content="https://ai-c-hess-e5f2.vercel.app/" />
        <meta
          name="twitter:description"
          content="Analyze your chess games for free on any device with Stockfish!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://ai-c-hess-e5f2.vercel.app/favicon-32x32-v3.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
