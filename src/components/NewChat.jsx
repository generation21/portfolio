import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "src/styles/NewChat.module.css";
import { HiOutlineMailOpen } from "react-icons/hi";

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
                <HiOutlineMailOpen className={styles.icon} />
                <ContactUs handleOnClickIsOpen={handleOnClickIsOpen} />
                <div className={styles.button_container}>
                    <button
                        className={styles.close_text}
                        onClick={handleOnClickIsOpen}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
}

export const ContactUs = ({ handleOnClickIsOpen }) => {
    const form = useRef();

    const [email, setEmail] = useState({
        name: "",
        subject: "",
        email: "",
        message: "",
    });
    const [sendEmailText, setSendEmailText] = useState("Send");
    const sendEmail = (e) => {
        e.preventDefault();
        setSendEmailText("Processing");
        emailjs
            .sendForm(
                "service_s21ror3",
                "template_rqajhos",
                form.current,
                "w1Iu-MjaCRMqpt_j5"
            )
            .then(
                (result) => {
                    setSendEmailText("Success");
                },
                (error) => {
                    setSendEmailText("Error");
                }
            );

        setTimeout(() => {
            setSendEmailText("Send");
        }, 5000);
    };

    const handleOnChane = (e, target) => {
        setEmail((prev) => ({ ...prev, [target]: e.target.value }));
    };
    return (
        <form ref={form} onSubmit={sendEmail} className={styles.form_container}>
            <div className={styles.text_container}>
                <p className={styles.text}>Name</p>
                <input
                    type="text"
                    name="name"
                    className={styles.input_text}
                    value={email.name}
                    onChange={(e) => handleOnChane(e, "name")}
                />
                <p className={styles.text}>Subject</p>
                <input
                    type="text"
                    name="subject"
                    className={styles.input_text}
                    value={email.subject}
                    onChange={(e) => handleOnChane(e, "subject")}
                />
                <p className={styles.text}>Email</p>
                <input
                    type="email"
                    name="email"
                    className={styles.input_text}
                    value={email.email}
                    onChange={(e) => handleOnChane(e, "email")}
                />
            </div>
            <div className={styles.message_container}>
                <p className={styles.text}>Message</p>
                <textarea
                    name="message"
                    className={styles.message}
                    value={email.message}
                    onChange={(e) => handleOnChane(e, "message")}
                />
                <input
                    type="submit"
                    value={sendEmailText}
                    className={styles.send_text}
                />
            </div>
        </form>
    );
};
