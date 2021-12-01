import Image from "next/image";
import bio from "../assets/bio.jpg";
import Layout from '../components/Layout';

export default function Home() {
  return (
    <div >
      <Layout name="Home">
        <div className="prez text-center">
        <h1 className="text-5xl font-bold"> Bienvenue sur mon Portfolio </h1>
       <h1> Biographie </h1>
        </div>
     
      <Image src={bio} alt="My desk" layout="responsive" property='priority' />
      <p className="text-center text-gray-600 text-lg p-10">
          Logoden biniou degemer mat an penn ar bed, digalon ne levrioù ennon
          anzav eta, mestr bed fresk gwinizh kerzu dreist.
        </p>
      </Layout>
    </div>
  );
}
