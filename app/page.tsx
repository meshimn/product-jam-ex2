import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <div className={styles.wrap}>
        <div className={styles.title}>Welcome to Meshi's ex2 solutions! </div>
        <div>
          <p>
            <Link href="/tic-tac-toe"> Tic Tac Toe</Link>
          </p>
          <p>
            <Link href="/nasa">Nasa Astronomy Picture of the Day</Link>
          </p>
          <p>
            <Link href="/design"> Login Page</Link>
          </p>
        </div>
        <div className={styles.title}> Enjoy ✨ </div>
      </div>
    </main>
  );
}
