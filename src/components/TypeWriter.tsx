'use client'

import React from 'react';
import Typewriter from 'typewriter-effect';

export default function TypeWriterEffect() {
  const strings = [
    'Web Developer',
    'Backend Developer',
  ]
  return (
    <div className='text-blue-400 text-7xl my-auto font-semibold'>
        <div className='bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 text-transparent bg-clip-text'>
            <h1>I am a . . .</h1>
            <Typewriter
              options={{
                cursorClassName: '',
                cursor:'_',
                strings,
                autoStart: true,
                loop: true,
              }}
        />
        </div>
    </div>
  )
}
