import React from "react";
import styles from "src/styles/Contact.module.css";
export default function Contact({ handleOnClickIsOpen }) {
    return (
        <div className={styles.dialog} onClick={handleOnClickIsOpen}>
            <div
                className={styles.container}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.image_container}>
                    <img
                        className={styles.animated_image}
                        src="image/emoji2.png"
                        alt="emoji"
                    />
                </div>
                <p>
                    안녕하세요, 저는 반혜주입니다.
                    <p>
                        😀 새로운 기술에 관심이 많으며 동료들과의 커뮤니케이션과
                        상호 피드백 및 리뷰를 좋아합니다. 현재 프론트엔드
                        개발자로 구직중입니다. 맡은 일에 자부심을 갖고 도전을
                        경험할 수 있는 회사에서 일하고 싶습니다.
                    </p>
                </p>
                <h2>PERSONAL INFO</h2>
                <ul>
                    <li>
                        <span>Name: </span>
                        홍승범
                    </li>
                    <li>
                        <span>Age: </span>
                        30, 1994.12
                    </li>

                    <li>
                        <span>Phone: </span>
                        010.7108.8511
                    </li>

                    <li>
                        <span>Email: </span>
                        qbration21@gmail.com
                    </li>

                    <li>
                        <span>Address: </span>
                        서울시 서대문구
                    </li>
                </ul>
            </div>
        </div>
    );
}
