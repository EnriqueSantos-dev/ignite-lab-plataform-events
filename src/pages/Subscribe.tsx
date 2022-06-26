import React, { useState } from 'react';

('@apollo/client');
import { Logo } from '../components/Logo';
import { useNavigate } from 'react-router-dom';
import {
  useCreateSubscribeMutation,
  useGetUserByEmailLazyQuery,
} from '../graphql/generated';

import reactIconImg from '../assets/ReactJS-icon.png';
import codeMockupImg from '../assets/code-mockup.png';

export function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const [getUserByEmail] = useGetUserByEmailLazyQuery({
    variables: {
      email,
    },
  });

  const [createSubscribe, { loading }] = useCreateSubscribeMutation({
    variables: {
      name: name,
      email: email,
    },
    onCompleted: () => {
      navigate('/event');
    },
    onError: error => {
      console.log(error);
    },
  });

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const emailIsExists = await getUserByEmail();

    if (!emailIsExists.data) {
      await createSubscribe();
    } else {
      navigate('/event');
    }
  };

  return (
    <div className='bg-blur bg-cover min-h-screen relative overflow-hidden '>
      <img
        className='max-w-[654px] min-w-[573px] w-full absolute block left-2/4 -translate-x-2/4 mt-[10px] pointer-events-none'
        src={reactIconImg}
        alt=''
        id='react__icon__img'
      />
      <div className='flex flex-col max-w-[1100px] w-full mx-auto mt-20 '>
        <div className='flex justify-between  sm:flex-col '>
          <div className='max-w-[624px] w-full customMd:px-6 sm:px-6'>
            <Logo />
            <h3 className='text-[2.5rem] sm:text-[1.9rem] leading-tight mt-8'>
              Construa uma{' '}
              <strong className='text-blue-500'>aplicação completa</strong>, do
              zero, com <strong className='text-blue-500'>React</strong>
            </h3>
            <p className='text-base text-gray-300 mt-6 sm:text-sm'>
              Em apenas uma semana você vai dominar na prática uma das
              tecnologias mais utilizadas e com alta demanda para acessar as
              melhores oportunidades do mercado.
            </p>
          </div>
          <div className='p-8 bg-gray-700 rounded border border-gray-500 min-w-[360px] sm:mt-8 sm:px-6'>
            <strong className='text-2xl text-gray-200'>
              Inscreva-se gratuitamente
            </strong>
            <form onSubmit={event => onSubmit(event)} className='w-full mt-6'>
              <div className='flex flex-col gap-1'>
                <input
                  className='text-base placeholder:text-gray-300 bg-gray-900 rounded p-5 w-full
                  border border-gray-700 outline-none focus:border-green-500 hover:border-green-500'
                  type='text'
                  placeholder='Seu nome completo'
                  name='name'
                  required
                  minLength={5}
                  onChange={e => setName(e.target.value)}
                />
                <input
                  className='text-base placeholder:text-gray-300 bg-gray-900 rounded p-5 w-full
                  border border-gray-700 outline-none focus:border-green-500 hover:border-green-500'
                  type='email'
                  placeholder='Digite seu email'
                  name='email'
                  required
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <button
                className='flex items-center bg-green-500 justify-center
                w-full uppercase font-bold text-white text-sm mt-[2.5rem] py-4 px-20 rounded hover:bg-green-700 transition-colors
                sm:px-16
                '
                type='submit'
                disabled={loading}>
                {loading ? (
                  <span className='w-5 h-5 rounded-full border-2 animate-spin text-white border-b-transparent'></span>
                ) : (
                  'garantir minha vaga'
                )}
              </button>
            </form>
          </div>
        </div>
        <div>
          <img src={codeMockupImg} alt='' />
        </div>
      </div>
    </div>
  );
}
