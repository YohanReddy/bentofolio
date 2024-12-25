import { useEffect, useState } from "react";
import { useTrail, animated, easings } from "@react-spring/web";
import { GRIDS } from "../constants";

export default function WorkGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Work Experience".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading = "Here are the places I've worked at over the years".split(
    ""
  );

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

  const trails = useTrail(5, {
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
      className={`grid grid-cols-1 lg:grid-cols-9 lg:grid-rows-9 w-screen lg:h-screen p-5 gap-5 ${colors.bg}`}
    >
      <animated.div
        style={animatedStyles}
        className="row-start-4 lg:row-span-3 lg:col-span-4"
      >
        <animated.div
          style={trails[1]}
          className={`w-full h-full ${colors.primary} border border-current`}
        ></animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-5"
      >
        <animated.div
          style={trails[3]}
          className={`w-full h-full relative ${colors.accent} border border-current`}
        ></animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:col-span-3 lg:row-span-6"
      >
        <animated.div
          style={trails[2]}
          className={`w-full h-full relative ${colors.secondary} border border-current`}
        ></animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        onClick={() => setCurrentGrid(GRIDS[0])}
        className="row-start-1 lg:col-span-3 lg:row-span-3"
      >
        <animated.div
          style={trails[0]}
          className={`w-full h-full p-10 ${colors.header} border border-current flex flex-col items-center justify-center gap-3 ${colors.text}`}
        >
          <div className="border border-current bg-[#264653] w-fit px-5 py-3">
            <span className="text-4xl font-bold" id="home">
              {name.slice(0, nameIdx).join("")}
              <span className="inline-block mx-2 w-6 h-1 bg-stone-300 animate-pulse"></span>
            </span>
          </div>
          <div className="border text-center border-current bg-[#264653] w-fit px-5 py-2">
            <span className="lg:text-md">
              {subheading.slice(0, subheadingIdx).join("")}
              <span className="inline-block w-3 h-0.5 mx-1 bg-stone-300 animate-pulse"></span>
            </span>
          </div>
        </animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-6 lg:col-span-3"
      >
        <animated.div
          style={trails[4]}
          className={`w-full h-full relative ${colors.secondary} border border-current`}
        ></animated.div>
      </animated.div>

      <animated.div
        style={animatedStyles}
        className="lg:row-span-3 lg:col-span-3"
      >
        <animated.div
          style={trails[4]}
          className={`w-full h-full relative ${colors.secondary} border border-current`}
        ></animated.div>
      </animated.div>
    </animated.div>
  );
}
