import { PreviewSuspense } from 'next-sanity/preview';
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
import { client } from '../lib/sanity.client';
import groq from 'groq';

export const pageInfoQuery = groq`  *[_type == 'pageInfo']{
...,
}`;
export const socialQuery = groq`  *[_type == 'social']{
...,
}`;
export const projectQuery = groq`  *[_type == 'project']{
  _id,
  name,
  "image": projectImage.asset->url,
  url,
  "description": projectDescription,
  }`;
export const skillsQuery = groq`  *[_type == 'skill']{
    name,
    "image": skillImage.asset->url,
    }`;

export const getStaticProps = async ({ preview = false }) => {
  if (preview) {
    return { props: { preview } };
  }

  const pageInfo = await client.fetch(pageInfoQuery);
  const socialRef = await client.fetch(socialQuery);
  const projectRef = await client.fetch(projectQuery);
  const skillsRef = await client.fetch(skillsQuery);

  return { props: { preview, pageInfo, socialRef, projectRef, skillsRef } };
};

export default function Home({
  preview,
  pageInfo,
  socialRef,
  projectRef,
  skillsRef
}) {
  if (preview) {
    return <div>Preview Mode</div>;
  }
  const {
    email,
    address,
    name,
    profileImage,
    role,
    heroImage,
    phone,
    socials,
    backgroundInfo
  } = pageInfo[0];
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
      <Header
        socials={socials}
        email={email}
        socialRef={socialRef}
      />
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
        <About
          backgroundInfo={backgroundInfo}
          profileImage={profileImage}
        />
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
        <Projects projects={projectRef} />
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
