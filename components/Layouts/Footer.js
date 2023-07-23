import Logo from "components/Logo";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { footerVariants } from "../../utils/motion";
import SocialLink from "../SocialLinks";

const Footer = () => {
  const [ref1, inView1] = useInView({ threshold: 0.1 });
  const [ref2, inView2] = useInView({ threshold: 0.1 });
  const [ref3, inView3] = useInView({ threshold: 0.1 });

  const svgBackground = {
    backgroundImage: `url(/assets/wave.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <footer className="py-24" style={svgBackground}>
      <div className="container flex flex-col justify-center items-center md:ml-36">
        <motion.div
          ref={ref1}
          className="flex flex-col md:flex-row py-4 text-center"
          variants={footerVariants}
          initial="hidden"
          animate={inView1 ? "show" : "hidden"}
        >
          <Logo className="logo-footer" />
        </motion.div>

        <motion.div
          ref={ref2}
          className="flex md:flex-row flex-wrap  text-white md:text-3xl gap-2 mb-4 justify-center items-center"
          variants={footerVariants}
          initial="hidden"
          animate={inView2 ? "show" : "hidden"}
        >
          <p className="mb-2 md:mb-0 font-acumin">
            {new Date().getFullYear()} |{" "}
          </p>
          <SocialLink url="https://github.com/username" type="github" />
          <SocialLink
            url="https://www.linkedin.com/in/username"
            type="linkedin"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
