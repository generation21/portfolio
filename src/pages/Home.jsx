import React, { useEffect, useState } from "react";
import styles from "src/styles/Home.module.css";
import TypeIt from "typeit-react";
import { RiOpenaiFill } from "react-icons/ri";
// This could be any component that generates HTML.
const SuperStrong = ({ children }) => {
    return <strong style={{ fontSize: "80px" }}>{children}</strong>;
};

export default function Home() {
    const phrases = [
        " Deep Learning Engineer",
        " Full Stack Engineer",
        " the creator of the ideal.",
    ];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) =>
                prevIndex < phrases.length - 1 ? prevIndex + 1 : prevIndex
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [phrases.length]);

    const textClass = index !== 2 ? styles.text : styles.endText;

    return (
        <div className={styles.home}>
            <RiOpenaiFill className={styles.icon} />
            <h1 className={styles.fixedText}>I'm</h1>

            <h1 className={textClass}>{phrases[index]}</h1>
        </div>
    );
}
