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
    return (
        <article className={styles.skill_card}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div style={{ display: "flex", alignItems: "center" }}>
                <div className={styles.icon}>{icon} </div>
                <h3 className={styles.title}> {title} </h3>
            </div>
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
