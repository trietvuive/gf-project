import styles from "./ResponseButton.module.scss"
import { Inter } from "next/font/google";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

const ResponseButton = () => {
    return (
        <div className={inter.className}>
            <div className={styles.buttonContainer}>
                <div className={styles.circle}></div>
                <div className={styles.title}>
                    <p>HIIIII</p>
                </div>
            </div>
            <div className={styles.iconContainer}>
                <ArrowRightIcon className={styles.icon} />
            </div>
        </div>
    )
}

export default ResponseButton;