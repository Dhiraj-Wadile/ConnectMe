import React, { useEffect, useRef, useState } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef(null);
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
      <div
  className={css.name}
  style={{
    fontSize: '2em',
    fontWeight: 'bold',
    color: '#000',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
    letterSpacing: '1px',
    animation: 'opacity: 0; transform: translateY(20px); animation: fadeInUp 1s ease-in-out forwards;',
  }}
>
  ConnectMe
</div>



        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#experties">Services</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#people">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+91 8767766059</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
