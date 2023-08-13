import {
  Card,
  Input,
  Button,
  Typography,
  Textarea
} from "@material-tailwind/react";

export function Contact() {
  return (
    <div className="flex flex-col items-center justify-around px-10 lg:px-8 lg:flex-row">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="pb-8">
          <h2 className="text-5xl font-bold text-transparent text-gray-0 text-brand bg-text-gradient bg-clip-text">Contact Me</h2>
        </div>
        <p className="py-2 text-xl text-center lg:text-2xl text-ivory">Interested in working together ?</p>
        <p className="text-xl lg:text-2xl text-center lg:max-w-[25ch] xl:max-w-[40ch] text-ivory pb-16">Get in touch by filling out this contact form or sending me an email to <a href="">carinadieseldev@gmail.com</a></p>
      </div>
      <Card className="flex items-center md:w-[30rem] p-8 border-2 border-primary bg-image-main" shadow={true}>
        <Typography variant="h3" color="blue-gray" className="text-transparent font-brand bg-text-gradient bg-clip-text">
          Contact Me
        </Typography>
        <Typography color="gray" className="mt-1 text-lg font-normal font-body text-ivory">
          Enter your details and message.
        </Typography>
        <form className="max-w-screen-lg mt-8 mb-2 w-72 md:w-96">
          <div className="flex flex-col justify-center w-full gap-10 mb-4">
            <Input size="lg" label="Name" color="white"/>
            <Input size="lg" label="Email" color="white" type="text"/>
            <Textarea size="lg" label="Message" color="light-blue"
           className="!font-bold" labelProps={{
            className: "text-white",
          }}
          containerProps={{ className: "min-w-[100px]" }} />
          </div>
          {/* <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          /> */}
          <Button className="mt-6 text-lg bg-primary hover:bg-trueBlue font-body" fullWidth>
            Submit
          </Button>
          {/* <Typography color="gray" className="mt-4 font-normal text-center">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
            </a>
          </Typography> */}
        </form>
      </Card>
    </div>
  );
}
