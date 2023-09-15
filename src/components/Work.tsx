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
            <CardHeader floated={false} color="transparent">
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
            <CardHeader floated={false} color="transparent">
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
          <Card className="grid w-full max-w-[26rem] shadow-md bg-image-main bg-center bg-cover border-purple-dark border-2">
            <CardHeader floated={false} color="transparent">
              {/* <img src={CCImage} /> */}
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt"
                height="140.000000pt"
                viewBox="0 0 300.000000 315.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,315.000000) scale(0.100000,-0.100000)"
                  fill="#556cd6"
                  stroke="#FFFFFF"
                >
                  <path
                    stroke-width="2"
                    d="M1371 2853 c-12 -44 -17 -175 -8 -191 4 -5 0 -29 -9 -53 -10 -31 -13
-61 -9 -99 3 -30 1 -76 -4 -103 -8 -35 -8 -52 0 -66 13 -20 2 -38 -84 -143
-51 -63 -80 -64 -141 -8 -49 46 -80 103 -90 170 -4 25 -13 54 -21 66 -7 11
-16 47 -20 80 -3 32 -11 69 -17 81 -7 15 -7 31 1 54 6 17 11 55 11 83 l-1 51
-30 -35 c-16 -19 -41 -56 -54 -82 -14 -26 -29 -49 -35 -53 -7 -4 -7 -12 0 -25
5 -10 10 -37 10 -59 0 -32 5 -44 24 -56 23 -15 23 -19 22 -165 0 -105 4 -154
12 -162 8 -8 12 -49 12 -118 0 -89 3 -109 20 -130 24 -30 25 -46 5 -58 -14 -7
-15 -34 -5 -233 5 -123 14 -278 20 -344 5 -66 15 -194 21 -285 8 -123 14 -169
26 -182 13 -15 14 -24 4 -65 -13 -50 -14 -192 -3 -308 l7 -69 58 -41 c32 -22
77 -46 100 -52 50 -12 135 -46 198 -79 l46 -24 274 126 c151 69 279 131 286
137 13 14 32 115 38 202 2 33 8 159 15 280 6 121 15 249 20 285 6 36 15 135
20 220 11 167 33 308 56 354 17 36 17 36 0 36 -19 0 -46 44 -46 75 0 18 5 25
20 25 19 0 20 7 20 118 1 87 4 122 15 136 8 11 15 34 15 51 0 18 14 52 31 81
61 95 64 108 35 180 -14 35 -26 82 -26 104 0 23 -7 57 -16 78 l-16 37 -20 -39
c-14 -28 -18 -50 -14 -76 3 -21 -1 -60 -9 -91 -9 -30 -18 -71 -22 -91 -3 -21
-11 -38 -17 -38 -6 -1 -33 -23 -61 -50 -36 -36 -58 -50 -78 -50 -20 0 -30 -7
-36 -23 -5 -13 -24 -36 -42 -52 l-33 -27 -39 43 c-69 79 -79 108 -84 253 -3
71 -11 142 -17 158 -12 28 -13 28 -30 9 -15 -17 -18 -37 -18 -113 1 -137 -31
-227 -89 -259 -15 -8 -24 -7 -35 2 -24 20 -60 98 -78 169 -15 60 -15 70 -1
109 17 48 19 87 6 95 -10 6 -20 58 -26 131 -7 81 -27 155 -41 155 -7 0 -18
-17 -23 -37z"
                  />
                </g>
              </svg>
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60" />
            </CardHeader>
            <CardBody>
              <div className="grid pt-3 mb-5 place-items-center font-brand">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="text-2xl text-brand text-ivory"
                >
                  Mox Monolith
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="text-xl text-brand text-darkCyan"
                >
                  In Progress
                </Typography>
              </div>
              <Typography className="text-lg font-body text-ivory" color="gray">
                Assisting Rouxt Access developers in rewriting code and
                improving UI for the frond-end of the Mox Monolith website. See
                link below for the current (old) website.
              </Typography>
            </CardBody>
            <CardFooter className="mb-3 -mt-4">
              <a
                className="w-full"
                href={`https://moxmonolith.com/`}
                target="_blank"
              >
                <Button
                  size="lg"
                  fullWidth={true}
                  className="bg-purple-dark hover:bg-trueBlue"
                >
                  Mox Monolith
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Work;
