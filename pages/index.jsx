import styles from "../styles/Home.module.css";
import NFTGallery from "../components/nftGallery";
import Footer from "../components/footer";
import TokenBalancesDisplay from "../components/tokensBalanceDisplay";
import { Tabs } from 'antd';

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

// import TokenBalancesDisplay from "../components/tokenBalancesDisplay.jsx"

// export default function Home() {
//   return (
//     <>
//       <TokenBalancesDisplay address={"hashlink.eth"} chain={"ETH_MAINNET"}/>
//     </>
//   );
// }