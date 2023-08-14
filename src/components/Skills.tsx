import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
  } from "@material-tailwind/react";
import { FunctionComponent } from "react";

type SkillsRow = {
    title: string,
    avatar: string,
    level: string,
}

const SkillsItem : FunctionComponent<SkillsRow> = ({
    title,
    avatar,
    level
}) => {return (
    <li className="flex items-center justify-center h-32 gap-8 p-5 bg-cover shadow-lg bg-bottom-right rounded-2xl lg:h-28 bg-image-main">
          <div>
            <Avatar variant="square" src={avatar} />
          </div>
          <div className="flex flex-col items-center">
            <Typography variant="h4" color="blue-gray" className="text-ivory">
              {title}
            </Typography>
            <Typography variant="medium" color="gray" className="font-normal text-timberwolfWhite">
              {level}
            </Typography>
          </div>
        </li>
)}

type Skill = {
    
}

type SkillsProps = {
}

const Skills = ({}:SkillsProps) => {


    let skill1 = {
        title: "HTML",
    avatar: "/src/assets/stack/HTML5.png",
    level: "Very Proficient"
    }

    let skill2 = {
        title: "CSS",
    avatar: "/src/assets/stack/CSS3.png",
    level: "Very Proficient"
    }

     let skill3 = {
        title: "SASS",
    avatar: "/src/assets/stack/Sass.png",
    level: "Minimal"
    }

    let skill4 = {
        title: "Tailwind CSS",
    avatar: "/src/assets/stack/TailwindCSS.png",
    level: "Very Proficient"
    }

    let skill5 = {
        title: "JavaScript",
    avatar: "/src/assets/stack/JavaScript.png",
    level: "Very Proficient"
    }

    let skill6 = {
        title: "TypeScript",
    avatar: "/src/assets/stack/TypeScript.png",
    level: "Proficient"
    }

    let skill7 = {
        title: "ReactJS",
    avatar: "/src/assets/stack/React.png",
    level: "Proficient"
    }

    let skill8 = {
        title: "NextJS",
    avatar: "/src/assets/stack/Next.js.png",
    level: "Competent"
    }

    let skills = [skill1,skill2,skill3,skill4,skill5,skill6, skill7, skill8]
    return (
        <div className="container flex flex-col items-center py-20 lg:py-0 md:px-5 lg:pb-28">
<h2 className="text-6xl font-bold text-transparent pb-28 lg:pb-20 bg-text-gradient bg-clip-text">Skills</h2>
<Card className="w-full bg-inherit">
      <ul className="grid items-center grid-cols-1 gap-16 md:grid-cols-2 lg:gap-8 lg:grid-cols-3 xl:grid-cols-4">
        {skills.map(el => {
            return(
                <SkillsItem {...el} />
            )
        })}

      </ul>
      </Card>
        </div>
    )

}

export default Skills