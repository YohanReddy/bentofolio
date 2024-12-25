import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";

// import WorkExperience from "./WorkExperience";
// import Projects from "./Projects";
// import Education from "./Education";
// import Resume from "./Resume";
// import Blog from "./Blog";
// import Contact from "./Contact";
// import Misc from "./Misc";
import { GRIDS } from "../constants";

export default function HomeGrid({ setCurrentGrid, animatedStyles }) {
  //   const { isDark } = useTheme();
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Yohan Reddy".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading = "AI Engineer, Product Manager".split("");

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheadingIdx + 1);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  });

  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  const colors = {
    bg: "bg-stone-200",
    primary: "bg-[#343a40]",
    secondary: "bg-[#6c757d]",
    accent: "bg-[#ced4da]",
    header: "bg-[#e9ecef]",
    text: "text-white",
  };

  return (
    <animated.div
      className={`grid grid-cols-1 md:grid-cols-9 md:grid-rows-9 w-screen md:h-screen p-5 gap-5 ${colors.bg} ${colors.text}`}
    >
      <animated.div
        style={animatedStyles}
        className="row-start-5 md:row-span-6 md:col-span-3"
      >
        <animated.div
          style={trails[1]}
          className={`relative ${colors.primary} border border-current h-full w-full`}
          onClick={() => setCurrentGrid(GRIDS[2])}
        >
          {/* <WorkExperience /> */}
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:row-span-3 md:col-span-3"
      >
        <animated.div
          onClick={() => setCurrentGrid(GRIDS[1])}
          style={trails[3]}
          className={`relative h-full w-full ${colors.secondary} border border-current`}
        >
          {/* <Projects /> */}
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:col-span-3 md:row-span-3"
      >
        <animated.div
          style={trails[2]}
          className={`relative h-full w-full border border-current ${colors.accent}`}
        >
          {/* <Education /> */}
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="row-start-1 md:col-span-4 md:row-span-3"
      >
        <animated.div
          style={trails[0]}
          className={`h-full w-full p-10 ${colors.header} border border-current flex flex-col items-center justify-center gap-3`}
        >
          <div className="border border-current bg-[#264653]  w-fit px-5 py-3">
            <span className="text-5xl font-bold" id="home">
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-6 h-1 bg-stone-300 animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-current bg-[#264653] w-fit px-5 py-2">
            <span className="md:text-md">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-3 h-0.5 mx-1 bg-stone-300 animate-pulse"></span>
            </span>
          </div>
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:row-span-4 md:col-span-2"
      >
        <animated.div
          style={trails[4]}
          className={`h-full w-full relative border border-current ${colors.secondary}`}
        >
          {/* <Blog /> */}
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:row-span-3 md:col-span-2"
      >
        <animated.div
          style={trails[5]}
          className={`h-full w-full relative border border-current ${colors.secondary}`}
        >
          {/* <Resume /> */}
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:row-span-3 md:col-span-5"
      >
        <animated.div
          style={trails[4]}
          className={`h-full w-full md:flex justify-between items-center p-10 gap-5 ${colors.accent} border border-current`}
        >
          {/* <Contact /> */}
        </animated.div>
      </animated.div>
      <animated.div
        style={animatedStyles}
        className="md:row-span-2 md:col-span-2"
      >
        <animated.div
          style={trails[6]}
          className={`h-full w-full relative border border-current ${colors.primary}`}
        >
          {/* <Misc /> */}
        </animated.div>
      </animated.div>
    </animated.div>
  );
}