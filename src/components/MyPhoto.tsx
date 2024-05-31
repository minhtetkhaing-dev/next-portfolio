'use client'

import React from 'react'
import {Image} from "@nextui-org/react";

export default function MyPhoto() {
  return (
    <div className='m-auto'>
      <Image
        isBlurred
        width={1000}
        alt="NextUI hero Image"
        src="/images/developer.png"
      />
    </div>
  )
}
