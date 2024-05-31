import React from 'react'
import TypeWriterEffect from './TypeWriter'
import MyPhoto from './MyPhoto'

export default function HomePage() {
  return (
    <section id="home" className='grid gap-4 grid-cols-2 h-screen'>
        <div className="flex h-full">
          <TypeWriterEffect/>
        </div>
        <div className='flex h-full'>
          <MyPhoto/>
        </div>
    </section>
  )
}
