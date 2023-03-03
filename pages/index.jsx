import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <main className={styles.main}>
        <NFTGallery />
        <Footer />
      </main>
    </div>
  );
}
