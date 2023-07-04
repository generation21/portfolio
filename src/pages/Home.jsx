import React, { useEffect, useState } from "react";
import styles from "src/styles/Home.module.css";
import { RiOpenaiFill } from "react-icons/ri";

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
        <section className={styles.home}>
            <RiOpenaiFill className={styles.icon} />
            <h1 className={styles.fixedText}>I'm</h1>

            <h1 className={textClass}>{phrases[index]}</h1>
        </section>
    );
}
