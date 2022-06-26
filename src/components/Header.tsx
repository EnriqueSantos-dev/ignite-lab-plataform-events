import classNames from 'classnames';
import React, { useContext, useState } from 'react';
import { ContextMenu } from '../context/MenuContext';
import { Logo } from './Logo';

export function Header() {
  const { setActive, isActive } = useContext(ContextMenu);

  return (
    <header className='flex items-center justify-center py-5 w-full bg-gray-700 border-b border-gray-500 md:justify-between sm:px-5 sm:justify-between md:px-5'>
      <Logo />
      <div
        className=' items-center gap-2 group cursor-pointer hidden md:flex sm:flex'
        onClick={() => {
          setActive(!isActive);
        }}>
        <span className='text-sm capitalize'>aulas</span>
        <div className='flex justify-between flex-col w-6 h-4 '>
          <span
            className={classNames(
              'w-full h-[3px]  rounded block bg-blue-500 transition-transform duration-100 ease-linear',
              {
                'rotate-45 translate-y-[7px]': isActive,
              }
            )}></span>
          <span
            className={classNames(
              'w-full h-[3px] rounded block bg-blue-500 transition-transform',
              {
                hidden: isActive,
              }
            )}></span>
          <span
            className={classNames(
              'w-full h-[3px] bg-blue-500 rounded block  duration-100 ease-linear transition-transform',
              {
                'rotate-[135deg] -translate-y-[6px]': isActive,
              }
            )}></span>
        </div>
      </div>
    </header>
  );
}
