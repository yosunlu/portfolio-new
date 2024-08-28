import SectionHeading from "./section-heading"
import SectionHeading2 from "./section-heading2"

export default function About() {
    const textstyle = "font-light w-1/2 text-2xl break-words"
  return (
    <section className="flex flex-col font-RB ">
        <SectionHeading> Hi there. 安安！</SectionHeading>
        <SectionHeading2>My name is <span className="underline-green">Yosun Lu.</span></SectionHeading2>

        <div className="flex flex-col">
            <h3 className={`pt-14 ${textstyle}} leading-normal`}>
                I am a <span className="underline-green">full-stack developer</span> and currently a graduate student in Computer Science at the University of Wisconsin-Madison. I am seeking a {" "}
                <span className="underline-green">full-time SDE position</span> starting January 2025. 
            </h3>
            <h3 className={`pt-4 ${textstyle}} leading-normal`}>
                My core stack includes <span className="underline-green">Node.js, Express.js, and React</span>. I also have experience with a wide range of technologies, 
                which you can explore on my <span className="text-emerald-700 font-semibold">GitHub</span> and in the <span className="text-emerald-700 font-semibold">projects</span> listed below. 
                Additionally, I am an <span className="underline-green">AWS Certified Solutions Architect - Associate</span>.
            </h3>
            <h3 className={`pt-4 ${textstyle}} leading-normal`}>
                When I am not learning something new, I enjoy surfing, watching movies, and cooking. I am also a huge fan of <span className="underline-green">Taiwanese indie music</span>!
            </h3>
            <h3 className={`pt-4 ${textstyle}} leading-normal`}>
                You can download my <span className="text-emerald-700 font-semibold">CV</span>, visit my {" "}
                <span className="text-emerald-700 font-semibold">LinkedIn</span>, 
                or contact me <span className="text-emerald-700 font-semibold">here</span>. Looking forward to connecting!
            </h3>
        </div>

    </section>
  )
}
