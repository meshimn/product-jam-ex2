import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.wrap}>
        <div className={styles.title}>Welcome to my ex2 solutions! </div>
        <p> - Meshi Maman</p>
        <div>
          <p>
            <Link href="/tic-tac-toe"> Tic Tac Toe</Link>
          </p>
          <p>
            <Link href="/nasa">Nasa Astronomy Picture of the Day</Link>
          </p>
          <p>
            <Link href="/design"> Login Page</Link> - Please make sure to read
            the README file first.
          </p>
        </div>
        <div className={styles.title}> Enjoy ✨ </div>
      </div>
    </main>
  );
}
