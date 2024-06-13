import Layout from "@/components/layout/Layout"
import About from "@/components/sections/onepage/About"
import Banner from "@/components/sections/onepage/Banner"
import News from "@/components/sections/onepage/News"
import Feature from "@/components/sections/onepage/Features"
import Team from "@/components/sections/onepage/Team"
import Visa from "@/components/sections/onepage/Visa"
import Countries from "@/components/sections/onepage/Countries"
import Coaching from "@/components/sections/onepage/Coaching"
import ChooseUs from "@/components/sections/onepage/ChooseUs"
import Education from "@/components/sections/onepage/Education"
import Passport from "@/components/sections/onepage/Passport"
import Clients from "@/components/sections/onepage/Clients"



export default function Home() {

    return (
        <>
            <Layout headerStyle={4} footerStyle={1}>
                <Banner />
                <Visa />
                <About />
                <Feature />
                <Countries />
                <Coaching />
                <ChooseUs />
                <Team />
                <Education />
                <Passport />
                <Clients />
                <News />
            </Layout>
        </>
    )
}