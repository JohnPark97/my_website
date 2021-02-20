import Head from "next/head";
import navStyles from "../styles/Home.module.css";
import MenuBar from "../components/menuBar";
import styles from "../styles/Experiences.module.css";

export default function Experiences() {
    return(
        <div>
            <Head>
                <title>Experiences</title>
            </Head>

            <div className={navStyles.navbar}>
                <MenuBar/>
            </div>
            <div className={styles.container}>
                <main className={styles.body}>
                    <div className={styles.main}>
                        <div className={styles.details}>
                            <div style={{margin: '75px 0'}}>
                                <h1>
                                    Work Experience:
                                </h1>
                                <div>
                                    <p>
                                        <h3>
                                            Absolute Software
                                        </h3>
                                        QA Test Developer (Sept 2019 ~ Aug 2020)
                                        <ul className={styles.ul}>
                                            <li>Though the title was QA, was mostly involved in software development using Java</li>
                                            <li>Back-end experience Java development using Maven and Spring Framework</li>
                                            <li>Familiar with Jenkins to build, test, and deploy in different environments</li>
                                            <li>Front-end experience with Javascript (React.js) and CSS</li>
                                            <li>SQL Experience using both pymongo and Microsoft SQL Server 2019</li>
                                        </ul>
                                    </p>

                                    <p>
                                        <h3>
                                            Deluxe Encore Ltd.
                                        </h3>
                                        App Developer (May 2016 ~ Feb 2017)
                                        <ul className={styles.ul}>
                                            <li>Design & Develop desktop application for the dailies team</li>
                                            <li>UI development using Pyside and PyQt5</li>
                                            <li>Query data from MySQL database and make is easy to update/view for users</li>
                                        </ul>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

        </div>
    )

}