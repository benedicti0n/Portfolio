import React from 'react';

const Navbar = () => {
  return (
    <div className='h-screen flex flex-col justify-evenly items-center fixed right-0 top-0'>
      <div className='rotate-[270deg]'>
        LinkedIn
      </div>
      <div className='rotate-[270deg]'>
        Github
      </div>
      <div className='rotate-[270deg]'>
        Twitter
      </div>
    </div>
  );
};

export default Navbar;
