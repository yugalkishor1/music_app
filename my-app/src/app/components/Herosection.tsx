import React from 'react'
import Link from 'next/link'
import { Button } from "./ui/moving-border";

function Herosection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col  items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 sp space-y-8">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">Master the Art of the Music</h1>
      <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum nisi aperiam fuga molestiae! Beatae, expedita accusamus! Iusto fuga expedita distinctio harum veritatis dolorem voluptatum odit.
      </p>
      <div className='flex mr-8'>
        <Link href={'/courses'}>
          <Button 
            borderRadius="10rem"
            // className=" dark:bg-slate-900 dark:text-white border-neutral-200 dark:border-slate-800"
            duration={1500}
          >
            Explore
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default Herosection