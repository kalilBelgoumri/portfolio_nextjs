import Image from "next/image";
import bio from "../assets/bio.jpg";
import Layout from '../components/Layout';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout name="Home">
      <h1> Bienvenue sur mon Portfolio </h1>
       <h1> Biographie </h1>
      <Image src={bio} alt="My desk" layout="responsive" property='priority' />
      <p className="text-center text-gray-600 text-lg p-10">
          Logoden biniou degemer mat an penn ar bed, digalon ne levrioù ennon
          anzav eta, mestr bed fresk gwinizh kerzu dreist.
        </p>
      </Layout>
    </div>
  );
}
