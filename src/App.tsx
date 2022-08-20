import { useLottie } from "lottie-react";
import comingSoonImg from "./assets/think-animation.json";
import {
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export default function App() {
  const heroImg = {
    animationData: comingSoonImg,
    loop: true,
  };
  const { View } = useLottie(heroImg);

  return (
    <section className="container mx-auto">
      <div className="flex flex-col h-screen justify-center">
        <div className="flex justify-center -mt-[60px]">
          <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] ">
            {View}
          </div>
        </div>

        <div className="text-center -mt-[50px]">
          <h1 className=" sm:text-[62px] text-[38px] font-bold">
            Coming Soon!
          </h1>
          <p className="sm:text-[22px] text-[20px] mt-2">
            Will be out ASAP :){" "}
            <sup className="text-[12px] text-gray-400">*if i want it</sup>
          </p>
        </div>

        <div className="flex justify-center mt-4 gap-x-4">
          <a
            className="hover:text-gray-400"
            href="mailto:cahyadikrishna.ck@gmail.com"
            target="_blank"
          >
            <AiOutlineMail size={32} />
          </a>
          <a
            className="hover:text-gray-400"
            href="https://www.instagram.com/humanit__/"
            target="_blank"
          >
            <AiOutlineInstagram size={32} />
          </a>
          <a
            className="hover:text-gray-400"
            href="https://wa.me/089606620616"
            target="_blank"
          >
            <AiOutlineWhatsApp size={32} />
          </a>
        </div>
      </div>
    </section>
  );
}
