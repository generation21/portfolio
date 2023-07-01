import React, { useEffect, useState } from "react";
import styles from "src/styles/Home.module.css";
import TypeIt from "typeit-react";

// This could be any component that generates HTML.
const SuperStrong = ({ children }) => {
    return <strong style={{ fontSize: "80px" }}>{children}</strong>;
};

export default function Home() {
    const [index, setIndex] = useState(0);
    const phrases = [
        " Deep Learning Engineer",
        " Full Stack Engineer",
        " the creator of the ideal.",
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((currentValue) => (currentValue + 1) % phrases.length);
        }, 2000); // 2000ms = 2s

        return () => clearInterval(interval);
    }, [phrases.length]);

    return (
        <div className={styles.home}>
            <h1>I'm</h1>
            <h1 className={styles.title}>{phrases[index]}</h1>
        </div>
    );
}
