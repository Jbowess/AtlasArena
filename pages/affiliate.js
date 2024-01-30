import BidModal from "@/components/elements/BidModal"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 12,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
}
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

import { useState } from "react"
export default function Home() {

    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)

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

            <Layout headerStyle={1} footerStyle={1} pageCls="about-us-page">

                <div>
                    <div className="page-title about-us relative">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12 pages-title">
                                    <div className="content">
                                        <h1 data-wow-delay="0s" className="wow fadeInUp">Affiliate</h1>
                                        <p data-wow-delay="0.1s" className="wow fadeInUp">Get started by learning the Atlas Arena Platform and how to compete in the arena</p>
                                        <div data-wow-delay="0.2s" className="wow fadeInUp flat-button flex justify-center">
                                            <Link href="#" className="tf-button style-1 h50 w190">Become An Affiliate <i className="icon-arrow-up-right2" /></Link>
                                        </div>
                                    </div>
                                    <div className="icon-background">
                                        <img className="absolute item1" src="/assets/images/item-background/item11.png" alt="" />
                                        <img className="absolute item2" src="/assets/images/item-background/item10.png" alt="" />
                                        <img className="absolute item3" src="/assets/images/item-background/item12.png" alt="" />
                                        <img className="absolute item4" src="/assets/images/item-background/item13.png" alt="" />
                                    </div>
                                    <div className="widget-our-team">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                        <h2 className="tf-title pb-40">Meet Our Amazing Team</h2>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-01.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-02.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-03.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-04.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.4s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-05.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.5s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-38 text-center">
                                        <img src="/assets/images/avatar/team-06.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-center">
                                <div data-wow-delay="0s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-07.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.1s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-08.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.2s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-09.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.3s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-10.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0.4s" className="wow fadeInUp col-md-2 col-6">
                                    <div className="our-team-item pb-40 text-center">
                                        <img src="/assets/images/avatar/team-11.png" alt="" />
                                        <div className="name"><Link href="#">Marvin McKinney</Link></div>
                                        <div className="info">CEO, Director</div>
                                        <div className="widget-social">
                                            <ul className="flex justify-center">
                                                <li><Link href="#" className="icon-facebook" /></li>
                                                <li><Link href="#" className="icon-twitter" /></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Link href="#" className="tf-button style-1 h50 w190 m-auto">Join us<i className="icon-arrow-up-right2" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="tf-section-2">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="widget-income">
                                        <div className="title">Start Earning Real-Life Rewards While You Game Today</div>
                                        <p>Get started with the highest rewarding and fair loot box gaming platform now.</p>
                                        <Link href="#" className="tf-button style-1 h50 w190">Get started<i className="icon-arrow-up-right2" /></Link>
                                        <div className="image">
                                            <img className="icon-1" src="/assets/images/item-background/item11.png" alt="" />
                                            <img className="icon-2" src="/assets/images/item-background/item12.png" alt="" />
                                            <img className="icon-3" src="/assets/images/item-background/item13.png" alt="" />
                                            <img className="icon-4" src="/assets/images/item-background/item14.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BidModal handleBidModal={handleBidModal} isBidModal={isBidModal} />
            </Layout>
        </>
    )
}