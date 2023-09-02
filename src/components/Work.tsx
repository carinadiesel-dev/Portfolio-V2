import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { FunctionComponent } from "react";

import CCImage from "../assets/calico-creatives.png";

type CardRow = {
  image: string;
  title: string;
  aboutTxt: string;
  repoLink: string;
  websiteLink: string;
};

const CardItem: FunctionComponent<CardRow> = ({
  image,
  title,
  aboutTxt,
  repoLink,
  websiteLink,
}) => {
  return (
    <Card className="w-full max-w-[26rem] shadow-lg bg-image-main bg-center bg-cover border-purple-dark border-2">
      <CardHeader floated={false} color="blue-gray">
        <img src={image} />
        <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
      </CardHeader>
      <CardBody>
        <div className="flex items-center justify-between pt-3 mb-5 font-brand">
          <Typography
            variant="h5"
            color="blue-gray"
            className="text-2xl text-brand text-ivory"
          >
            {title}
          </Typography>
        </div>
        <Typography className="text-lg font-body text-ivory" color="gray">
          {aboutTxt}
        </Typography>
      </CardBody>
      <CardFooter className="flex gap-2 pt-5">
        <a className="w-full" href={websiteLink} target="_blank">
          <Button
            size="lg"
            fullWidth={true}
            className="bg-purple-dark hover:bg-trueBlue"
          >
            Demo
          </Button>
        </a>
        <a className="w-full" href={repoLink} target="_blank">
          <Button
            size="lg"
            fullWidth={true}
            className="bg-purple-dark hover:bg-trueBlue"
          >
            Github
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

type WorkProps = {};

const Work = ({}: WorkProps) => {
  let project1 = {
    image: CCImage,
    title: "Calico Creatives",
    aboutTxt:
      "Website for Calico Creatives. Design created in Adobe XD by Calico Creatives owner,and I translated the design to a React and Tailwind Website.",
    repoLink:
      "https://github.com/carinadiesel-dev/calico-creatives-react/tree/production",
    websiteLink: "https://calicocreatives-e35c8.firebaseapp.com/",
  };

  let projects = [project1];
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <h2 className="text-5xl font-bold text-transparent pb-7 bg-text-gradient bg-clip-text">
          My Work
        </h2>
        <p className="pb-16 text-2xl text-center lg:text-right text-ivory">
          Learn about my most recent projects
        </p>
        <div className="flex flex-col lg:flex-row">
          {projects.map((el) => {
            return <CardItem {...el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
