import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang='en'
      class='scroll-smooth'>
      <Head />
      <body className='bg-zinc-900 text-slate-200 scroll-smooth  scrollbar-track-gray-400/20 scrollbar-thumb-yellow-400/70'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
