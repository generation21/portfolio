import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { BiLogoPython } from "react-icons/bi";
import styles from "src/styles/Header.module.css";
import MenuBar from "./MenuBar";

export default function Header() {
    const tabs = [
        { title: "Home", path: "/home", icon: <AiFillHome /> },
        { title: "About", path: "/about", icon: <BsPersonFill /> },
        { title: "Projects", path: "/projects", icon: <FaListCheck /> },
        { title: "Skills", path: "/skills", icon: <BiLogoPython /> },
    ];
    return (
        <div className={styles.header}>
            {tabs.map((tab) => (
                <MenuBar {...tab} />
            ))}
        </div>
    );
}
