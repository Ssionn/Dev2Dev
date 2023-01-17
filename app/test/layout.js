import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function RootLayout({children}) {
    const router = useRouter();

    return (
        <html>
        <head/>
        <body>
        <nav className={styles.navbar}>
            <div className={styles.navbarLogo}>
                <Image src="/images/logo.svg" alt="MindspaceLogo" width={110} height={80}/>
            </div>
            <div className={styles.navbarLinks}>
                <ul>
                    <li><Link href={`/`}>Home</Link></li>
                    <li><Link href={`/test`}>Test</Link></li>
                </ul>
            </div>

        </nav>
        {children}

        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3>Company</h3>
                    <ul>
                        <li><Link href={`/`}>Home</Link></li>
                        <li><Link href={`/test`}>Test</Link></li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h3>Company</h3>
                    <ul>
                        <li><Link href={`/`}>Home</Link></li>
                        <li><Link href={`/test`}>Test</Link></li>
                    </ul>
                </div>
                <div className={styles.card}>
                    <h3>Company</h3>
                    <ul>
                        <li><Link href={`/`}>Home</Link></li>
                        <li><Link href={`/test`}>Test</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
        </body>
        </html>

    )
}
