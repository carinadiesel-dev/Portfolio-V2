import { Button } from "@material-tailwind/react";

type HeroProps = {
  title?: string;
  tagline?: string;
  align?: "start" | "center";
};

const Hero = ({}: HeroProps) => {
  return (
    <header className="container grid gap-8 text-center place-items-center">
      <div className="flex flex-col gap-8 max-w-[25rem] md:max-w-[38rem]">
        <h1 className="text-5xl font-bold leading-tight md:text-6xl drop-shadow-xl font-body xl:text-7xl text-ivory">
          Hello, my name is Carina Diesel
        </h1>
        <p className="text-xl leading-normal md:text-2xl drop-shadow-2xl ms-auto text-ivory">
          I am a Full Stack Developer who is currently based in Mpumalanga,
          South Africa.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center w-full gap-10 pt-5 md:gap-8 lg:gap-4 lg:w-[29rem] md:w-96 lg:justify-between">
        <a
          href="https://www.linkedin.com/in/carinadieseldev/"
          target="_blank"
          className="w-full"
        >
          <Button
            size="lg"
            className="flex items-center justify-center w-full gap-4 lg:gap-2 font-brand bg-purple-dark hover:bg-trueBlue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffff"
              viewBox="0 0 256 256"
              className="w-10 h-10"
            >
              <path d="M216,20H40A20,20,0,0,0,20,40V216a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V40A20,20,0,0,0,216,20Zm-4,192H44V44H212ZM112,176V124a12,12,0,0,1,21.43-7.41A40,40,0,0,1,192,152v24a12,12,0,0,1-24,0V152a16,16,0,0,0-32,0v24a12,12,0,0,1-24,0ZM96,124v52a12,12,0,0,1-24,0V124a12,12,0,0,1,24,0ZM68,80A16,16,0,1,1,84,96,16,16,0,0,1,68,80Z"></path>
            </svg>
            LinkedIn
          </Button>
        </a>
        <a
          href="https://github.com/carinadiesel-dev"
          target="_blank"
          className="w-full"
        >
          <Button
            size="lg"
            className="flex items-center justify-center w-full gap-4 lg:gap-2 font-brand bg-purple-dark hover:bg-trueBlue"
          >
            <svg
              className="w-10 h-10"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
            Github
          </Button>
        </a>
        <a
          href="/public/assets/CV-CarinaDiesel.pdf"
          className="flex items-center gap-2 transition-colors lg:col-span-2 lg:mt-4 hover:text-trueBlue"
        >
          <Button
            size="lg"
            className="flex items-center justify-center w-full gap-4 lg:gap-2 font-brand bg-purple-dark hover:bg-trueBlue"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#ffff"
              viewBox="0 0 256 256"
              className="w-10 h-10 hover:fill-trueBlue"
            >
              <path d="M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm100.49-60.49a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17,0l-24-24a12,12,0,0,1,17-17L116,155V124a12,12,0,0,1,24,0v31l3.51-3.52A12,12,0,0,1,160.49,151.51Z"></path>
            </svg>{" "}
            Download CV
          </Button>
        </a>
      </div>
      <slot />
    </header>
  );
};

export default Hero;

<a
  href="/public/assets/CV-CarinaDiesel.pdf"
  className="flex items-center gap-2 transition-colors hover:text-trueBlue"
>
  CV
</a>;
