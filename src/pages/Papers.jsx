import React, { useEffect, useState } from "react";

import axios from "axios";
import PaperCard from "./Papers/PaperCard";
import styles from "src/styles/Papers.module.css";

export default function Pages() {
    const categorys = ["Paper", "AI-Challenge"];
    const [activeCategory, setActiveCategory] = useState("All");
    const [data, setData] = useState(null);

    useEffect(() => {
        axios
            .get("data/papers.json")
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error:", error));
    }, []);

    const handleOnClickCategory = (e) => {
        setActiveCategory(e.target.value);
    };
    if (data === null) {
        return <div>Loading...</div>;
    }
    return (
        <section className={styles.section}>
            <div className={styles.papers_container}>
                <h1 className={styles.title}>
                    MY{" "}
                    <span className={styles.accent}>Papers & Challenges</span>
                </h1>
                <ul className={styles.categories}>
                    <li>
                        <button
                            className={`${styles.category} ${
                                activeCategory === "All" &&
                                styles["category--selected"]
                            }`}
                            value={"All"}
                            onClick={handleOnClickCategory}
                        >
                            All
                            <span className={styles.category__count}>
                                {data.length}
                            </span>
                        </button>
                    </li>
                    {categorys.map((item) => (
                        <li>
                            <button
                                key={item}
                                value={item}
                                className={`${styles.category} ${
                                    activeCategory === item &&
                                    styles["category--selected"]
                                }`}
                                onClick={handleOnClickCategory}
                            >
                                {item}
                                <span className={styles.category__count}>
                                    {
                                        data.filter((x) => x.category === item)
                                            .length
                                    }
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
                <div className={styles.projects}>
                    {data.map((item) => {
                        if (activeCategory === "All") {
                            return (
                                <PaperCard
                                    title={item.title}
                                    task={item.task}
                                    time={item.time}
                                    techStack={item.teckStack}
                                    image={item.image}
                                    link={item.link}
                                    from={item.from}
                                />
                            );
                        } else if (activeCategory === item.category) {
                            return (
                                <PaperCard
                                    title={item.title}
                                    task={item.task}
                                    time={item.time}
                                    techStack={item.teckStack}
                                    image={item.image}
                                    link={item.link}
                                    from={item.from}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </section>
    );
}
