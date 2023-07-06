import React, { useState } from "react";
import styles from "src/styles/Footer.module.css";
import { RiSendPlane2Fill } from "react-icons/ri";
import useStringSimilarity from "src/hooks/string-smiliarility";
import { useNavigate } from "react-router-dom";
export default function Footer() {
    const stringList = ["home", "about", "projects", "papers"];
    const [value, setValue] = useState("");
    const navigation = useNavigate();
    const getBestMatch = useStringSimilarity();

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const bestMatch = getBestMatch(value, stringList);
        navigation(`/${bestMatch}`);
    };
    return (
        <div className={styles.footer}>
            <form
                className={styles.chat_input_container}
                onSubmit={handleOnSubmit}
            >
                <input
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    type="text"
                    className={styles.chat_input}
                    placeholder="Send a message"
                />
                <button type="submit" className={styles.chat_send_button}>
                    <RiSendPlane2Fill />
                </button>
            </form>
            <p className={styles.description}>
                This chat made me navigate to the desired menu.
            </p>
        </div>
    );
}
