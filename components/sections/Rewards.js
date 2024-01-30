import { Menu } from '@headlessui/react'
import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import BidModal from "../elements/BidModal"
import Countdown from "../elements/Countdown"
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'
const currentTime = new Date()

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 5,
    observer: true,
    observeParents: true,
    spaceBetween: 12,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 5
        },
        1024: {
            slidesPerView: 5
        }
    }
}





export default function Rewards() {
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
            <div className="wrapper-content">
                <div className="inner-content">
                        <div className="themesflat-container">
                        <div className="heading-section">
                            <h2 className="tf-title pb-30">Battle Pass</h2>
                        </div>
                            <div className="row">
                                <div className="col-12 pages-title">
                                    <div className="relative">
                                        <Swiper {...swiperOptions} className="swiper-container carousel3-type2">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-03.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-01.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-02.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-01.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-01.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-7">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-01.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Place Bid</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                    <div className="product-item offers">
                                        <h6><i className="icon-description" />Offers</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <div className="table-heading">
                                                <div className="column">Price</div>
                                                <div className="column">USD Price</div>
                                                <div className="column">Quantity</div>
                                                <div className="column">Floor Diference</div>
                                                <div className="column">Expiration</div>
                                                <div className="column">Form</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0034</h6></div>
                                                <div className="column">$6,60</div>
                                                <div className="column">3</div>
                                                <div className="column">90% below</div>
                                                <div className="column">In 26 day</div>
                                                <div className="column"><span className="tf-color">273E40</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div data-wow-delay="0s" className="wow fadeInUp col-12">
                                    <div className="product-item item-activity mb-0">
                                        <h6><i className="icon-two-arrow rotateZ90" />Item activity</h6>
                                        <i className="icon-keyboard_arrow_down" />
                                        <div className="content">
                                            <div className="table-heading">
                                                <div className="column">Event</div>
                                                <div className="column">Price</div>
                                                <div className="column">Form</div>
                                                <div className="column">To</div>
                                                <div className="column">Date</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-two-arrow" />Transfer</div>
                                                <div className="column">-/-</div>
                                                <div className="column"><span className="tf-color">985DE3</span></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column">19h ago</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-sale" />Sale</div>
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0319</h6></div>
                                                <div className="column"><span className="tf-color">985DE3</span></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column">19h ago</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-two-arrow" />Transfer</div>
                                                <div className="column">-/-</div>
                                                <div className="column"><span className="tf-color">985DE3</span></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column">19h ago</div>
                                            </div>
                                            <div className="table-item">
                                                <div className="column flex items-center"><i className="icon-sale" />Sale</div>
                                                <div className="column"><h6 className="price gem"><i className="icon-gem" />0,0319</h6></div>
                                                <div className="column"><span className="tf-color">985DE3</span></div>
                                                <div className="column"><span className="tf-color">Nosyu</span></div>
                                                <div className="column">19h ago</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                    








                    
                </div>
                <div className="side-bar">
                    <div className="widget widget-recently">
                        <h5 className="title-widget">Most Victorious Wins</h5>
                        <div className="card-small-main">
                            <img src="assets/images/blog/sidebar-05.jpg" alt="" />
                            <div className="card-bottom">
                                <h5><Link href="#">Gucci Boxes</Link></h5>
                                <span className="date">16hr ago</span>
                            </div>
                        </div>
                        <div className="card-small">
                            <div className="author">
                                <img src="assets/images/blog/sidebar-06.jpg" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Propw</Link></h6>
                                    <p><Link href="#">@themes</Link></p>
                                </div>
                            </div>
                            <span className="date">Mon, 08 May </span>
                        </div>
                        <div className="card-small">
                            <div className="author">
                                <img src="assets/images/blog/sidebar-07.jpg" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Propw</Link></h6>
                                    <p><Link href="#">@themes</Link></p>
                                </div>
                            </div>
                            <span className="date">Mon, 08 May </span>
                        </div>
                        <div className="card-small">
                            <div className="author">
                                <img src="assets/images/blog/sidebar-08.jpg" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Propw</Link></h6>
                                    <p><Link href="#">@themes</Link></p>
                                </div>
                            </div>
                            <span className="date">Mon, 08 May </span>
                        </div>
                    </div>


                    <div className="widget widget-history">
                        <div className="flex items-center justify-between">
                            <h5 className="title-widget">Live Wins</h5>
                            <Link className="see-all" href="#">See all</Link>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Lorem NFT sold</Link></h6>
                                    <span><Link href="#">Sold at 1.32 ETH</Link></span>
                                </div>
                            </div>
                            <span className="time">Just now</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-02.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">New NFT uploaded</Link></h6>
                                    <span><Link href="#">By Marisol Pena</Link></span>
                                </div>
                            </div>
                            <span className="time">1hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-03.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">You followed a creator</Link></h6>
                                    <span><Link href="#">Jane Cooper</Link></span>
                                </div>
                            </div>
                            <span className="time">2hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-04.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">You placed a bid</Link></h6>
                                    <span><Link href="#">Whirl wind NFT</Link></span>
                                </div>
                            </div>
                            <span className="time">4hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">You followed a creator</Link></h6>
                                    <span><Link href="#">Courtney Henry</Link></span>
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
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                            <button className="follow">Follow</button>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">2. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-02.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                            <button className="follow">Follow</button>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">3. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-03.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                            <button className="follow">Follow</button>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">4. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-04.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                            <button className="follow">Follow</button>
                        </div>
                        <div className="widget-creators-item flex items-center">
                            <div className="order">5. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                            <button className="follow">Follow</button>
                        </div>
                    </div>
                </div>
        </>
    )
}
