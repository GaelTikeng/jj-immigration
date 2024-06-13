import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Maven_Proior</Link>
            </ul> */}

            <ul className="navigation clearfix" >
                <li className="current dropdown"><Link href="/">Home</Link>
                    <ul>
                    <li><Link href="/">Home Page 01</Link></li>
                        <li><Link href="/index-2">Home Page 02</Link></li>
                        <li><Link href="/index-3">Home Page 03</Link></li>
                        <li><Link href="/index-4">Home Page 04</Link></li>
                        <li><Link href="/onepage">OnePage Home</Link></li>
                    </ul>
                </li>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#countries">Countries</Link></li>
                <li><Link href="#team">Team</Link></li>
                <li><Link href="#news">News</Link></li>
                <li><Link href="#footer">Footer</Link></li> 
            </ul>

        </>
    )
}
