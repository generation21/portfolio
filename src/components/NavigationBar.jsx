import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ABOUT_PATH, HOME_PATH, PROJECTS_PATH, SKILLS_PATH } from "src/App";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { BiMessage } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { RiBookletFill } from "react-icons/ri";
import { SiTistory } from "react-icons/si";
import styles from "src/styles/NavigationBar.module.css";
import NewChat from "./NewChat";
import Information from "./Information";

export default function NavigationBar({ pathname }) {
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
            path: SKILLS_PATH,
            icon: <BiMessage className={styles.icon} />,
        },
    ];

    const [isNewChatOpen, setIsNewChatOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const handleOnClickIsOpen = () => {
        setIsNewChatOpen(false);
    };
    const handleOnClickContact = () => {
        setIsContactOpen(false);
    };

    return (
        <nav className={styles.navigation}>
            <div>
                {isNewChatOpen && (
                    <NewChat
                        key={"newChat"}
                        handleOnClickIsOpen={handleOnClickIsOpen}
                    />
                )}
                <div className={styles.menue}>
                    <button
                        className={styles.newchat}
                        onClick={() => {
                            setIsNewChatOpen(true);
                        }}
                    >
                        <FaPlus />
                        New chat
                    </button>
                    <button className={styles.hide_slider}>
                        <RiBookletFill className={styles.icon} />
                    </button>
                </div>
                {portfolios.map((project, index) => (
                    <Link to={project.path}>
                        <div key={index} className={styles.container}>
                            {project.icon}
                            <p className={styles.title}>{project.title}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <div className={styles.about}>
                <button
                    className={styles.button}
                    onClick={() => {
                        setIsContactOpen(true);
                    }}
                >
                    <img
                        src="/image/favicon.ico"
                        alt="profile"
                        width={40}
                        height={40}
                    />
                    <p className={styles.title}>홍승범</p>
                </button>
                {isContactOpen && (
                    <Information
                        key={"Contact"}
                        handleOnClickIsOpen={handleOnClickContact}
                    />
                )}
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
                    <Link>
                        <SiTistory className={styles.icon} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}