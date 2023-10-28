import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
    
      <Header/>
      <main className="max-w-screen-xl mx-auto">
        {/* Banner */}
        <Banner/>
        {/* product feed */}
      </main>    
  
    </div>
  );
}
