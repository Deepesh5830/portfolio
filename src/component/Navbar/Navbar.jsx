import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { ActiveTabContext } from "./ActiveTabContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  const [isVisible, setIsVisible] = useState(window.innerWidth <= 920);
  const [isVisible1, setIsVisible1] = useState(window.innerWidth <= 500);
  // const [activeTab, setActiveTab] = useState("home"); // State to manage active tab
  const { activeTab, setActiveTab } = useContext(ActiveTabContext);
  const navigate = useNavigate()

  const handleTabClick = (tab) => {
    setActiveTab(tab); // Update active tab state
  };

  const handleResize = () => {
    setIsVisible(window.innerWidth <= 920);
    setIsVisible1(window.innerWidth <= 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="fixed z-10 w-full bg-black">

      <div className="px-[20px] flex justify-center my-[10px]">
        <div className="flex max-w-[1120px] w-full h-16 justify-between items-center">
          <span
            className="max-w-[400px] h-14 cursor-pointer flex justify-center items-center"
            onClick={() => { navigate("/"), setActiveTab("home") }}
          >
            <h2 className="font-bold text-[30px] text-white">DEEPESH KUMAR</h2>
          </span>

          {isVisible ? (
            <div className="flex gap-3">
              {dropMenu === false ? (
                <div
                  className="cursor-pointer text-white"
                  onClick={() => setDropMenu(true)}
                >
                  <MenuIcon fontSize="large" />
                </div>
              ) : (
                <div
                  className="cursor-pointer text-white"
                  onClick={() => setDropMenu(false)}
                >
                  <CloseIcon fontSize="large" />
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <div
                className={`${activeTab === "home" ? "active_btn" : ""} range`}
                data-attr-span="Home"
                onClick={() => {
                  handleTabClick("home");
                  navigate('/')
                }}
              >
                <span
                  className={`${activeTab === "home" ? "font-bold text-[#fde047]" : "text-white font-bold"}`}
                >Home</span>
              </div>

              <div
                className={`${activeTab === "About" ? "active_btn" : ""
                  } range`}
                data-attr-span="About"
                onClick={() => {
                  handleTabClick("About");
                  navigate('/about')
                }}
              >
                <span
                  // className="font-bold text-white"
                  className={`${activeTab === "About" ? "font-bold text-[#fde047]" : "text-white font-bold"}`}
                >About</span>
              </div>

              <div
                className={`${activeTab === "services" ? "active_btn" : ""
                  } range`}
                data-attr-span="Services"
                onClick={() => {
                  handleTabClick("services");
                  navigate('/services')
                }}
              >
                <span
                  // className="font-bold text-white"
                  className={`${activeTab === "services" ? "font-bold text-[#fde047]" : "text-white font-bold"}`}
                >Services</span>
              </div>

              <div
                className={`${activeTab === "Skills" ? "active_btn" : ""
                  } range`}
                data-attr-span="Skills"
                onClick={() => {
                  handleTabClick("Skills");
                  navigate('/my_skill')
                }}
              >
                <span
                  // className="font-bold text-white"
                  className={`${activeTab === "Skills" ? "font-bold text-[#fde047]" : "text-white font-bold"}`}
                >Skills</span>
              </div>

              <div
                className={`${activeTab === "Project" ? "active_btn" : ""
                  } range`}
                data-attr-span="Project"
                onClick={() => {
                  handleTabClick("Project");
                  navigate('/my_project')
                }}
              >
                <span
                  // className="font-bold text-white"
                  className={`${activeTab === "Project" ? "font-bold text-[#fde047]" : "text-white font-bold"}`}
                >Project</span>
              </div>

              {/* <div
                className=" px-[15px]  text-color cursor-pointer relative"
                onMouseEnter={() => setIsOpen2(true)}
                onClick={() => setIsOpen2(true)}
                onMouseLeave={() => setIsOpen2(false)}
              >
                <span
                  className={`${activeTab === "about" ? "active_btn" : ""
                    } range`}
                  data-attr-span="About Us"
                  onClick={() => handleTabClick("about")}
                >
                  About Us
                </span>
                {isOpen2 && (
                  <div className="absolute left-0 w-28 py-[20px] px-[15px] bg-white z-10 text-center ">
                    <div className="flex flex-col">
                      <span
                        className="hover:text-Yellow_color hover:bg-p_color rounded py-2 text-[14px] cursor-pointer"
                        onClick={() => {
                          // navigate("/about")
                          setIsOpen2(false);
                          setDropMenu(false);
                        }}
                      >
                        About
                      </span>

                      <span
                        className="hover:text-Yellow_color hover:bg-p_color rounded py-2 text-[14px]  cursor-pointer"
                        onClick={() => {
                          // navigate("/faq");
                          setIsOpen2(false);
                          setDropMenu(false);
                        }}
                      >
                        FAQs
                      </span>

                      <span
                        className="hover:text-Yellow_color hover:bg-p_color rounded py-2 text-[14px]  cursor-pointer"
                        onClick={() => {
                          // navigate("/blog");
                          setIsOpen2(false);
                          setDropMenu(false);
                        }}
                      >
                        Blog
                      </span>

                      <span
                        className="hover:text-Yellow_color hover:bg-p_color rounded py-2 text-[14px] cursor-pointer"
                        onClick={() => {
                          // navigate("/team");
                          setIsOpen2(false);
                          setDropMenu(false);
                        }}
                      >
                        Team
                      </span>

                      <span
                        className="hover:text-Yellow_color hover:bg-p_color rounded py-2 text-[14px]  cursor-pointer"
                        onClick={() => {
                          // navigate("/portfolioProfile");
                          setIsOpen2(false);
                          setDropMenu(false);
                        }}
                      >
                        Portfolio
                      </span>

                      <span
                        className="hover:text-Yellow_color hover:bg-p_color rounded py-2 text-[14px]  cursor-pointer"
                        onClick={() => {
                          // navigate("/career");
                          setIsOpen2(false);
                          setDropMenu(false);
                        }}
                      >
                        Careers
                      </span>
                    </div>
                  </div>
                )}
              </div> */}

              <div
                className={`${activeTab === "contact" ? "active_btn" : ""
                  } range`}
                data-attr-span="Contact Us"
                onClick={() => {
                  handleTabClick("contact");
                  navigate("/my_contact")
                }}
              >
                <span
                  // className="font-bold text-white"
                  className={`${activeTab === "contact" ? "font-bold text-[#fde047]" : "text-white font-bold"}`}
                >Contact</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {dropMenu === true && isVisible && (
        <div className="flex flex-col space-y-2">

          <div className="relative">
            <div
              className="flex justify-between px-[15px] py-[5px] text-color cursor-pointer"
              // onClick={() => setIsOpen(!isOpen)}
              onClick={() => {
                setIsOpen2(false);
                setDropMenu(false);
                navigate('/')
              }}
            >
              <span className="hover:text-Yellow_color py-1 px-2 hover:bg-p_color rounded text-white">
                Home
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="flex justify-between px-[15px] py-[5px] text-color cursor-pointer"
              onClick={() => {
                setIsOpen2(false);
                setDropMenu(false);
                navigate("/about")
              }}
            >
              <span className="hover:text-Yellow_color py-1 px-2 hover:bg-p_color rounded text-white">
                About
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="flex justify-between px-[15px] py-[5px] text-color cursor-pointer"
              // onClick={() => setIsOpen1(!isOpen1)}
              onClick={() => {
                setIsOpen2(false);
                setDropMenu(false);
                navigate('/services')
              }}
            >
              <span className="hover:text-Yellow_color py-1 px-2 hover:bg-p_color rounded text-white">
                Services
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="flex justify-between px-[15px] py-[5px] text-color cursor-pointer"
              // onClick={() => setIsOpen1(!isOpen1)}
              onClick={() => {
                navigate("/my_skill")
                setIsOpen2(false);
                setDropMenu(false);
              }}
            >
              <span
                className="hover:text-Yellow_color py-1 px-2 hover:bg-p_color rounded text-white"
              // className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Skills
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="flex justify-between px-[15px] py-[5px] text-color cursor-pointer"
              // onClick={() => setIsOpen1(!isOpen1)}
              onClick={() => {
                navigate("/my_project")
                setIsOpen2(false);
                setDropMenu(false);
              }}
            >
              <span
                className="hover:text-Yellow_color py-1 px-2 hover:bg-p_color rounded text-white"
              // className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Project
              </span>
            </div>
          </div>

          <div className="relative">
            <div
              className="flex justify-between px-[15px] py-[5px] text-color cursor-pointer"
              // onClick={() => setIsOpen1(!isOpen1)}
              onClick={() => {
                navigate("/my_contact")
                setIsOpen2(false);
                setDropMenu(false);
              }}
            >
              <span
                className="hover:text-Yellow_color py-1 px-2 hover:bg-p_color rounded text-white"
              // className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-black after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
              >
                Contact us
              </span>
            </div>
          </div>

        </div>
      )}
    </div >
  );
};

export default Navbar;
