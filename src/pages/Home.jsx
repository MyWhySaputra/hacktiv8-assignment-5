import heroImage from "../assets/profile.jpg";
import {
  FaLinkedin,
  FaInstagram,
  FaFacebookSquare,
  FaGithubSquare,
} from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#F5EFFF] text-[#34105a]">
      <div className="container flex h-screen flex-col-reverse items-center justify-center text-center lg:flex-row mx-auto">
        <div className="flex w-1/2 items-center justify-center mt-8">
          <img src={heroImage} className="w-1/2 rounded-full" />
        </div>
        <div className="flex flex-col items-center lg:w-1/2">
          <div className="mb-6">
            <h1 className="text-3xl lg:text-4xl font-mono mx-10">
              Hi, my name is
              <span className="bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
                {" "}
                Wahyu{" "}
              </span>
            </h1>
          </div>
          <div className="mb-6 text-base lg:text-lg text-gray-700 mx-10">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              malesuada nisi tellus, non imperdiet nisi tempor at. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="/">
              <FaGithubSquare className="h-10 w-10" alt="Github icon" />
            </a>
            <a href="/">
              <FaFacebookSquare className="h-10 w-10" alt="Facebook icon" />
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
