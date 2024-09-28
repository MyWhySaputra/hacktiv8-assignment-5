import heroImage from "../assets/profile.jpg";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#B7E0FF] text-[#0D7C66]">
      <div className="flex h-screen flex-col-reverse items-center justify-center text-center lg:flex-row mx-20">
        <div className="flex w-1/2 items-center justify-center">
          <img src={heroImage} className="w-1/2 rounded-full" />
        </div>
        <div className="flex flex-col items-center lg:mb-0 lg:w-1/2">
          <div className="mb-6">
            <h1 className="text-4xl font-bold">
              Hi, my name is
              <span className="bg-gradient-to-r from-[#FFF5CD] to-[#FFCFB3] text-transparent bg-clip-text">
                Wahyu
              </span>{" "}
              👋
            </h1>
          </div>
          <div className="mb-6 text-lg text-gray-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus{" "}
              <a className="text-cyan-400 hover:underline" href="/">
                malesuada
              </a>{" "}
              nisi tellus, non imperdiet nisi tempor at. Lorem ipsum dolor sit
              amet,{" "}
              <a className="text-cyan-400 hover:underline" href="/">
                consectetur
              </a>{" "}
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="/">
              <FaSquareXTwitter className="h-10 w-10" alt="Twitter icon" />
            </a>
            <a href="/">
              <IoLogoFacebook className="h-10 w-10" alt="Facebook icon" />
            </a>
            <a href="/">
              <FaLinkedin className="h-10 w-10" alt="Linkedin icon" />
            </a>
            <a href="/">
              <FaInstagram className="h-10 w-10" alt="Instagram icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
