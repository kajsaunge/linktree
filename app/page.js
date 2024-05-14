import Header from './components/Header/Header';
import styles from './page.module.css';
import Card from './components/Card/Card';

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Header />
        <div className={styles.grid}>
          <Card
            url='https://konst.kajsaunge.se/'
            title='KONST'
            description=''
            image='/konst.png'
            imageAlt='Kajsa Unge Konst'
          />
          <Card
            url='https://cv.kajsaunge.se/'
            title='DESIGN & FRONTEND'
            description=''
            image='/cv.png'
            imageAlt='Kajsa Unge CV'
          />
        </div>
      </main>
    </>
  );
}
