type AboutProps = {};

const About = ({}: AboutProps) => {
  return (
    <div className="grid text-lg text-center">
      <div className="flex flex-col justify-center gap-8 lg:max-w-[41rem] mb-16">
        <h2 className="pb-5 text-6xl font-bold text-transparent bg-text-gradient bg-clip-text">
          About Me
        </h2>
        <p className="text-lg xl:text-xl text-ivory ms-auto">
          As a Software Developer, I have had the opportunity to gain valuable
          insights and hands-on experience through my internship and freelance
          web development projects since December 2022.
        </p>
        <p className="text-lg xl:text-xl ms-auto text-ivory">
          I am dedicated to expanding my knowledge and venturing into Back-End
          Development in my free time. I believe a well-rounded skill set will
          allow me to create comprehensive solutions and make a more significant
          impact in the tech industry.
        </p>
        <p className="text-lg xl:text-xl ms-auto text-ivory">
          My eagerness to learn and adapt enables me to stay ahead of the curve
          in this ever-evolving field.
        </p>
      </div>
    </div>
  );
};

export default About;
