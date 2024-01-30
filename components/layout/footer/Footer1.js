import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer id="footer">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="footer-content flex flex-grow">
                                <div className="widget-logo flex-grow">
                                    <div className="logo-footer" id="logo-footer">
                                        <Link href="/">
                                            <img id="logo_footer" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="widget widget-menu style-1">
                                    <h5 className="title-widget">Play</h5>
                                    <ul>
                                        <li><Link href="#">Loot Boxes</Link></li>
                                        <li><Link href="#">Battle Pass</Link></li>
                                        <li><Link href="#">Leaderboards</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget-menu style-2">
                                    <h5 className="title-widget">Compete</h5>
                                    <ul>
                                        <li><Link href="#">FAQ's</Link></li>
                                        <li><Link href="#">Contact</Link></li>
                                        <li><Link href="#">How It Works</Link></li>
                                        <li><Link href="#">Discord community</Link></li>
                                    </ul>
                                </div>
                                <div className="widget widget-menu style-3">
                                    <h5 className="title-widget">Win</h5>
                                    <ul>
                                        <li><Link href="#">Signup</Link></li>
                                        <li><Link href="#">Affliate Program</Link></li>
                                        <li><Link href="#">Go to Dashboard</Link></li>
                                        <li><Link href="#">Customer Support 24/7</Link></li>
                                    </ul>
                                </div>
                                <div className="widget-last">
                                    <div className="widget-menu style-4">
                                        <h5 className="title-widget">Atlas Social Media</h5>

                                    </div>
                                    <h5 className="title-widget mt-30">Join the community</h5>
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
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} Atlas Arena</p>
                        <ul className="flex">
                            <li>
                                <Link href="#">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#">Terms of Service</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>

        </>
    )
}
