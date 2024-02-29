import React from 'react'

const Home = () => {
    return (
    <>
    <div className='w-[80%]'>
        <div className='flex flex-col'>
            <div className='text-3xl p-4'>Hello web cowboy</div>
            <div className='text-8xl'>I'm Ash</div>
        </div>
        <div className='flex w-full'>
            <div className=' text-start w-[50%] p-4 py-10'>Hi! I'm a Full Stack Web Developer based in Kolkata.
            Everyday I learn, read and practice to create the best interfaces as possible. It's beautiful to have a passion and a work at the same time, don't you think ?</div>
            <div className='flex justify-center flex-col text-start pl-12'>
                <div className='mb-4'>If you want my resume</div>
                <div className='mt-4'>Or have a chat</div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Home