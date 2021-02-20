import styles from './menuBar.module.css'
import Link from "next/link";


const items = ["introduction", "projects", "experiences"]

export default function MenuBar() {
    const listItems = items.map((item) =>
        <li className={styles.element} key={item}>
            <Link  href={item}>
                <a>
                    {item}
                </a>
            </Link>
        </li>
    );

    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <ul className={styles.header}>
                    <li className={styles.element}>
                        <Link href='/'>
                            <a>
                                Home
                            </a>
                        </Link>
                    </li>
                    {listItems}
                </ul>
            </div>
        </div>
    )
}