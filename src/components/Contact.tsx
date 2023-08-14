import {
  Card,
  Input,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";

export function Contact() {
  return (
    <div className="flex flex-col items-center justify-around px-10 lg:px-5 lg:flex-row">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="pb-8">
          <h2 className="text-5xl font-bold text-transparent text-gray-0 text-brand bg-text-gradient bg-clip-text">Contact Me</h2>
        </div>
        <p className="py-2 text-xl text-center md:text-2xl text-ivory">Interested in working together ?</p>
        <p className="text-xl md:text-2xl text-center md:max-w-[30ch] xl:max-w-[40ch] text-ivory pb-16">Get in touch by filling out this contact form or sending me an email to <a href="">carinadieseldev@gmail.com</a></p>
      </div>
      <Card className="flex items-center md:w-[30rem] p-8 border-2 border-primary bg-image-main" shadow={true}>
        <Typography variant="h3" color="blue-gray" className="text-transparent font-brand bg-text-gradient bg-clip-text">
          Contact Me
        </Typography>
        <Typography color="gray" className="mt-1 text-lg font-normal font-body text-ivory">
          Enter your details and message.
        </Typography>
        <form className="mt-8 mb-2 w-60 xs:w-80 sm:w-80 md:w-96 max-w-[26rem]">
          <div className="flex flex-col justify-center w-full gap-10 mb-4">
            <Input size="lg" label="Name" color="white"/>
            <Input size="lg" label="Email" color="white" type="text"/>
            <Textarea size="lg" label="Message" className=" focus:border-white !placeholder-shown:border-t-white !placeholder-shown:border-white" labelProps={{
          className: "text-white text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white",
        }} />
          </div>
          <Button className="mt-6 text-lg bg-primary hover:bg-trueBlue font-body" fullWidth>
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}
