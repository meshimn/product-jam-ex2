"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

async function getData(count: number) {
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&count=${count}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return await response.json();
}

const NasaPage = () => {
  const [apodData, setApodData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch 5 APOD items when the page loads
    getData(5)
      .then((data) => setApodData(data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>APOD - Astronomy Picture of the Day </div>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.gallery}>
        {apodData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h2 className={styles.title}>{item.title}</h2>
            <p className={styles.date}>{item.date}</p>
            <img src={item.url} alt={item.title} className={styles.image} />
            <p className={styles.explanation}>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NasaPage;
