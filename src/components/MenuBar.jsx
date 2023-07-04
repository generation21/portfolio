import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "src/styles/MenuBar.module.css";

export default function MenuBar({ title, path, icon }) {
    const { pathname } = useLocation();

    return (
        <Link to={path} className={styles.link}>
            <div className={styles.item}>
                <div className={styles.icon}>{icon}</div>
                <p
                    className={`${styles.title} ${
                        pathname.replace("/", "") === title.toLowerCase() &&
                        styles.active
                    }`}
                >
                    {title}
                </p>
            </div>
        </Link>
    );
}
