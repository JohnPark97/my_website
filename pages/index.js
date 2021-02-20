import Head from 'next/head'
import styles from '../styles/Home.module.css'
import FadeInAnimation from "../components/fadeIn";
import MenuBar from "../components/menuBar";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.bg}>
            <FadeInAnimation wrapperElement="div" direction="left">
                <div>
                    <Head>
                        <title>John Park</title>
                    </Head>

                    <div className={styles.navbar}>
                        <MenuBar/>
                    </div>
                    <main className={styles.main}>
                        <FadeInAnimation wrapperElement="h1" direction="up" delay={1}>
                            <h1 className={styles.title}>
                                Nice to Meet You!
                            </h1>
                        </FadeInAnimation>

                        <FadeInAnimation wrapperElement="h1" direction="up" delay={2}>
                            <h1 className={styles.description}>
                                Welcome to My Website
                            </h1>
                        </FadeInAnimation>

                        <div className={styles.grid}>
                            <Link href='/introduction'>
                                <a className={styles.card}>
                                    <h3>Introduction &rarr;</h3>
                                    <ul>
                                        <li>Education</li>
                                        <li>Experiences</li>
                                        <li>Skill Sets</li>
                                    </ul>
                                </a>

                            </Link>

                            <Link href='/projects'>
                                <a className={styles.card}>
                                    <h3>Projects &rarr;</h3>
                                    <ul>
                                        <li>Personal Projects</li>
                                        <li>School Projects</li>
                                        <li>Work Projects</li>
                                    </ul>
                                </a>
                            </Link>

                            <Link href="/experiences">
                                <a
                                    className={styles.card}
                                >

                                    <h3>Experiences &rarr;</h3>
                                    <ul>
                                        <li>Work Experiences</li>
                                        <li>Volunteer Experiences</li>
                                    </ul>
                                </a>
                            </Link>
                        </div>
                    </main>
                </div>
            </FadeInAnimation>
        </div>
    )
}
