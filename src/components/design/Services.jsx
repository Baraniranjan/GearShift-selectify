import { brainwaveWhiteSymbol,SelectifyTabLogo, gradient, play } from "../../assets";
import ChatBubbleWing from "../../assets/svg/ChatBubbleWing";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  return (
    <div className="absolute top-8 right-[3.125rem] max-w-[17.5rem] py-6 px-8 bg-black rounded-t-xl rounded-bl-xl text-base lg:max-w-[17.5rem]">
      Hey Selectify, Looking for a specific skillset for my team!
      <ChatBubbleWing className="absolute left-full bottom-0" />
    </div>
  );
};

export const VideoChatMessage = () => {
  return (
    <div className="absolute top-40 left-[3.125rem] w-full max-w-[14rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl text-base lg:max-w-[17.5rem]">
      We've found 3 talents that match your ask!
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-blend-color-burn rounded-[0.75rem]">
        <img
          src={SelectifyTabLogo}
          width={60}
          height={60}
          alt="Selectify"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.625rem] text-n-3 uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute right-full bottom-0 -scale-x-100"
        pathClassName="fill-n-6"
      />
      
    </div>
    
  );
  
};



export const VideoBar = () => {
  return (
    <>
    <div className="absolute left-0 bottom-11 w-full flex items-center p-6">
      <h4 className="h4 mb-4">Text Querying</h4>
    </div>
    <div>
      <p className="absolute left-0 bottom-0 w-full flex items-center p-6 body-4 mb-[2rem] text-n-3">
        Type in your ask, as detailed as needed
      </p>
    </div>
    </>
  );
};
