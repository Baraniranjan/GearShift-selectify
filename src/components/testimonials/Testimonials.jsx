import Section from "../Section";
import "./testimonials.scss";
//import "./testimonial.css";
import { muthu,venky,anumaam } from "../../assets";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Muthu Productions",
      title: "Senior Producer",
      img: muthu,
      icon: "assets/twitter.png",
      desc:
        "Selectify is not just a tool—it’s a must-have partner for any production house looking to discover exceptional talent!",
    },
    {
      id: 2,
      name: "Anu Pictures",
      title: "Co-Founder of AP",
      img: anumaam,
      icon: "assets/youtube.png",
      desc:
        "Selectify is truly a game-changer for the industry, and we can't imagine working without it!",
      featured: true,
    },
    {
      id: 3,
      name: "Venky Studios",
      title: "CEO of SPE",
      img: venky,
      icon: "assets/linkedin.png",
      desc:
        "Thanks to Selectify, we’ve cast some of the best performers for our recent projects. It’s truly an indispensable tool for modern production houses!",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1 className="mb-10 font-bold">Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
