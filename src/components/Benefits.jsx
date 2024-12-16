import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import { useNavigate } from 'react-router-dom';

const Benefits = () => {

  const navigate = useNavigate();

  const handleClick = (item) => {
    console.log('item --',item)
   // CardWithList
   navigate(`/${item.title}`, {
    state: {
      item: item.title  // Passing the whole item object as state
    }
  });
  };
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Search Smarter, Not Harder with Selectify"
        />

        <div className="flex flex-wrap gap-5 mb-5">
          {benefits.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[18rem] cursor-pointer"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
              onClick={() => handleClick(item)}
            >
              {/* <div className="relative z-2 flex flex-col min-h-[8.5rem] p-[1.5rem] pointer-events-none">
                <h5 className="mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-1">
                  <img
                    src={item.iconUrl}
                    width={36}
                    height={36}
                    alt={item.title}
                  />
                  <p className="ml-auto pl-3 font-code text-[0.75rem] font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow className="p-0" />
                </div>
              </div> */}

              <div className="relative z-2 flex flex-col min-h-[8.5rem] p-[1.5rem] pointer-events-none">
              <div className="flex items-center mt-1">
                  <img
                    src={item.iconUrl}
                    width={36}
                    height={36}
                    alt={item.title}
                  />
                  <h5 className="ml-auto pl-3 font-bangers text-lg/3">
                    {item.title}
                  </h5>
                  {/* <Arrow className="p-0" /> */}
                </div>
                
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <p className="mt-5 m-auto font-code text-[0.75rem] font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                </p>
              </div>

              {item.light && <GradientLight />}

             

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h5 className="hidden relative z-10 mt-20 lg:block tagline mb-6 text-center text-n-1/50">
          Helping people create better tomorrow.
        </h5>
      </div>
    </Section>
  );
};

export default Benefits;