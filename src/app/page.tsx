import React from "react";
import Skills from '../components/Skills';
import Experiences from '../components/Experiences';
import Projects from '../components/Projects';
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <HomePage/>
      <Skills/>
      <Experiences/>
      <Projects/>
    </>
  );
}
