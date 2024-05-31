import React from 'react'
import SkillCard from './SkillCard'
import data from '@/data/skills.json'
import {Divider} from "@nextui-org/react";

const programmings = data.programmings
const frameworks = data.frameworks
const databases = data.databases
const others = data.others

export default function Skills() {
  return (
    <section id='skills' className='h-screen pt-28'>
      <div className='grid gap-4 grid-cols-8'>
        {
          programmings.map((item, index) => (
            <SkillCard key={index} title={item.title} imagePath={item.imagePath}/>
          ))
        }
      </div>

      <Divider orientation="horizontal" className='my-10'/>

      <div className='grid gap-4 grid-cols-8'>
        {
          frameworks.map((item, index) => (
            <SkillCard key={index} title={item.title} imagePath={item.imagePath}/>
          ))
        }
      </div>

      <Divider orientation="horizontal" className='my-10'/>

      <div className='grid gap-4 grid-cols-8'>
        {
          databases.map((item, index) => (
            <SkillCard key={index} title={item.title} imagePath={item.imagePath}/>
          ))
        }
      </div>

      <Divider orientation="horizontal" className='my-10'/>

      <div className='grid gap-4 grid-cols-8'>
        {
          others.map((item, index) => (
            <SkillCard key={index} title={item.title} imagePath={item.imagePath}/>
          ))
        }
      </div>
    </section>
  )
}
