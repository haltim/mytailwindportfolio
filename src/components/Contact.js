import React from 'react'

import { useForm } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mnqldawk");

  return (
    <section className='my-28' id='contact'>
      <header className='px-5 text-2xl font-bold pt-10'>
        <h2>Contact Me</h2>
        <p className='text-base font-thin'>I'd love to hear your thoughts!</p>
      </header>
      <div className='md:mx-6 flex flex-col flex-wrap md:flex-row justify-between'>
        <div className='md:w-6/12 md:px-0 p-5 my-5'>
          <div>
            <p className='font-bold'>Odugbemi Timothy</p>
            <a href='mailto:timoayomide2000@gmail.com' className='border-b-2 mt-3 inline-block border-gray-500 hover:text-red-300'>
              timoayomide2000@gmail.com
            </a>
          </div>
          <a className='border-b-2 mt-3 inline-block border-gray-500 hover:text-red-300' href='./MyResume.pdf' target='_blank' rel='noreferrer'>
            Resume
          </a>
          <div className='flex flex-row flex-wrap mt-7'>
            <div className='mr-4'>
              <a href='https://www.linkedin.com/mwlite/in/timothy-odugbemi-328035167' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm hover:bg-purple-500'>
                  <img src='./images/icons/linkedin-3-24.png' alt='' width='24px' height='24px' className='mr-1' />
                  LinkedIn
                </span>
              </a>
            </div>

            <div className='mr-4'>
              <a href='https://github.com/haltim' target='_blank' rel='noreferrer'>
                <span className='mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm hover:bg-purple-500'>
                  <img src='./images/icons/github-8-24.png' alt='' width='24px' height='24px' className='mr-1' />
                  GitHub
                </span>
              </a>
            </div>

            

            
          </div>
        </div>

        <div className='bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 '>
          <form className='flex flex-col space-y-3 m-auto w-full' name="contact" method="POST" onSubmit={handleSubmit}>
          <input type="hidden" name="form-name" value="contact"/>
            
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id='name' className='gradient pl-1 pr-1' required></input>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id='email' className='gradient pl-1 pr-1' required></input>
            <label htmlFor="message">Message</label>
            <textarea name="message" id='message' cols='25' rows='5' className='gradient pl-1 pr-1' required></textarea>
            <button type="submit" className='border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md hover:bg-purple-500' disabled={state.submitting}>
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className='relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm'onClick={() => window.scroll(0, 0)}>
        <picture>
        
        </picture>
      </div>
    </section>
  )
}

export default Contact