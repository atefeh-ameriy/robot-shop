import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [navLink,setNavLink] = useState( navigation[0])


  useEffect(()=>{
    const handleResize = ()=>{
      if (window.innerWidth < 768){
        setOpenNavigation(false)
              }
    }
    window.addEventListener('resize',handleResize)

    return()=>{
      window.removeEventListener('resize',handleResize)
    }
   },[])
  const onScroll = () => {
      // بررسی موقعیت اسکرول برای فعال کردن لینک مناسب
      navigation.forEach((item) => {
      const section = document.querySelector(item.url);
      if (section) {
        const { offsetTop, clientHeight } = section;
        if (window.scrollY >= offsetTop - 800 && window.scrollY < offsetTop + clientHeight) {
          setNavLink(item.url);
        }
      }
    });
    
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4" onScroll={onScroll}>
        <a className="block w-[12rem] text-5xl xl:mr-8" href="#hero">
          ربات ریرا
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 rounded ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xl lg:font-semibold  lg:leading-5 lg:hover:text-n-1 xl:px-12  ${navLink === item.url ? "bg-purple-400" : "" }`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <a
          href="#signup"
          className="button text-xl hidden ml-8 text-n-1/50 transition-colors hover:text-n-1 lg:block "
        >
حساب جدید
        </a>
        <Button className="hidden  text-xl lg:flex" href="#login">
          ورود
        </Button>

        <Button
          className="mr-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
