import Layout from "../components/layout/Layout";
import About from '../components/sections/home1/About'
import Banner from "../components/sections/home1/Banner";
import Features from "../components/sections/home1/Features";
import News from "../components/sections/home1/News";
import Countries from "../components/sections/home1/Countries";
import Dream from "../components/sections/home1/Dream";
import Coaching from "../components/sections/home1/Coaching";
import Chooseus from "../components/sections/home1/Chooseus";
import Team from "../components/sections/home1/Team";
import Education from "../components/sections/home1/Education";
import Passport from "../components/sections/home1/Passport";
import Clients from "../components/sections/home1/Clients";
import Visa from "../components/sections/home1/Visa";

export default function Home() {
  return (
    <>
      <Layout headerStyle={1} footerStyle={1}>
        <Banner />
        <Visa />
        <About />
        <Features />
        <Dream />
        <Countries />
        {/* <Coaching /> */}
        <Chooseus />
        <Team />
        <Education />
        <Passport />
        {/* <Clients /> */}
        {/* <News /> */}
      </Layout>
    </>
  );
}
