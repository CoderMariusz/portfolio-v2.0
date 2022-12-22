import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html
      lang='en'
      class='scroll-smooth'>
      <Head />
      <body className='bg-zinc-900 text-slate-200 scroll-smooth'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
