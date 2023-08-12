import React from 'react'
import { Button } from "@material-tailwind/react";

type HeroProps = {
	title?: string;
	tagline?: string;
    align?: 'start' | 'center';
}


const Hero = ({}:HeroProps) => {
  return (
    <header className='container grid gap-8 text-center place-items-center'>
	<div className="flex flex-col gap-8 max-w-[38rem]">
		<h1 className="text-5xl font-bold leading-tight lg:text-6xl drop-shadow-xl font-body xl:text-7xl text-ivory">Hello, my name is Carina Diesel</h1>
		<p className="text-xl leading-normal lg:text-2xl drop-shadow-2xl ms-auto text-ivory">I am a Full Stack Developer who is currently based in Mpumalanga, South Africa.</p>
	</div>
	<div className='flex items-center justify-center gap-8 w-96'>
	<Button className='flex items-center justify-center w-1/2 gap-2 font-brand bg-primary hover:bg-trueBlue'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffff" viewBox="0 0 256 256"><path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V124a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,152v24a12,12,0,0,1-24,0V152a16,16,0,0,0-32,0v24a12,12,0,0,1-24,0ZM96,124v52a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path></svg>LinkedIn</Button>
	<Button className='flex items-center justify-center w-1/2 gap-2 font-brand bg-primary hover:bg-trueBlue'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#ffff" viewBox="0 0 256 256"><path d="M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm100.49-60.49a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17,0l-24-24a12,12,0,0,1,17-17L116,155V124a12,12,0,0,1,24,0v31l3.51-3.52A12,12,0,0,1,160.49,151.51Z"></path></svg>Download CV</Button>
	</div>
	<slot />
</header>
  )
}

export default Hero