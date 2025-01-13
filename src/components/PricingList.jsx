import { check,checkYellow,Selectify0Logo,SelectifyPlusLogo } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-12 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-8 odd:py-8 odd:my-4 [&>h4]:first:text-color-1 [&>h4]:even:text-color-2 [&>h4]:last:text-color-3"
        >
          {/* <h4 className="h1 mb-4 font-bangers text-center">{item.title}</h4> */}
          <img className="block w-[18rem] xl:mr-8 ml-32"
          src={item.id === '0' ? Selectify0Logo : SelectifyPlusLogo}></img>

          <p className="body-2 min-h-[4rem] ml-3 mt-3 mb-2 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-[5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@selectify.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img 
                src={item.id === '1' ? checkYellow : check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
