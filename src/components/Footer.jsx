import React from "react";
import styles from "src/styles/Footer.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";
export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.chat_input_container}>
                <textarea
                    className={styles.chat_input}
                    placeholder="Send a message"
                />
                <button className={styles.chat_send_button}>
                    <RiSendPlane2Fill />
                </button>
            </div>
            <p className={styles.description}>
                This chat made me navigate to the desired menu.
            </p>
        </div>
    );
}
