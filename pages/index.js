import Head from 'next/head';
import About from '../components/About';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-scroll z-0'>
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
      <section
        id='hero'
        className='snap-center'>
        <Hero />
      </section>
      {/* TODO: About*/}
      <section
        id='about'
        className='snap-center'>
        <About />
      </section>
      {/* TODO: Experience*/}
      <section
        id='experience'
        className='snap-center'>
        <Experience />
      </section>
      {/* TODO: Skills*/}
      <section
        id='skills'
        className='snap-center'>
        <Skills />
      </section>
      {/* TODO: Projects*/}
      {/* TODO: Contact Me*/}
    </div>
  );
}
