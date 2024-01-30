import Link from "next/link"
import { useState } from "react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

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

const swiperOptions2 = {
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
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
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
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
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
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
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
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
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
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
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
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>

                                {/* <div id='account-bar2'>
                                    <div id='account-bar-level2'>Battle Pass Rank 1</div>
                                    <div id='xp-bar2'>
                                    <div id='xp-bar-fill2'>
                                        <div id='xp-increase-fx2'><div id='xp-increase-fx-flicker2'><div class='xp-increase-glow12'></div><div class='xp-increase-glow22'></div><div class='xp-increase-glow32'></div></div><div class='xp-increase-glow22'></div></div>
                                    </div>
                                    </div>
                                    <div id='account-bar-next-level2'> 2</div>
                                </div> */}

<                           div data-wow-delay="0s" className="wow fadeInUp col-12">
                                <div className="heading-section">
                                    <h3 style={{ marginBottom: '20px' }}>Champion Rank Tiers</h3>
                                    <button style={{ marginBottom: '20px' }}>Buy Premium Battle Pass</button>
                                    <button style={{ marginBottom: '20px' }}>Buy Atlas Experience</button>

                                </div>
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


                            <div className="themesflat-container">
                                <div className="heading-section">
                                    <h3 style={{ marginBottom: '10px', marginTop: '10px' }}>Free Atlas Capsules</h3>
                                </div>
                            <div className="row">
                                <div className="col-12 pages-title">
                                    <div className="content">
                                  </div>
                                    <div className="relative">
                                        <Swiper {...swiperOptions2} className="swiper-container carousel3-type2">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-6">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-03.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={handleBidModal} href="#" className="tf-button"><span>Open</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-6">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-01.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Open</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-6">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/about-us-02.jpg" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Open</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section-1">
                                    <div className="heading-section">
                                    <h3 style={{ marginBottom: '30px', marginTop: '-50px' }}>Frequently Asked Questions</h3>
                                </div>                                    
                                </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(1)}>1. Why are NFTs becoming popular?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(2)}>2. How do I keep my NFTs safe?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(3)}>3. What is blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(4)}>4. What is an NFT?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 5 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(5)}>5. How do I set up my Ledger?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion2">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 6 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(6)}>6. Why are NFTs becoming popular?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 7 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(7)}>7. How do I keep my NFTs safe?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 8 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(8)}>8. What is blockchain?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                <p>Blockchain is a shared, immutable ledger that facilitates the process of recording transactions and tracking assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding). Virtually anything of value can be tracked and traded on a blockchain network, reducing risk and cutting costs for all involved</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 9 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(9)}>9. What is an NFT?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 10 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(10)}>10. How do I set up my Ledger?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
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
                        </div>
                    </div>
                </div>                
                </div>

        </>
    )
}
