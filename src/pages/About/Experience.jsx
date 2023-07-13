import React, { useEffect, useState } from "react";
import styles from "src/styles/Experience.module.css";
import axios from "axios";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { IoSchoolOutline } from "react-icons/io5";
export default function Experience() {
    const [data, setData] = useState(null);

    const icons = {
        office: <HiOutlineOfficeBuilding className={styles.icon} />,
        school: <IoSchoolOutline className={styles.icon} />,
    };

    useEffect(() => {
        axios
            .get("data/about.json")
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error:", error));
    }, []);
    if (data === null) {
        return <div>Loading...</div>;
    }

    return (
        <section className={styles.about}>
            <h3 className={styles.about__title}>EXPERIENCE & EDUCATION</h3>
            <div className={styles.about__container}>
                <ul>
                    {data.office.map((item, index) => (
                        <li
                            key={index}
                            className={styles.about__container__list}
                        >
                            <div className={styles.icon_after}>
                                {icons.office}
                            </div>
                            <div className={styles.information__container}>
                                <span className={styles.time}>{item.time}</span>
                                <h4 className={styles.title}>
                                    {item.title}
                                    <span className={styles.role}>
                                        {item.role}
                                    </span>
                                </h4>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
                <ul>
                    {data.school.map((item, index) => (
                        <li
                            key={index}
                            className={styles.about__container__list}
                        >
                            <div className={styles.icon_after}>
                                {icons.school}
                            </div>
                            <div className={styles.information__container}>
                                <span className={styles.time}>{item.time}</span>
                                <h4 className={styles.title}>
                                    {item.title}
                                    <span className={styles.role}>
                                        {item.role}
                                    </span>
                                </h4>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
