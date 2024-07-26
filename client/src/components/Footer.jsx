import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Shaar's
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Projects" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://mern-front-3n5p.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600"
                >
                  E-Commerce Website
                </Footer.Link>
                <Footer.Link
                  href="https://portfolio-omega-taupe-47.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600"
                >
                  My Portfolio
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow US" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/ahmadshaar723"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link
                  href="https://portfolio-omega-taupe-47.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-600"
                >
                  Facebook
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="legal" />
              <Footer.LinkGroup col>
                <Footer.Link className="hover:text-cyan-600" href="#">
                  Privacy Policy
                </Footer.Link>
                <Footer.Link className="hover:text-cyan-600" href="#">
                  Terms &amp; Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div >
          <Footer.Copyright
            className="hover:text-cyan-600"
            href="https://portfolio-omega-taupe-47.vercel.app/"
            by="Ahmad Shaar"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 mt-4 mb-4  sm:justify-center">
            <Footer.Icon
              className="hover:text-cyan-600 "
              href="https://www.facebook.com/ahmad.shaar.9674?mibextid=ZbWKwL"
              icon={BsFacebook}
              
            />
            <Footer.Icon
              className="hover:text-cyan-600"
              href="https://www.instagram.com/shaar_ahmad/?igsh=MWs2dzl6eGlmaXgzNQ%3D%3D"
              icon={BsInstagram}
            />
            <Footer.Icon
              className="hover:text-cyan-600"
              href="https://www.linkedin.com/in/ahmad-shaar-1594b3209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              icon={BsLinkedin}
            />
            <Footer.Icon
              className="hover:text-cyan-600"
              href="https://github.com/ahmadshaar723"
              icon={BsGithub}
            />
            <Footer.Icon
              className="hover:text-cyan-600"
              href="tel:+96176519688"
              icon={BsWhatsapp}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
