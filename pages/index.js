import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-zinc-700/40 scrollbar-thumb-yellow-700/80 '>
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
      <section
        id='projects'
        className='snap-center'>
        <Projects />
      </section>
      {/* TODO: Contact Me*/}
      <section
        id='contact'
        className='snap-center'>
        <Contact />
      </section>
      <Link href='#top'>
        <footer className='absolute bottom-2 left-[48%] '>
          <Image
            src='/photo.jpg'
            width={24}
            height={24}
            alt='Mariusz'
            className='rounded-full'
          />
        </footer>
      </Link>
    </div>
  );
}
