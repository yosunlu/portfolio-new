"use client";
import SectionHeading from "./section-heading";
import SectionHeading2 from "./section-heading2";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { sendEmail } from "@/actions/sendEmail";

export default async function Contact() {
  return (
    <section className="flex flex-col font-RB">
      <SectionHeading> 
        Contact 
      </SectionHeading>

      <div className="">
        <SectionHeading2> 
            Email {" "}
            <a className="text-emerald-700" href="mailto:yushanlu1031@gmail.com">
            yosunlu@gmail.com
        </a>, or
        </SectionHeading2>
      </div>


      <form
        className="mt-14 w-[40rem] flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent Successfully");
        }}
      >
        <input
          className="h-14 px-4 border rounded-xl hover:border-2 transition duration-200 hover:border-emerald-700 focus:ring-0 focus:border-emerald-700 focus:outline-none"
          name="senderEmail"
          placeholder="Your email"
          type="email"
          required
          maxLength={5000}
        />
        <textarea
          className="h-80 my-3 p-4  border rounded-xl hover:border-2 duration-200 hover:border-emerald-700 focus:ring-0 focus:border-emerald-700 focus:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>

    </section>
  );
}
