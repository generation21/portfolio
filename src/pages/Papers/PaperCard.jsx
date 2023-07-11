import styles from "src/styles/PaperCard.module.css";

const PaperCard = ({ title, task, time, from, image, link, techStack }) => {
    return (
        <div className={styles.project}>
            <a href={link} target="_blank">
                <img src={image} alt={title} className={styles.project__img} />
                <div className={styles.project__metadata}>
                    <h3 className={styles.project__title}>{title}</h3>
                    <p className={styles.task}>{task}</p>
                    <p className={styles.time}>
                        <span className={styles.from}>{from}</span> {time}
                    </p>

                    <ul className={styles.teck}>
                        {techStack.map((item) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </div>
            </a>
        </div>
    );
};

export default PaperCard;
