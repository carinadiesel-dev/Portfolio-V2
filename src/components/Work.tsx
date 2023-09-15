import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
// import { FunctionComponent } from "react";

import CCImage from "../assets/calico-creatives.png";
import weatherApp from "../assets/weatherApp.png";

// type CardRow = {
//   image: string;
//   title: string;
//   aboutTxt: string;
//   repoLink: string;
//   websiteLink: string;
// };

// const CardItem: FunctionComponent<CardRow> = ({
//   image,
//   title,
//   aboutTxt,
//   repoLink,
//   websiteLink,
// }) => {
//   return (
//     <Card className="w-full max-w-[26rem] shadow-lg bg-image-main bg-center bg-cover border-purple-dark border-2">
//       <CardHeader floated={false} color="blue-gray">
//         <img src={image} />
//         <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
//       </CardHeader>
//       <CardBody>
//         <div className="flex items-center justify-between pt-3 mb-5 font-brand">
//           <Typography
//             variant="h5"
//             color="blue-gray"
//             className="text-2xl text-brand text-ivory"
//           >
//             {title}
//           </Typography>
//         </div>
//         <Typography className="text-lg font-body text-ivory" color="gray">
//           {aboutTxt}
//         </Typography>
//       </CardBody>
//       <CardFooter className="flex gap-2 pt-5">
//         <a className="w-full" href={websiteLink} target="_blank">
//           <Button
//             size="lg"
//             fullWidth={true}
//             className="bg-purple-dark hover:bg-trueBlue"
//           >
//             Demo
//           </Button>
//         </a>
//         <a className="w-full" href={repoLink} target="_blank">
//           <Button
//             size="lg"
//             fullWidth={true}
//             className="bg-purple-dark hover:bg-trueBlue"
//           >
//             Github
//           </Button>
//         </a>
//       </CardFooter>
//     </Card>
//   );
// };

type WorkProps = {};

const Work = ({}: WorkProps) => {
  // let project1 = {
  //   image: CCImage,
  //   title: "Calico Creatives",
  //   aboutTxt:
  //     "Website for Calico Creatives. Design created in Adobe XD by Calico Creatives owner,and I translated the design to a React and Tailwind Website.",
  //   repoLink:
  //     "https://github.com/carinadiesel-dev/calico-creatives-react/tree/production",
  //   websiteLink: "https://calicocreatives-e35c8.firebaseapp.com/",
  // };

  // let projects = [project1];
  return (
    <div className="w-full">
      <div className="flex flex-col items-center gap-4 lg:items-start">
        <h2 className="text-5xl font-bold text-transparent pb-7 bg-text-gradient bg-clip-text">
          My Work
        </h2>
        <p className="pb-16 text-2xl text-center lg:text-right text-ivory">
          Learn about my most recent projects
        </p>
        {/* <div className="flex flex-col lg:flex-row">
          {projects.map((el) => {
            return <CardItem {...el} />;
          })} 
        </div> */}
        <div className="flex flex-col justify-center w-full gap-40 lg:gap-20 lg:flex-row">
          <Card className="w-full max-w-[26rem] shadow-lg bg-image-main bg-center bg-cover border-purple-dark border-2 grid">
            <CardHeader floated={false} color="blue-gray">
              <img src={CCImage} />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
            </CardHeader>
            <CardBody>
              <div className="grid pt-3 mb-5 place-items-center font-brand">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="text-2xl text-brand text-ivory"
                >
                  Calico Creatives
                </Typography>
              </div>
              <Typography className="text-lg font-body text-ivory" color="gray">
                Website for Calico Creatives. Design created in Adobe XD by
                Calico Creatives owner,and I translated the design to a React
                and Tailwind Website.
              </Typography>
            </CardBody>
            <CardFooter className="flex gap-2 pt-5">
              <a
                className="w-full"
                href={`https://calicocreatives.net`}
                target="_blank"
              >
                <Button
                  size="lg"
                  fullWidth={true}
                  className="bg-purple-dark hover:bg-trueBlue"
                >
                  Website
                </Button>
              </a>
              <a
                className="w-full"
                href={`https://github.com/carinadiesel-dev/calico-creatives-react/tree/production`}
                target="_blank"
              >
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

          <Card className="w-full max-w-[26rem] shadow-lg bg-image-main bg-center bg-cover border-purple-dark border-2 grid justify-between">
            <CardHeader floated={false} color="blue-gray">
              <img src={weatherApp} className="" />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
            </CardHeader>
            <CardBody>
              <div className="grid pt-2 mb-5 place-items-center font-brand">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="text-2xl text-brand text-ivory"
                >
                  Weather App
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="text-xl text-brand text-darkCyan"
                >
                  (Personal Project)
                </Typography>
              </div>
              <div className="grid gap-4">
                <Typography
                  className="text-lg font-body text-ivory"
                  color="gray"
                >
                  Basic Weather App to practice working with APIs and useContext
                  in React.
                </Typography>
                <Typography className="text-lg font-body text-ivory">
                  Based on design by{" "}
                  <a href="https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv">
                    Dev Challenges
                  </a>
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="flex gap-2 pt-3">
              <a
                className="w-full"
                href={`https://react-weather-app-5cf4c.web.app/`}
                target="_blank"
              >
                <Button
                  size="lg"
                  fullWidth={true}
                  className="bg-purple-dark hover:bg-trueBlue"
                >
                  Demo
                </Button>
              </a>
              <a
                className="w-full"
                href={`https://github.com/carinadiesel-dev/weather-react`}
                target="_blank"
              >
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
          <Card className="w-full max-w-[26rem] shadow-lg bg-image-main bg-center bg-cover border-purple-dark border-2">
            <CardHeader floated={false} color="blue-gray">
              <img src={CCImage} />
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
            </CardHeader>
            <CardBody>
              <div className="flex items-center justify-between pt-3 mb-5 font-brand">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="text-2xl text-brand text-ivory"
                >
                  Mox Monolith
                </Typography>
              </div>
              <Typography className="text-lg font-body text-ivory" color="gray">
                Website for Calico Creatives. Design created in Adobe XD by
                Calico Creatives owner,and I translated the design to a React
                and Tailwind Website.
              </Typography>
            </CardBody>
            <CardFooter className="flex gap-2 pt-5"></CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Work;
