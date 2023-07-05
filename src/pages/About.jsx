import React, { useEffect, useState } from "react";
import SkillCard from "src/pages/About/SkillCard";
import { AiOutlineHtml5, AiFillGithub } from "react-icons/ai";
import { BiLogoReact } from "react-icons/bi";
import { FaPython } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiPytorch, SiFastapi } from "react-icons/si";
import styles from "src/styles/About.module.css";
import axios from "axios";
import Experience from "src/pages/About/Experience";

export default function About() {
    const [data, setData] = useState(null);

    const icons = {
        "HTML/CSS": <AiOutlineHtml5 />,
        Python: <FaPython />,
        Pytorch: <SiPytorch />,
        FastAPI: <SiFastapi />,
        Javascript: <TbBrandJavascript />,
        React: <BiLogoReact />,
        "Git/Github": <AiFillGithub />,
    };
    useEffect(() => {
        axios
            .get("data/skills.json")
            .then((response) => setData(response.data))
            .catch((error) => console.error("Error:", error));
    }, []);
    if (data === null) {
        return <div>Loading...</div>;
    }
    return (
        <section className={styles.skill}>
            <h1 className={styles.title}>MY SKILLS</h1>
            <div className={styles.container}>
                {data.map((item) => (
                    <SkillCard
                        key={item.title}
                        title={item.title}
                        icon={icons[item.title]}
                        descriptions={item.descriptions}
                    />
                ))}
            </div>
            <Experience />
        </section>
    );
}
