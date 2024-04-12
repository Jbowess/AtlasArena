
import Layout from "@/components/layout/Layout"
import { Menu } from '@headlessui/react'
import Link from "next/link"
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 6,
    observer: true,
    grabCursor: true,
    observeParents: true,
    spaceBetween: 30,
    autoplay: {
        delay: 3700,
        disableOnInteraction: false
    },
    navigation: {
        clickable: true,
        nextEl: '.seller-next',
        prevEl: '.seller-prev'
    },
    breakpoints: {
        500: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: 4
        },
        768: {
            slidesPerView: 5
        },
        1070: {
            slidesPerView: 6
        }
    }
}

const swiperOptions2 = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 4,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    navigation: {
        clickable: true,
        nextEl: '.slider-next',
        prevEl: '.slider-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
}


const currentTime = new Date()

export default function Home() {
    
    const [isBidModal, setBidModal] = useState(false)
    const handleBidModal = () => setBidModal(!isBidModal)
    const [saleEnds, setSaleEnds] = useState(null);

    useEffect(() => {
      // Calculate the future date and time
      const currentDate = new Date();
      const futureDate = new Date();
      futureDate.setDate(currentDate.getDate() + 2);
      futureDate.setHours(21, 0, 0, 0); // Set time to 9 PM
  
      // Format the future date and time
      const options = { weekday: 'short', month: 'short', day: 'numeric', hour: 'numeric',  };
      const formattedDate = futureDate.toLocaleDateString('en-US', options);
  
      // Set the formatted date to state
      setSaleEnds(formattedDate);
  
      // Update the countdown every second
      const intervalId = setInterval(() => {
        const currentTime = new Date();
        if (currentTime >= futureDate) {
          // Sale has ended
          setSaleEnds('Sale has ended');
          clearInterval(intervalId);
        }
      }, 1000);


  
      // Clear the interval on component unmount
      return () => clearInterval(intervalId);
    }, []);
    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <div>
                <div className="tf-section-2 product-detail">
                        <div className="themesflat-container">
                            <div className="row">
                                <div data-wow-delay="0s" className="wow fadeInLeft col-md-6">
                                    <div className="tf-card-box style-5 mb-0">
                                        <div className="card-media mb-0">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/flappybird.avif" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div data-wow-delay="0s" className="wow fadeInRight infor-product">
                                        <div className="text">Atlas Arena <span className="icon-tick"><span className="path1" /><span className="path2" /></span></div>
                                        <div className="menu_card">
                                        </div>
                                        <h2>Flappy Bird</h2>
                                        <div className="author flex items-center mb-30">
                                            <div className="avatar">
                                                <img src="/assets/images/avatar/avatar-box-05.jpg" alt="Image" />
                                            </div>
                                            <div className="info">
                                                <span>Top Champion:</span>
                                                <h6><Link href="/author01">#1 Marvin McKinney</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="meta mb-20">
                                            <div className="meta-item favorites">
                                                <i className="icon-heart" />1st Tier
                                            </div>
                                        </div>
                                    </div>

                                    <div data-wow-delay="0s" className="wow fadeInRight product-item time-sales">
                                    <h6>Game Objective</h6>
                                        <div className="content">
                                        <div className="text-bold">Reach Score of 20</div>
                                        </div>
                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInRight product-item time-sales">
                                    <h6>How To Play</h6>
                                        <div className="content">
                                        <div className="text-bold">Press Mouse to jump</div>
                                    </div>
                                 </div>
                                </div>
                            </div>    
                            <div data-wow-delay="0s" className="wow fadeInRight product-item time-sales">
                                <div className="content">
                                    <div className="flex justify-between2">
                                        <Link href="#" className="tf-button style-1 h50 w216">Claim Loot<i className="icon-arrow-up-right2" /></Link>        
                                            <div className="tf-author-box text-center">
                                                <div className="author-avatar ">
                                                    <img src="/assets/images/avatar/avatar-01.png" alt="" className="avatar" />
                                                </div>
                                                <div className="author-infor ">
                                                    <h5><Link href="/author-2">Razer Mouse</Link></h5>
                                                    <h6 className="price gem style-1"><i className="icon-gem" />$89.99</h6>
                                                </div>
                                            </div>                                        
                                        <Link href="#" className="tf-button style-1 h50 w216">Play Now<i className="icon-arrow-up-right2" /></Link>
                                    </div>
                                </div>
                            </div>                                
                        </div>
                    </div>

                </div>
                </Layout>

        </>
    )
}