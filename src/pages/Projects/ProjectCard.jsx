import React, { useState } from "react";
import styles from "src/styles/ProjectCard.module.css";

const ProjectCard = ({ title, description, image, techStack }) => {
    return (
        <div className={styles.project}>
            <a href="#" target="_blank">
                <img src={image} alt={title} className={styles.project__img} />
                <div className={styles.project__metadata}>
                    <h3 className={styles.project__title}>{title}</h3>

                    <p>
                        {description} with <span>{techStack.join()}</span>
                    </p>
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;
