import Link from "next/link";
import { useRouter } from "next/router";

export default function Menu() {
    const router = useRouter();

    return (
        <>
            <ul id="menu-primary-menu" className="menu">
                <li className={router.pathname == "/" ? "menu-item current-item" : "menu-item"}>
                    <Link href="/">HOME</Link>
                </li>
                <li className={router.pathname == "/about-us" ? "menu-item current-item" : "menu-item"}>
                    <Link href="/about-us">FAQ's</Link>
                </li>
                {/* <li className="menu-item menu-item">
                    <Link href="/explore-1">LOOT BOXES</Link>
                </li> */}
                <li className={router.pathname == "/rewards" ? "menu-item current-item" : "menu-item"}>
                    <Link href="/rewards">BATTLE PASS</Link>
                </li>
                {/* <li className={router.pathname == "/affiliate" ? "menu-item current-item" : "menu-item"}>
                    <Link href="/affiliate">AFFILIATE</Link>
                </li> */}
            </ul>
        </>
    );
}
