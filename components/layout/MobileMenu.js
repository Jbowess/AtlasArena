import Link from 'next/link'
import { useState } from 'react'
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <nav id="mobile-main-nav" className="mobile-main-nav">
            <div className="side-bar">

            <div className="widget widget-categories">
                <h5 className="title-widget">Menu</h5>
                <ul>
                    <li>
                        <div className="cate-item"><Link href="#">HOME</Link></div>
                    </li>
                    <li>
                        <div className="cate-item"><Link href="#">LOOT BOXES</Link></div>
                    </li>
                    <li>
                        <div className="cate-item"><Link href="#">BATTLEPASS</Link></div>
                    </li>
                    <li>
                        <div className="cate-item"><Link href="#">FAQ's</Link></div>
                    </li>
                </ul>
            </div>
            <div className="widget">
                <h5 className="title-widget">Join the community</h5>
                <div className="widget-social">
                    <ul className="flex">
                        <li><Link href="#" className="icon-facebook" /></li>
                        <li><Link href="#" className="icon-twitter" /></li>
                        <li><Link href="#" className="icon-vt" /></li>
                        <li><Link href="#" className="icon-tiktok" /></li>
                        <li><Link href="#" className="icon-youtube" /></li>
                    </ul>
                </div>
            </div>
            </div>
            </nav>
        </>
    )
}
