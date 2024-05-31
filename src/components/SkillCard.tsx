'use client'

import React from 'react'
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

type Props = {
    title: string;
    imagePath: string;
}

export default function SkillCard({title, imagePath} : Props) {
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none items-center flex-row"
    >
      <Image
        alt={title}
        className="object-cover"
        height={500}
        src={imagePath}
        width={500}
      />
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-black/80 py-1">{title}</p>
      </CardFooter>
    </Card>
  )
}
