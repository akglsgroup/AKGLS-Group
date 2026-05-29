import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <body className="bg-[#05070a] text-slate-300 font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
