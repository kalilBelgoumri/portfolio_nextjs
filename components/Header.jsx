import Link from "next/link";
import Head from "next/head";

const Header = ({name}) => {
  return (
    <div className="text-gray-600  p-10 ">
      <Head>
        <title>{name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ul className="flex flex-row">
        <li className="pl-4">
          <Link href="/"> Accueil </Link>
        </li>
        <li className="pl-4">
          <Link href="/Projects"> Mes réalisations </Link>
        </li>
        <li className="pl-4">
          <Link href="/Contact"> Me contacter </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;