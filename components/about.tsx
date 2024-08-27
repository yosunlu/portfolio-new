
export default function About() {
    const textstyle = "font-normal w-1/2 text-2.5xl break-words leading-normal"
  return (
    <section className="flex flex-col font-RB ">
        <h1 className=" font-bold pt-32 text-7xl">
            Hi there. 安安！
        </h1>

        <h2 className="font-semibold pt-14 text-4xl">
            My name is Yosun Lu.
        </h2>

        <div className="flex flex-col">
            <h3 className={`pt-14 ${textstyle}}`}>
                I am a full-stack developer and currently a graduate student in Computer Science at the University of Wisconsin-Madison. I am seeking a {" "}
                <span className="underline-green">full-time SDE position</span> starting January 2025. 
            </h3>
            <h3 className={`pt-6 ${textstyle}}`}>
                My core stack includes <span className="underline-green">Node.js, Express.js, and React</span>. I also have experience with a wide range of technologies, 
                which you can explore on my <span className="text-emerald-700 font-semibold">GitHub</span> and in the <span className="text-emerald-700 font-semibold">projects</span> listed below. 
                Additionally, I am an <span className="underline-green">AWS Certified Solutions Architect – Associate</span>.
            </h3>
            <h3 className={`pt-6 ${textstyle}}`}>
                When I am not learning something new, I enjoy surfing, watching movies, and cooking. I am also a huge fan of <span className="underline-green">Taiwanese indie music</span>!
            </h3>
            <h3 className={`pt-6 ${textstyle}}`}>
                You can download my <span className="text-emerald-700 font-semibold">CV</span>, visit my {" "}
                <span className="text-emerald-700 font-semibold">LinkedIn</span>, 
                or contact me <span className="text-emerald-700 font-semibold">here</span>. Looking forward to connecting!
            </h3>


        </div>

    </section>
  )
}
