import Link from 'next/link'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'


export default function AffiliateProgram() {
    return (
        <>
            <div className="wrapper-content">
                <div className="inner-content">

                    <div className="heading-section">
                        <h2 className="tf-title pb-20">Affiliate Program</h2>
                    </div>
                                                        {/* ADD AffliateProgram LAYOUT HERE */}
                </div>

                <div className="side-bar">
                    <div className="widget widget-recently">
                        <h5 className="title-widget">Largest Purchases</h5>
                        <div className="card-small-main">
                            <img src="assets/images/box-item/box (11).png" alt="" />
                            <div className="card-bottom">
                                <h5><Link href="#">Gucci Box</Link></h5>
                                <span className="date">16hr ago</span>
                            </div>
                        </div>
                     
                    </div>


                    <div className="widget widget-history">
                        <div className="flex items-center justify-between">
                            <h5 className="title-widget">Live Purchases</h5>
                            <Link className="see-all" href="#">See all</Link>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/box-item/box (9).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Pokemon Box</Link></h6>
                                    <span><Link href="#">$300</Link></span>
                                </div>
                            </div>
                            <span className="time">Just now</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/box-item/box (10).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Apple Box</Link></h6>
                                    <span><Link href="#">$200</Link></span>
                                </div>
                            </div>
                            <span className="time">1hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/box-item/box (4).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Designer Box</Link></h6>
                                    <span><Link href="#">$150</Link></span>
                                </div>
                            </div>
                            <span className="time">2hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/box-item/box (11).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Gucci Box</Link></h6>
                                    <span><Link href="#">$300</Link></span>
                                </div>
                            </div>
                            <span className="time">4hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center">
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/box-item/box (6).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Supreme Box</Link></h6>
                                    <span><Link href="#">@100</Link></span>
                                </div>
                            </div>
                            <span className="time">16hr ago</span>
                        </div>
                    </div>


                    <div className="widget widget-creators">
                        <div className="flex items-center justify-between">
                            <h5 className="title-widget">Top Champions</h5>
                            <Link className="see-all" href="#">See all</Link>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">1. </div>
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/avatar/avatar (1).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Michael Burns</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">2. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar (5).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">3. </div>
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/avatar/avatar (4).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Rhys James</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">4. </div>
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/avatar/avatar (3).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Ash Roggins</Link></h6>
                                    <span><Link href="#"></Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center">
                            <div className="order">5. </div>
                            <div className="author flex items-center flex-grow">
                            <img src="assets/images/avatar/avatar (2).png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Tom Sons</Link></h6>
                                    <span><Link href="#"></Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
