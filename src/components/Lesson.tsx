import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { format, isPast } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR/index.js';
import { CheckCircle, Lock } from 'phosphor-react';
import classNames from 'classnames';
import { useMenuContext } from '../context/MenuContext';

export interface LessonProps {
  id: string;
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { setActive } = useMenuContext();

  const isAvailableAt = isPast(props.availableAt);
  const { slug } = useParams<{ slug: string }>();
  const isActive = slug === props.slug;

  const formattedDate = format(
    props.availableAt,
    "EEEE' • 'dd' de 'LLLL' • 'H'h'mm",
    {
      locale: ptBR,
    }
  );

  const handleClicckLesson = () => {
    setActive(false);
  };

  return (
    <div
      className={classNames('group', {
        'cursor-not-allowed': !isAvailableAt,
      })}>
      <Link
        to={`lesson/${props.slug}`}
        className={classNames('mt-6 block', {
          'pointer-events-none': !isAvailableAt,
        })}
        onClick={handleClicckLesson}>
        <span className='text-gray-300 text-base first-letter:capitalize'>
          {formattedDate}
        </span>

        <div
          className={classNames(
            'mt-2 border rounded-md border-gray-500 p-4 group-hover:border-green-500 transition-colors relative',
            {
              'group-hover:border-orange-500': !isAvailableAt,
              'bg-green-500 text-white before:border-[13px] before:border-t-transparent before:border-l-transparent before:border-b-transparent before:absolute before:-translate-y-2/4 before:rounded-[4px] before:-left-6 before:top-2/4  before:border-green-500 before:z-10 border-0 ':
                isActive,
            }
          )}>
          <header className='flex justify-between items-center'>
            {isAvailableAt ? (
              <>
                <span
                  className={classNames(
                    'flex items-center text-sm gap-2 first-letter:capitalize',
                    {
                      'text-white': isActive,
                      'text-blue-500 ': !isActive,
                    }
                  )}>
                  <CheckCircle size={20} />
                  Conteúdo liberado
                </span>
              </>
            ) : (
              <>
                <span className='flex items-center text-sm gap-2 text-orange-500 first-letter:capitalize'>
                  <Lock size={20} />
                  Em breve
                </span>
              </>
            )}
            <span
              className={classNames(
                'py-[2px] px-2 border rounded-md border-green-300 text-xs ',
                {
                  'group-hover:border-orange-500': !isAvailableAt,
                  'border-white': isActive,
                }
              )}>
              {props.type === 'live' ? 'AO VIVO' : 'Aula Prática'}
            </span>
          </header>
          <strong className='text-base block mt-4'>{props.title}</strong>
        </div>
      </Link>
    </div>
  );
}
