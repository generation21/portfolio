import { Outlet } from "react-router-dom";
import styles from "src/styles/App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";

export const HOME_PATH = "/home";
export const ABOUT_PATH = "/about";
export const PROJECTS_PATH = "/projects";
export const SKILLS_PATH = "/skills";

function App() {
    return (
        <div className={styles.container}>
            <NavigationBar />
            <main className={styles.main}>
                <Header />
                <Outlet />
                <Footer />
            </main>
        </div>
    );
}

export default App;
