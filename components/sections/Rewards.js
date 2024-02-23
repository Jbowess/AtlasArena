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
                            <h2 className="tf-title pb-30">Premium Battle Pass</h2> 
                        </div>
                            <div className="row">
                                <div className="col-12 pages-title">                            

                                    <div className="relative">
                                        <Swiper {...swiperOptions} className="swiper-container carousel3-type2">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-5">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                                <img src="/assets/images/box-item/box (1).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-5">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                            <img src="/assets/images/box-item/box (2).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-5">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                            <img src="/assets/images/box-item/box (3).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-5">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                            <img src="/assets/images/box-item/box (4).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-5">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                            <img src="/assets/images/box-item/box (5).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={handleBidModal} href="#" className="tf-button"><span>Claim</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-5">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                            <img src="/assets/images/box-item/box (6).png" alt="" />
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

                                <div id='account-bar2'>
                                    <div id='xp-bar2'style={{ height: '20px', width: '97%', marginTop: "-10px", marginBottom: "-10px" }}>
                                        <div id='account-bar-level2-left'>LVL 2</div>
                                        <div id='account-bar-rank2'>Battle Pass Rank</div>
                                        <div id='account-bar-level2-right'>LVL 3</div>
                                        <div id='xp-bar-fill2'>
                                            <div id='xp-increase-fx2'>
                                                <div id='xp-increase-fx-flicker2'>
                                                    <div class='xp-increase-glow12'></div>
                                                    <div class='xp-increase-glow22'></div>
                                                    <div class='xp-increase-glow32'></div>
                                                </div>
                                                <div class='xp-increase-glow22'></div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 






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
                                                                <img src="/assets/images/box-item/box (1).png" alt="" />
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
                                                            <img src="/assets/images/box-item/box (2).png" alt="" />
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
                                                            <img src="/assets/images/box-item/box (3).png" alt="" />
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
                                            <h6 className={isActive.key == 1 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(1)}>1. What is a loot box platform?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                                                <p>A loot box platform is an online service or marketplace where users can purchase virtual loot boxes containing randomized virtual items or rewards for use in video games or other digital experiences.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 2 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(2)}>2. How do loot boxes work?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                                <p>Loot boxes typically work by allowing users to purchase or earn virtual boxes containing random items of varying rarity. Users can then open these boxes to reveal the contents, which may include in-game items, cosmetics, or other virtual rewards.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 3 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(3)}>3. Are loot boxes considered gambling?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>
                                                <p>The classification of loot boxes as gambling is a topic of debate and regulation varies by jurisdiction. Some consider loot boxes to be a form of gambling due to their randomized nature and potential for real-money investment, while others argue that they are closer to collectible card games or blind-box toys.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 4 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(4)}>4. What types of items can I find in loot boxes?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>
                                                <p>Loot boxes can contain a wide variety of items, including in-game currency, character skins, weapons, emotes, and other virtual cosmetics or enhancements. The specific items available may vary depending on the game or platform.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle">
                                            <h6 className={isActive.key == 5 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(5)}>5. Are loot box contents predetermined or truly random?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 5 ? "block" : "none"}` }}>
                                                <p>The randomness of loot box contents varies depending on the platform and implementation. While some platforms may use true randomization algorithms, others may predetermine the contents of loot boxes before they are opened.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="flat-accordion2">
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 6 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(6)}>6. Can I trade or sell items obtained from loot boxes?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 6 ? "block" : "none"}` }}>
                                                <p>Whether or not you can trade or sell items obtained from loot boxes depends on the platform and the terms of service. Some platforms allow for trading or selling of virtual items, while others restrict or prohibit such activities.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 7 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(7)}>7. Are loot box purchases regulated to protect consumers?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 7 ? "block" : "none"}` }}>
                                                <p>Regulations regarding loot box purchases vary by country and region. Some jurisdictions have implemented regulations to protect consumers from potential harm associated with loot box mechanics, such as age restrictions or disclosure requirements.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 8 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(8)}>8. How does pricing for loot boxes work?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 8 ? "block" : "none"}` }}>
                                                <p>Pricing for loot boxes can vary widely depending on factors such as the rarity of items contained within, the perceived value of the contents, and the platform's pricing strategy. Some platforms offer loot boxes for purchase with real currency, while others may allow users to earn them through gameplay or other means.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 9 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(9)}>9. Are there limits to how many loot boxes I can purchase?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 9 ? "block" : "none"}` }}>
                                                <p>Some platforms may impose limits on the number of loot boxes users can purchase within a certain time period. These limits may be in place to prevent excessive spending or to comply with regulations aimed at protecting consumers from harm.</p>
                                            </div>
                                        </div>
                                        <div data-wow-delay="0s" className="wow fadeInUp flat-toggle2">
                                            <h6 className={isActive.key == 10 ? "toggle-title active" : "toggle-title"} onClick={() => handleToggle(10)}>10. How can I ensure fairness and transparency when using loot box platforms?</h6>
                                            <div className="toggle-content" style={{ display: `${isActive.key == 10 ? "block" : "none"}` }}>
                                                <p>Transparency and fairness are important considerations for loot box platforms. Users should look for platforms that provide clear information about the odds of obtaining specific items, as well as policies regarding refunds, trading, and dispute resolution.</p>
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
