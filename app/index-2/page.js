import Layout from "../../components/layout/Layout";
import About from "../../components/sections/home2/About";
import Banner from "../../components/sections/home2/Banner";
import Features from "../../components/sections/home2/Features";
import Client from "../../components/sections/home2/Client";
import Visa from "../../components/sections/home2/Visa";
import Coaching from "../../components/sections/home2/Coaching";
import Team from "../../components/sections/home2/Team";
import Skills from "../../components/sections/home2/Skills";
import Countries from "../../components/sections/home2/Countries";
import Countries1 from "../../components/sections/home2/Countries1";
import Testmonial from "../../components/sections/home2/Testmonial";
import Video from "../../components/sections/home2/Video";
import News from "../../components/sections/home2/News";
import Contact from "../../components/sections/home2/Contact";

export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={2}>
        <Banner />
        <Visa />
        <About />
        <Coaching />
        <Team />
        <Skills />
        <Countries />
        <Features />
        <Countries1 />
        <Client />
        <Testmonial />
        <Video />
        <News />
        <Contact />
      </Layout>
    </>
  );
}
