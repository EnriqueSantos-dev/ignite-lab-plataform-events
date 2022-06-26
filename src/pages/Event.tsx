import React from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';
import { Video } from '../components/Video';

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <>
      <Header />
      <main className='flex flex-1 relative'>
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className='flex-1 flex items-center justify-center text-green-500 text-4xl'>
            Selecione uma aula
          </div>
        )}
        <Sidebar />
      </main>
    </>
  );
}
