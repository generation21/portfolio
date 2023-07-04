import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "src/styles/App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Information from "./components/Information";
import NavigationBar from "./components/NavigationBar";
import NewChat from "./components/NewChat";

export const HOME_PATH = "/home";
export const ABOUT_PATH = "/about";
export const PROJECTS_PATH = "/projects";
export const SKILLS_PATH = "/skills";

function App() {
    const [isNewChatOpen, setIsNewChatOpen] = useState(false);
    const [isInforOpen, setIsInforOpen] = useState(false);
    const handleOnClickIsOpen = () => {
        setIsNewChatOpen((prev) => !prev);
    };
    const handleOnClickInfor = () => {
        setIsInforOpen((prev) => !prev);
    };
    return (
        <div className={styles.container}>
            {isNewChatOpen && (
                <NewChat
                    key={"newChat"}
                    handleOnClickIsOpen={handleOnClickIsOpen}
                />
            )}
            {isInforOpen && (
                <Information
                    key={"Contact"}
                    handleOnClickIsOpen={handleOnClickInfor}
                />
            )}

            <NavigationBar
                handleOnClickIsOpen={handleOnClickIsOpen}
                handleOnClickInfor={handleOnClickInfor}
            />
            <main className={styles.main}>
                <Header />
                <Outlet />
                <Footer />
            </main>
        </div>
    );
}

export default App;
