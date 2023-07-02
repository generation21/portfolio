import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "src/styles/NewChat.module.css";
export default function NewChat({ handleOnClickIsOpen }) {
    return (
        <div className={styles.dialog} onClick={handleOnClickIsOpen}>
            <div
                onClick={(e) => e.stopPropagation()}
                className={styles.container}
            >
                <p className={styles.dialog_title}>
                    Join me to enrich your work journey!
                </p>
                <ContactUs handleOnClickIsOpen={handleOnClickIsOpen} />
            </div>
        </div>
    );
}

export const ContactUs = ({ handleOnClickIsOpen }) => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_s21ror3",
                "template_rqajhos",
                form.current,
                "w1Iu-MjaCRMqpt_j5"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <form
            ref={form}
            onSubmit={sendEmail}
            style={{ width: "100%", height: "100%", marginTop: "1rem" }}
        >
            <div className={styles.text_container}>
                <p className={styles.text}>Title</p>
                <input type="text" name="title" className={styles.title} />
                <p className={styles.text}>Email</p>
                <input
                    type="email"
                    name="user_email"
                    className={styles.email}
                />
            </div>
            <div className={styles.message_container}>
                <p className={styles.text}>Message</p>
                <textarea name="message" className={styles.message} />
            </div>
            <div className={styles.button_container}>
                <input
                    type="submit"
                    value="Send"
                    className={styles.send_text}
                />
                <button
                    className={styles.close_text}
                    onClick={handleOnClickIsOpen}
                >
                    Close
                </button>
            </div>
        </form>
    );
};
