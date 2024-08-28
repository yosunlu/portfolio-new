
import SectionHeading from "./section-heading"
import SectionHeading2 from "./section-heading2"
import onlymemesImg from "@/public/onlymemes.png";
import { FaGithubSquare } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
    const projects = [
      {title: "1"},
      {title: "2"},
      {title: "3"},
      {title: "4"},
      {title: "5"},
    ]
  return (
    <section className="flex flex-col font-RB">
      <SectionHeading>Projects</SectionHeading>
      
      <div className="border h-[22rem]">
        <SectionHeading2><span className="underline-green">Full-Stack</span> Projects</SectionHeading2>

        <div className="flex h-[18rem] space-x-3.5 mt-4">
            {projects.map((project, index) => (
              <div key={index} className="flex-1 bg-slate-20"><Project/></div>
            ))}
        </div>

      </div>


      <div className="border h-[22rem]">
        <SectionHeading2><span className="underline-green">Course</span> Projects </SectionHeading2>
      </div>


      </section>

    
  )
}

function Project() {
  return (
    <div className="flex flex-col relative">
        <div className="relative rounded-xl overflow-hidden hover:border-2 hover:border-emerald-700 ">

          <Image src={onlymemesImg}
            alt="onlymemes"
            className="object-fill  h-[18rem] rounded-xl opacity-80 transition-opacity hover:opacity-5"/>

        <div className="absolute inset-0 flex flex-col justify-between bg-white bg-opacity-100 text-black opacity-0 duration-200 hover:opacity-90 p-3">
          
          <div className="flex text-normal justify-between w-full">
                <div>React.js</div> 
                <div>Node.js</div> 
                <div>Firebase</div>
                <div>GCP</div> 
            </div>  

            <p className="text-base font-light">
              <span className="underline-green">Video processing</span> service that allows user to <span className="underline-green">sign in</span> with google account and upload their favorite meme videos. NOT some random youtube clone! Welcome to sign in and share your favorite memes!
            </p>

            <div className="flex justify-between items-center">
              <a
                className=" text-emerald-700 text-5xl rounded-4xl cursor-pointer"
                href="https://github.com/yosunlu/OnlyMemes"
                target="_blank"
                >
                <FaGithubSquare />
              </a>
              <a className="text-emerald-700 text-2xl font-semibold" href="https://github.com/yosunlu">
                GO
              </a>
            </div>
        </div>
      </div>
    </div>
  )
}


