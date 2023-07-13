import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ABOUT_PATH, HOME_PATH, PROJECTS_PATH, PAPERS_PATH } from "src/App";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { RiBookletFill } from "react-icons/ri";
import { SiTistory } from "react-icons/si";
import styles from "src/styles/NavigationBar.module.css";

export default function NavigationBar({
    handleOnClickIsOpen,
    handleOnClickInfor,
}) {
    const [isSideBar, setIsSideBar] = useState(
        window.matchMedia("(max-width: 768px)").matches
    );

    const { pathname } = useLocation();
    const portfolios = [
        {
            title: "Tell me about SB",
            path: HOME_PATH,
            icon: <BiMessage className={styles.icon} />,
        },
        {
            title: "Tell me about SB's Features",
            path: ABOUT_PATH,
            icon: <BiMessage className={styles.icon} />,
        },
        {
            title: "Tell me about SB's Projects",
            path: PROJECTS_PATH,
            icon: <BiMessage className={styles.icon} />,
        },
        {
            title: "Tell me about SB's Papers",
            path: PAPERS_PATH,
            icon: <BiMessage className={styles.icon} />,
        },
    ];
    useEffect(() => {
        const handleResize = () => {
            setIsSideBar(!window.matchMedia("(max-width: 768px)").matches);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup event listener on unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const handleOnClickSide = () => {
        setIsSideBar((prev) => !prev);
    };
    const handleOnClickSideMediea = () => {
        if (window.matchMedia("(max-width: 768px)").matches) {
            setIsSideBar((prev) => !prev);
        }
    };

    if (isSideBar) {
        return (
            <div className={styles.hide__container}>
                <button
                    aria-label={"Show sidebar"}
                    className={styles.hide_slider}
                    onClick={handleOnClickSide}
                >
                    <RiBookletFill className={styles.icon} />
                    <span className={styles.tooltip} style={{ left: "4rem" }}>
                        Show sidebar
                    </span>
                </button>
            </div>
        );
    } else {
        return (
            <nav className={`${styles.navigation} ${isSideBar && styles.hide}`}>
                <div>
                    <div className={styles.menue}>
                        <button
                            className={styles.newchat}
                            onClick={handleOnClickIsOpen}
                        >
                            <FaPlus />
                            New chat
                        </button>
                        <button
                            aria-label="Show sidebar"
                            className={styles.hide_slider}
                            onClick={handleOnClickSide}
                        >
                            <RiBookletFill className={styles.icon} />
                            <span className={styles.tooltip}>Hide sidebar</span>
                        </button>
                    </div>
                    {portfolios.map((project, index) => (
                        <Link
                            to={project.path}
                            onClick={handleOnClickSideMediea}
                        >
                            <div
                                key={index}
                                className={`${styles.container} ${
                                    pathname === project.path && styles.active
                                }  `}
                            >
                                <span
                                    className={`${styles.icon_contain} ${
                                        pathname === project.path &&
                                        styles.active
                                    }  `}
                                >
                                    {project.icon}
                                </span>
                                <p
                                    className={`${styles.title} ${
                                        pathname === project.path &&
                                        styles.active
                                    }  `}
                                >
                                    {project.title}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className={styles.about}>
                    <button
                        className={styles.button}
                        onClick={handleOnClickInfor}
                    >
                        <img
                            src="/image/favicon.ico"
                            alt="profile"
                            width={40}
                            height={40}
                        />
                        <p className={styles.title}>홍승범</p>
                    </button>

                    <div className={styles.items}>
                        <Link
                            to={
                                "https://www.linkedin.com/in/seungbum-hong-531311171/"
                            }
                            target="_blank"
                        >
                            <BsLinkedin className={styles.icon} />
                        </Link>
                        <Link
                            to={"https://github.com/generation21"}
                            target="_blank"
                        >
                            <BsGithub className={styles.icon} />
                        </Link>
                        <Link to={"https://qbnet.tistory.com/"} target="_blank">
                            <SiTistory className={styles.icon} />
                        </Link>
                    </div>
                </div>
            </nav>
        );
    }
}
