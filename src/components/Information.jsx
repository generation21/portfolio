import styles from "src/styles/Information.module.css";
import TypeIt from "typeit-react";

export default function Information({ handleOnClickIsOpen }) {
    const TypeItComponent = () => (
        <TypeIt
            className={styles.strong}
            getBeforeInit={(instance) => {
                instance
                    .type("Seungbum hong")
                    .pause(750)
                    .delete()
                    .type("Deep learning engineer")
                    .pause(750)
                    .delete()
                    .type("Full Stack Engineer")
                    .pause(750)
                    .delete();
                return instance;
            }}
            options={{
                loop: true,
                speed: 20,
                deleteSpeed: 20,
                autoStart: true,
                cursor: false,
            }}
        />
    );
    return (
        <div className={styles.dialog} onClick={handleOnClickIsOpen}>
            <div
                className={styles.container}
                onClick={(e) => e.stopPropagation()}
            >
                <section className={styles.image_container}>
                    <img
                        className={styles.animated_image}
                        src="image/emoji2.png"
                        alt="emoji"
                    />
                </section>
                <section className={styles.introduce}>
                    <h2>HI! HOW ARE YOU?</h2>
                    <h1>I'M {<TypeItComponent />}</h1>
                    안녕하세요, 저는 홍승범입니다.
                    <p>
                        맡은 일에 최선을 다하는 책임감과 그 이상의 결과를 위해
                        노력하는 개발자입니다. 하루 하루 격변하는 지금 매일
                        새로운 것을 도전하고 있습니다.
                    </p>
                    <h2 className={styles.personal_info}>PERSONAL INFO</h2>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.text}>Name: </span>
                            홍승범
                        </li>
                        <li>
                            <span className={styles.text}>Age: </span>
                            30, 1994.12
                        </li>

                        <li>
                            <span className={styles.text}>Phone: </span>
                            010.7108.8511
                        </li>

                        <li>
                            <span className={styles.text}>Email: </span>
                            qbration21@gmail.com
                        </li>

                        <li>
                            <span className={styles.text}>Address: </span>
                            서울시 서대문구
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
}
