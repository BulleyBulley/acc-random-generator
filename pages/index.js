import Head from 'next/head';
import styles from '../styles/Home.module.css';
import carList from '../data/CarList';
import { useState } from 'react';

export default function Home() {
  const [generatedCar, setGeneratedCar] = useState("");
  const [carClass, setCarClass] = useState("all");

  const handleGenerate = () => {
    let randomCar = {};
    if (carClass === 'all') {
      randomCar = carList[Math.floor(Math.random() * carList.length)];
    } else {
      const filteredCarList = carList.filter(car => car.gtClass.toLowerCase() === carClass);
      console.log(filteredCarList);
      randomCar = filteredCarList[Math.floor(Math.random() * filteredCarList.length)];
    }
    
    //display random car
    setGeneratedCar(randomCar);
  }

  const handleSelectCarClass = (e) => {
    setCarClass(e.target.value);
  }

  const handleClearBtn = () => {
    setGeneratedCar("");
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Random ACC Car Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>
          Random ACC Car Generator
        </h1>
        </div>
        <div className={styles.carClassSelectionContainer}>
        <select className={styles.carClassSelectionBox} onChange={handleSelectCarClass}>
          <option value="all">ALL</option>
          <option value="gt3">GT 3</option>
          <option value="gt4">GT 4</option>
          <option value="gtc">GTC</option>
          <option value="tcx">TCX</option>
        </select>

        </div>

        <div className={styles.generateContainer}>
        <button onClick={handleGenerate} className={styles.generateBtn}>Generate</button>
        </div>

        <div className={styles.showCarContainer}>
        <h2>
          {generatedCar.name}
        </h2>
        <h3>
          {generatedCar.gtClass} 
          </h3>
        </div>

      <div className={styles.clearBtnContainer}>
      <button className={styles.clearBtn} onClick={handleClearBtn}>Clear</button>

      </div>


      </main>

      <footer>

      </footer>

      <style jsx>{`
        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
