import React, { FunctionComponent } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Tooltip,
    IconButton,
  } from "@material-tailwind/react";

type CardRow = {
    image: string,
    title: string,
    aboutTxt: string,
}

const CardItem : FunctionComponent<CardRow> = ({
    image,
    title,
    aboutTxt
}) => {
    return (
        <Card className="w-full max-w-[26rem] shadow-lg bg-image-main bg-center bg-cover border-primary border-2">
      <CardHeader floated={false} color="blue-gray">
        <img
          src={image}
        />
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between pt-3 mb-5 font-brand">
          <Typography variant="h5" color="blue-gray" className="text-2xl text-brand text-ivory">
            {title}
          </Typography>
        </div>
        <Typography className="text-lg font-body text-ivory" color="gray">
          {aboutTxt}
        </Typography>
      </CardBody>
      <CardFooter className="flex gap-2 pt-5">
        <Button size="lg" fullWidth={true} className='bg-primary hover:bg-trueBlue'>
          Repository
        </Button>
        <Button size="lg" fullWidth={true} className='bg-primary hover:bg-trueBlue'>
          Live Demo
        </Button>
      </CardFooter>
    </Card>
    )
}

type Project = {

}

type WorkProps = {

}

const Work = ({}:WorkProps) => {
    let project1 = {
        image: "/src/assets/calico-creatives.png",
        title: "Calico Creatives",
        aboutTxt: "Website for Calico Creatives. Design created in Adobe XD by Calico Creatives owner,and I translated the design to a React and Tailwind Website."
    }
    
    let projects = [project1]
  return (
    <div className='w-full lg:mb-16'>
        <div className='flex flex-col items-center gap-4 lg:items-start'>
        <h2 className="text-5xl font-bold text-transparent pb-7 bg-text-gradient bg-clip-text">My Work</h2>
		<p className='pb-16 text-2xl text-center lg:text-right text-ivory'>Learn about my most recent projects</p>
        <div>
            {projects.map(el =>{
                return(
                    <CardItem {...el} />
                )})}
        </div>
        </div>
    </div>
  )
}

export default Work