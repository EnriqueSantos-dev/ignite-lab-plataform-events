import React from 'react';

import { DefaultUi, Player, Youtube } from '@vime/react';
import {
  CaretRight,
  DiscordLogo,
  FileArrowDown,
  Image,
  Lightning,
} from 'phosphor-react';
import '@vime/core/themes/default.css';

import { Link } from 'react-router-dom';
import { useGetLessonBySlugQuery } from '../graphql/generated';

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data, loading } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    },
  });

  if (loading) {
    return (
      <div className='flex flex-1 justify-center items-center '>
        <span className='w-10 h-10 rounded-full border-3 animate-spin text-green-500 border-b-transparent'></span>
      </div>
    );
  }
  if (!data?.lesson) {
    return <div>aulas não encontrada</div>;
  }

  return (
    <div className='flex-1'>
      <div className='bg-black flex justify-center items-center'>
        <div className='aspect-video h-full w-full max-w-[1100px] max-h-[60vh]'>
          <Player>
            {data?.lesson.videoId && <Youtube videoId={data?.lesson.videoId} />}
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className='w-full max-w-[1100px] mx-auto p-8'>
        <div className='flex items-start gap-16 md:flex-col sm:flex-col '>
          <div className='flex-1'>
            <h1 className='font-bold text-2xl text-gray-200'>
              {data?.lesson.title}
            </h1>
            <p className='text-base text-gray-300 leading-relaxed mt-4'>
              {data?.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className='flex items-center mt-6 gap-4'>
                <img
                  className='rounded-full h-16 w-16 border-2 border-blue-500'
                  src={data?.lesson.teacher.avatarURL}
                  alt='avatar'
                />
                <div>
                  <strong className='text-xl  text-gray-200'>
                    {data?.lesson.teacher.name}
                  </strong>
                  <span className='text-sm text-gray-400 block leading-relaxed'>
                    {data?.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className='flex flex-col gap-4 md:block sm:block md:w-full sm:w-full'>
            <Link
              to=''
              className='flex items-center justify-center gap-2 py-4 px-6
              text-sm text-white uppercase font-bold  bg-green-500 rounded-md hover:bg-green-700 transition-colors md:w-full sm:w-full md:mb-4 sm:mb-4'>
              <DiscordLogo size={24} />
              Comunidade no discord
            </Link>
            <Link
              to=''
              className='flex items-center justify-center gap-2 py-4 px-6 rounded-md border 
              text-sm text-blue-500 uppercase font-bold border-blue-500 hover:bg-blue-500 hover:text-gray-900 transition-colors md:w-full sm:w-full'>
              <Lightning size={24} />
              Acesse o desafio
            </Link>
          </div>
        </div>

        <div className='flex gap-8 mt-28 md:flex-col sm:flex-col'>
          <Link
            to=''
            className='flex items-stretch bg-gray-700 overflow-hidden rounded-md gap-6 hover:bg-gray-600 transition-colors'>
            <div className='flex items-center justify-center bg-green-500 h-full p-6 sm:h-auto'>
              <FileArrowDown size={40} />
            </div>
            <div className='py-6 leading-relaxed '>
              <strong className='text-2xl first-letter:capitalize'>
                Material complementar
              </strong>
              <p className='text-sm text-gray-300 mt-2'>
                Acesse o material complementar para acelerar o seu
                desenvolvimento
              </p>
            </div>
            <div className='flex items-center justify-center h-full p-6 text-blue-500 sm:h-auto'>
              <CaretRight size={24} />
            </div>
          </Link>

          <Link
            to=''
            className='flex items-stretch bg-gray-700 overflow-hidden rounded-md gap-6 hover:bg-gray-600'>
            <div className='flex items-center justify-center bg-green-500 h-full p-6 sm:h-auto'>
              <Image size={40} />
            </div>
            <div className='py-6 leading-relaxed '>
              <strong className='text-2xl first-letter:capitalize'>
                Wallpapers
              </strong>
              <p className='text-sm text-gray-300 mt-2'>
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua
                máquina
              </p>
            </div>
            <div className='flex items-center justify-center h-full p-6 text-blue-500 sm:h-auto'>
              <CaretRight size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
