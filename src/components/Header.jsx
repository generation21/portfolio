import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsPersonFill } from "react-icons/bs";
import { FaListCheck } from "react-icons/fa6";
import { RiFilePaper2Line } from "react-icons/ri";
import styles from "src/styles/Header.module.css";
import MenuBar from "./MenuBar";
import { ABOUT_PATH, HOME_PATH, PROJECTS_PATH, PAPERS_PATH } from "src/App";

export default function Header() {
    const tabs = [
        { title: "Home", path: HOME_PATH, icon: <AiFillHome /> },
        { title: "About", path: ABOUT_PATH, icon: <BsPersonFill /> },
        { title: "Projects", path: PROJECTS_PATH, icon: <FaListCheck /> },
        { title: "Papers", path: PAPERS_PATH, icon: <RiFilePaper2Line /> },
    ];
    return (
        <div className={styles.header}>
            {tabs.map((tab) => (
                <MenuBar {...tab} />
            ))}
        </div>
    );
}
