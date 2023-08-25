import { Avatar, Card, Typography } from "@material-tailwind/react";
import { FunctionComponent } from "react";

import HTML from "../assets/stack/HTML5.png";
import CSS from "../assets/stack/CSS3.png";
import SASS from "../assets/stack/Sass.png";
import Tailwind from "../assets/stack/TailwindCSS.png";
import JavaScript from "../assets/stack/JavaScript.png";
import TypeScript from "../assets/stack/TypeScript.png";
import React from "../assets/stack/React.png";
import Next from "../assets/stack/Next.js.png";

type SkillsRow = {
  title: string;
  avatar: string;
  level: string;
};

const SkillsItem: FunctionComponent<SkillsRow> = ({ title, avatar, level }) => {
  return (
    <li className="container flex items-center justify-center h-32 gap-8 p-5 bg-cover shadow-xl bg-bottom-right rounded-2xl lg:h-28 bg-darkModeBG shadow-purple-dark/90">
      <div>
        <Avatar variant="square" src={avatar} />
      </div>
      <div className="flex flex-col items-center">
        <Typography variant="h4" color="blue-gray" className="text-ivory">
          {title}
        </Typography>
        <Typography
          variant="medium"
          color="gray"
          className="font-normal text-timberwolfWhite"
        >
          {level}
        </Typography>
      </div>
    </li>
  );
};

type SkillsProps = {};

const Skills = ({}: SkillsProps) => {
  let skill1 = {
    title: "HTML",
    avatar: `${HTML}`,
    level: "Very Proficient",
  };

  let skill2 = {
    title: "CSS",
    avatar: `${CSS}`,
    level: "Very Proficient",
  };

  let skill3 = {
    title: "SASS",
    avatar: `${SASS}`,
    level: "Minimal",
  };

  let skill4 = {
    title: "Tailwind CSS",
    avatar: `${Tailwind}`,
    level: "Very Proficient",
  };

  let skill5 = {
    title: "JavaScript",
    avatar: `${JavaScript}`,
    level: "Very Proficient",
  };

  let skill6 = {
    title: "TypeScript",
    avatar: `${TypeScript}`,
    level: "Proficient",
  };

  let skill7 = {
    title: "ReactJS",
    avatar: `${React}`,
    level: "Proficient",
  };

  let skill8 = {
    title: "NextJS",
    avatar: `${Next}`,
    level: "Competent",
  };

  let skills = [skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8];
  return (
    <div className="container flex flex-col items-center px-5 py-20 lg:py-0 lg:pb-28">
      <h2 className="text-6xl font-bold text-transparent pb-28 lg:pb-20 bg-text-gradient bg-clip-text">
        Skills
      </h2>
      <Card className="w-full bg-inherit">
        <ul className="grid items-center grid-cols-1 gap-16 md:grid-cols-2 lg:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          {skills.map((el) => {
            return <SkillsItem {...el} />;
          })}
        </ul>
      </Card>
    </div>
  );
};

export default Skills;
