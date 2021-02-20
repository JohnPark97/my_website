import Head from "next/head";
import navStyles from "../styles/Home.module.css";
import MenuBar from "../components/menuBar";
import styles from "../styles/Projects.module.css";
import Link from "next/link";
import Image from "next/image";


export default function Projects() {
    return (
        <div>
            <Head>
                <title>Projects</title>
            </Head>

            <div className={navStyles.navbar}>
                <MenuBar/>
            </div>
            <div className={styles.container}>
                <main>
                    <div className={styles.body}>
                        <p className={styles.github}>
                            GitHub: {" "}
                            <Link href='https://github.com/johnpark97'>
                                <a style={{color: 'blue'}}>
                                    https://github.com/johnpark97
                                </a>
                            </Link>
                        </p>
                        <h1 style={{fontSize: '3rem', marginTop: '0.5rem'}}>
                            Personal Projects
                        </h1>
                        <div className={styles.block}>
                            <h2>
                                One Tap Daily Quiet Time
                            </h2>
                            <div className={styles.description}>
                                <p>
                                    One Tap Daily Quiet Time is designed and developed in order to help
                                </p>
                                <p>
                                    anyone who is having hard time meditating consistently.
                                </p>
                                <p>
                                    The focus of the app is that everything is done in one tap
                                </p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <h2>
                                Cloud Ice Cream Website Development
                            </h2>
                            <div className={styles.description}>
                                <p>
                                    This project was a website development for a start up ice cream business.
                                </p>
                                <p>
                                    I met with the owner weekly in order to discuss the design and funtionalities
                                </p>
                                <p>
                                    The focus of the app is that everything is done in one tap
                                </p>
                            </div>
                        </div>
                        <h1 style={{fontSize: '3rem'}}>
                            School Projects
                        </h1>
                        <div className={styles.block}>
                            <h2>
                                Neko-At-Sea-Me
                            </h2>
                            <div className={styles.description}>
                                <p>
                                    2D top-down turn-based game that can be played over video call platform like Zoom.
                                </p>
                                <p>
                                    Implemented in pure C++ and applied Entity Component System.
                                </p>
                                <p>
                                    Worked in a team of 6, facilitated weekly meetings, developed and tested
                                </p>
                            </div>
                        </div>
                        <div className={styles.block}>
                            <h2>
                                Java Project Visualizer
                            </h2>
                            <div className={styles.description}>
                                <p>
                                    D3 based web application that shows the code smells for each files
                                </p>
                                <p>
                                    Can be directly import a project from github url or use .zip file
                                </p>
                                <p>
                                    Various visualizations, details are shown in graphs and dependencies are clearly shown as a diagram
                                </p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )

}