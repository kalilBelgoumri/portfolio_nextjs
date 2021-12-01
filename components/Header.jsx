import Link from "next/link";
import Head from "next/head";

const Header = ({name}) => {
  return (
    <div className ="p-10 flex justify-center px-5">
      <Head>
        <title>{name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ul className="flex">
        <li>
          <Link href="/"> Accueil </Link>
        </li>
        <li>
          <Link href="/Projects"> Mes réalisations </Link>
        </li>
        <li>
          <Link href="/Contact"> Me contacter </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;