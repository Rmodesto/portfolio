import { Inter } from "@next/font/google";
import Vortex from "components/Vortex";
import Head from "next/head";
import About from "../../components/About";
import Contact from "../../components/ContactForm";
import Hero from "../../components/Hero";
import Layout from "../../components/Layouts/Layout";
import Projects from "../../components/Projects";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rafael Modesto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preload" href="/styles/global.css" as="style" />
      </Head>

      <Layout>
        <Hero />
        <Vortex />
        <Projects />
        <About />
        <Contact />
      </Layout>
    </>
  );
}
