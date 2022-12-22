import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mariusz Portfolio v2</title>
        <meta
          name='description'
          content='Mariusz Portfolio v2'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>
      {/* TODO: Header*/}
      <Header />
      {/* TODO: Hero*/}
      <section id='hero'>
        <Hero />
      </section>
      {/* TODO: About*/}
      <section id='about'></section>
      {/* TODO: Experience*/}
      {/* TODO: Skills*/}
      {/* TODO: Projects*/}
      {/* TODO: Contact Me*/}
    </div>
  );
}
