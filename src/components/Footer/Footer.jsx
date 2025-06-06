import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="#"><FaTwitter className="text-2xl"/></a>
          <a href="#"><FaLinkedin className="text-2xl"/></a>
          <a href="#"><FaGithub className="text-2xl"/></a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by DevDhiman.
        </p>
        <p>
          Design with passion and precision.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
