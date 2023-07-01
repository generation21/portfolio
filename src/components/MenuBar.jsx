import React from "react";
import { Link } from "react-router-dom";
import styles from "src/styles/MenuBar.module.css";

export default function MenuBar({ title, path, icon }) {
    return (
        <Link to={path} className={styles.link}>
            <div className={styles.item}>
                <div className={styles.icon}>{icon}</div>
                <p className={styles.title}>{title}</p>
            </div>
        </Link>
    );
}
