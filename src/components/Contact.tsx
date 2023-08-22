import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-10 h-10"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function Contact() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [state, handleSubmit] = useForm("xaygoeqz");
  if (state.succeeded) {
    setOpen(open);
  }

  return (
    <div className="flex flex-col items-center justify-around px-10 lg:px-5 lg:flex-row">
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="pb-8">
          <h2 className="text-5xl font-bold text-transparent text-gray-0 text-brand bg-text-gradient bg-clip-text">
            Contact Me
          </h2>
        </div>
        <p className="py-2 text-xl text-center md:text-2xl text-ivory">
          Interested in working together ?
        </p>
        <p className="text-xl md:text-2xl text-center md:max-w-[30ch] xl:max-w-[40ch] text-ivory pb-16">
          Get in touch by filling out this contact form or sending me an email
          by clicking <a className="underline hover:text-trueBlue" href="mailto:carinadiesel@gmail.com">here</a>
        </p>
      </div>
      <Card
        className="flex relative items-center md:w-[30rem] p-8 border-2 border-purple-dark bg-image-main"
        shadow={true}
      >
        <Typography
          variant="h3"
          color="blue-gray"
          className="text-transparent font-brand bg-text-gradient bg-clip-text"
        >
          Contact Me
        </Typography>
        <Typography
          color="gray"
          className="mt-1 text-lg font-normal font-body text-ivory"
        >
          Enter your details and message.
        </Typography>
        <form
          className="mt-8 mb-2 w-60 xs:w-80 sm:w-80 md:w-96 max-w-[26rem]"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col justify-center w-full gap-10 mb-4">
            <Input
              size="lg"
              label="Name"
              color="white"
              type="text"
              id="name"
              className="!bg-transparent"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
            <Input
              size="lg"
              label="Email"
              color="white"
              type="email"
              id="email"
              className="!bg-transparent"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <Textarea
              size="lg"
              label="Message"
              id="message"
              className=" focus:border-white !placeholder-shown:border-t-white !placeholder-shown:border-white !text-white"
              labelProps={{
                className:
                  "!text-white peer-focus:text-white before:border-white peer-focus:before:!border-white after:border-white peer-focus:after:!border-white",
              }}
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <Button
            type="submit"
            disabled={state.submitting}
            className="mt-6 text-lg bg-purple-dark hover:bg-trueBlue font-body"
            fullWidth
          >
            Submit
          </Button>
        </form>
        <div className="absolute flex flex-col px-5 top-5">
          <Dialog
            open={open}
            handler={handleOpen}
            className="grid p-5 border-2 bg-image-main rounded-xl border-purple-dark place-items-center"
          >
            <DialogHeader className="flex gap-4 text-white">
              <Icon /> Submission Succesfull
            </DialogHeader>
            <DialogBody className="grid text-lg leading-loose text-center text-white place-items-center">
              Thanks for reaching out !
              <br />I have received your message and I will get back to you as
              soon as possible.
            </DialogBody>
            <DialogFooter>
              <Button
                variant="text"
                onClick={handleOpen}
                className="mr-1 text-white bg-purple-dark hover:bg-trueBlue"
              >
                <span>Close</span>
              </Button>
            </DialogFooter>
          </Dialog>
        </div>
      </Card>
    </div>
  );
}
