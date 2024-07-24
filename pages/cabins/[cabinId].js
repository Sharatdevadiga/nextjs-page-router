import Head from "next/head";
import { useRouter } from "next/router";
import { getCabin } from "../../lib/data-service";
import CabinView from "../../components/CabinView";

// dynamically generated (SSR)
//  ISR can be implementeed using revalidate
export async function getServerSideProps({ params }) {
  const cabin = await getCabin(params.cabinId);
  return { props: { cabin }, revalidate: 3600 };
}

function Cabin({ cabin }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Cabin-{cabin.name}/ The Wild Oasis</title>
      </Head>
      <div className="max-w-6xl mx-auto mt-8">
        <CabinView cabin={cabin}></CabinView>
      </div>
    </>
  );
}

export default Cabin;
