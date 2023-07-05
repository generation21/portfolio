import React from "react";
import styles from "src/styles/SkillCard.module.css";
/**
 *
 * @param {string} title
 * @param {string} icon
 * @param {string[]} descriptions
 *
 * @returns
 *
 * @type
 */
export default function SkillCard({ title, icon, descriptions }) {
    console.log(descriptions);
    return (
        <article className={styles.skill_card}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <h3>
                <span>{icon} </span>: {title}
            </h3>
            <ul className={styles.container}>
                {descriptions.map((description, index) => {
                    return (
                        <li key={index} className={styles.description}>
                            {description}
                        </li>
                    );
                })}
            </ul>
        </article>
    );
}
