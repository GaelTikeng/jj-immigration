import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home4/Banner"
import Feature from "@/components/sections/home4/Feature"
import About from "@/components/sections/home4/About"
import Countries from "@/components/sections/home4/Countries"
import Skills from "@/components/sections/home4/Skills"
import Countries1 from "@/components/sections/home4/Countries1"
import Team from "@/components/sections/home4/Team"
import Education from "@/components/sections/home4/Education"
import News from "@/components/sections/home4/News"
export default function Home() {
    return (
        <Layout headerStyle={3} footerStyle={1}>
            <Banner />
            <Feature />
            <About />
            <Countries />
            <Skills />
            <Countries1 />
            <Team />
            <Education />
            <News />
        </Layout>

    )
}