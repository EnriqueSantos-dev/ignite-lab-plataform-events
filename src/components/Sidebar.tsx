import React, { useContext } from 'react';

import { gql, useQuery } from '@apollo/client';
import { Lesson } from './Lesson';
import classNames from 'classnames';
import { ContextMenu } from '../context/MenuContext';
import { useGetAllLessonsQuery } from '../graphql/generated';

export function Sidebar() {
  const { data } = useGetAllLessonsQuery();

  const { isActive } = useContext(ContextMenu);

  return (
    <aside
      className={classNames(
        'w-[348px] relative bg-gray-700 border-l border-gray-500 p-6 transition-opacity',
        {
          'md:hidden sm:hidden md:opacity-0': !isActive,
          'md:absolute md:block md:w-screen md:px-6 sm:absolute sm:w-screen sm:block sm:px-6 z-50 h-full opacity-100':
            isActive,
        }
      )}>
      <span className='font-bold text-2xl pb-6 border-b border-gray-500 block'>
        Cronograma de aulas
      </span>
      <div>
        {data?.lessons.map(lesson => {
          return (
            <Lesson
              key={lesson.id}
              id={lesson.id}
              title={lesson.title}
              availableAt={new Date(lesson.availableAt)}
              slug={lesson.slug}
              type={lesson.lessonType}
            />
          );
        })}
      </div>
    </aside>
  );
}
