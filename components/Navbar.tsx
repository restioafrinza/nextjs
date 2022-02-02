import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {

    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

  return (
    <>
      <nav className='flex items-center flex-wrap bg-white  p-1 drop-shadow-md'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' className='fill-current text-gray-400 h-8 w-8 mr-2' >
              <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z' />
            </svg>
            <span className='text-xl text-gray-400 font-bold uppercase tracking-wide'>
              Tailwind CSS
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3  rounded lg:hidden text-gray-400 ml-auto hover:text-gray-700 outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 font-medium items-center justify-center  hover:text-gray-700 '>
                Home
              </a>
            </Link>
            <Link href='/profil'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 font-medium items-center justify-center  hover:text-gray-700'>
                Profil
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 font-medium items-center justify-center  hover:text-gray-700'>
                About us
              </a>
            </Link>
            <Link href='/'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 font-medium items-center justify-center  hover:text-gray-700'>
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};