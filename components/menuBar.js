import styles from './menuBar.module.css'


const items = ["introduction", "projects", "experiences"]

export default function MenuBar() {
    const listItems = items.map((item) =>
        <li className={styles.element} key={item}>
                <a href="#">
                    {item}
                </a>
        </li>
    );

    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <ul className={styles.header}>{listItems}</ul>
            </div>
        </div>
    )
}