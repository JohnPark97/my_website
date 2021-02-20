import Head from "next/head";
import navStyles from "../styles/Home.module.css";
import styles from "../styles/Introduction.module.css";
import MenuBar from "../components/menuBar";
import Image from 'next/image';
import FadeInAnimation from "../components/fadeIn";

export default function Introduction() {
    return(
        <div>
            <Head>
                <title>Introduction</title>
            </Head>

            <div className={navStyles.navbar}>
                <MenuBar/>
            </div>
            <div className={styles.container}>
            <main className={styles.body}>
                <div className={styles.main}>
                    <div className={styles.hcontainer}>
                        <Image
                            className={styles.profile}
                            src="/dumpling.png"
                            alt="Profile photo"
                            width={300}
                            height={300}
                        />
                        <div className={styles.intro}>
                            <h1 className={styles.name}>
                                John Park
                            </h1>
                            <p className={styles.lname}>
                                legal: JongHyuk Park
                            </p>
                            <p className={styles.slogan}>
                                "I can do all this through him <br/>
                                who gives me strength"
                            </p>
                        </div>
                    </div>
                    <div className={styles.details}>
                        <div style={{margin: '75px 0'}}>
                            <h1>
                                Graduated:
                            </h1>
                            <Image
                                className={styles.logo}
                                src="/ubc.jpg"
                                alt="ubc logo"
                                width={125}
                                height={125}
                            />
                            <p className={styles.ubc}>
                                University of British Columbia (2021 April) <br/>
                                Bachelor of Science (Computer Science)
                            </p>
                        </div>
                        <div style={{margin: '75px 0'}}>
                            <h1>
                                Technical Skill Sets:
                            </h1>
                            <div>
                                <h3>
                                    Front End Experience:
                                </h3>
                                <ul className={styles.ul}>
                                    <li>JavaScript, HTML, CSS</li>
                                    <li>React.js, React Native, Node.js</li>
                                </ul>
                            </div>
                            <div>
                                <h3>
                                    Back End Experience:
                                </h3>
                                <ul className={styles.ul}>
                                    <li>Java, Python, C++ (intro)</li>
                                    <li>Spring Framework, Jenkins, Apache Maven</li>
                                    <li>Pymongo, Pyside, PyQt4, PyQt5</li>
                                </ul>
                            </div>
                            <div>
                                <h3>
                                    API Experience:
                                </h3>
                                <ul className={styles.ul}>
                                    <li>REST API, GRPC</li>
                                </ul>
                            </div>
                            <div>
                                <h3>
                                Other Frameworks:
                                </h3>
                                <ul className={styles.ul}>
                                    <li>Kubernetes, Git</li>
                                    <li>Jira, Confluence</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{margin: '75px 0'}}>
                            <h1>
                                Other Skills:
                            </h1>
                            <div>
                                <ul className={styles.ul}>
                                    <li>Fast-Learning, Dedicated, Team-Oriented</li>
                                    <li>Time Management, Self-Researching</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{margin: '75px 0'}}>
                            <h1>
                                Languages:
                            </h1>
                            <div>
                                <ul className={styles.ul}>
                                    <li>English (Writing, Speaking, Listening, Reading)</li>
                                    <li>Korean (Writing, Speaking, Listening, Reading)</li>
                                </ul>
                            </div>
                        </div>
                        <div style={{margin: '75px 0'}}>
                            <h1>
                                Interests/Activities:
                            </h1>
                            <div>
                                <ul className={styles.ul}>
                                    <li>Basketball, love watching NBA games</li>
                                    <li>Video games, like to both watch and play</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            </div>

        </div>
    )

}