import BidModal from "@/components/elements/BidModal"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SignUpForm from "/components/sections/SignUpForm.js"
import { useEffect, useRef } from 'react';


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 3,
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

const swiperOptions2 = {
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
            slidesPerView: 6
        },
        1024: {
            slidesPerView: 6
        }
    }
}

import { useState } from "react"
export default function Home() {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(storedLoginStatus);
      }, []); // Run once on component mount to initialize isLoggedIn state

    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const openSignUpModal = () => {
      setIsSignUpModalOpen(true);
    };
  
    const closeSignUpModal = () => {
      setIsSignUpModalOpen(false);
    };


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
                            <div className="heading-section">
                                <div className="col-12 pages-title">
                                    <div className="content">
                                        <h1 data-wow-delay="0s" className="wow fadeInUp">Premium Battle Pass</h1>
                                    </div>
                                    <div className="icon-background">
                                        <img className="absolute item1" src="/assets/images/item-background/item11.png" alt="" />
                                        <img className="absolute item2" src="/assets/images/item-background/item10.png" alt="" />
                                        <img className="absolute item3" src="/assets/images/item-background/item12.png" alt="" />
                                        <img className="absolute item4" src="/assets/images/item-background/item13.png" alt="" />
                                    </div>                                    
                                </div>
                        </div>
                            <div className="row">
                                <div className="col-12 pages-title">                            

                                    <div className="relative">
                                        <Swiper {...swiperOptions2} className="swiper-container carousel3-type2" onClick={openSignUpModal}>
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-5">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                            <img src="/assets/images/box-item/box (1).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                        <a onClick={openSignUpModal} href="#" className="tf-button"><span>Claim</span></a>
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
                                                        <a onClick={openSignUpModal} href="#" className="tf-button"><span>Claim</span></a>
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
                                                        <a onClick={openSignUpModal} href="#" className="tf-button"><span>Claim</span></a>
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
                                                        <a onClick={openSignUpModal} href="#" className="tf-button"><span>Claim</span></a>
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
                                                        <a onClick={openSignUpModal} href="#" className="tf-button"><span>Claim</span></a>
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
                                                            <a onClick={openSignUpModal} href="#" className="tf-button"><span>Claim</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-5">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                            <img src="/assets/images/box-item/box (7).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={openSignUpModal} href="#" className="tf-button"><span>Claim</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-5">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                            <img src="/assets/images/box-item/box (8).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={openSignUpModal} href="#" className="tf-button"><span>Claim</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
                                    </div>
                                </div>

                                <div id='account-bar2'>
                                    <div id='xp-bar2'>
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
                                <div id='account-bar2'>
                                    <div id='xp-bar2'>
                                        <div id='account-bar-level2-left'>LVL 18</div>
                                        <div id='account-bar-rank2'>Atlas Champion Rank</div>
                                        <div id='account-bar-level2-right'>LVL 19</div>
                                        <div id='xp-bar-fill3'>
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
                                    <button onClick={openSignUpModal} style={{ marginBottom: '20px' }}>Buy Premium Battle Pass</button>
                                    <button onClick={openSignUpModal} style={{ marginBottom: '20px' }}>Buy Atlas Experience</button>

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
                                    <h3 style={{ marginBottom: '-20px', marginTop: '10px' }}>Free Atlas Capsules</h3>
                                </div>
                            <div className="row">
                                <div className="col-12 pages-title">
                                    <div className="content">
                                  </div>
                                    <div className="relative">
                                        <Swiper {...swiperOptions} className="swiper-container carousel3-type2">
                                            <div className="swiper-wrapper">
                                                <SwiperSlide>
                                                    <div className="tf-card-box style-6">
                                                        <div className="card-media">
                                                            <Link href="#">
                                                            <img src="/assets/images/box-item/box (1).png" alt="" />
                                                            </Link>
                                                        </div>
                                                        <div className="button-place-bid">
                                                            <a onClick={openSignUpModal} href="#" className="tf-button"><span>Open</span></a>
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
                                                        <a onClick={openSignUpModal} href="#" className="tf-button"><span>Open</span></a>
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
                                                        <a onClick={openSignUpModal} href="#" className="tf-button"><span>Open</span></a>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            </div>
                                        </Swiper>
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
                                        <div className="title">Start Earning Real-Life Rewards Today</div>
                                        <p>Get started with the highest rewarding and fair loot box platform now.</p>
                                        <button onClick={openSignUpModal} href="#" className="tf-button style-1 h50 w190">Get started<i className="icon-arrow-up-right2" /></button>
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
                {isSignUpModalOpen && <SignUpForm onClose={closeSignUpModal} />}

            </Layout>
        </>
    )
}