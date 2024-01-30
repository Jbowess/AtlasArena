import BarChart from "@/components/elements/BarChart"
import Countdown from "@/components/elements/Countdown"
import Layout from "@/components/layout/Layout"
import FeaturedSlider1 from "@/components/slider/FeaturedSlider1"
import TitileSlider1 from "@/components/slider/TitileSlider1"
import { Menu } from '@headlessui/react'
import Link from "next/link"
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 2,
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
                                                <img src="/assets/images/box-item/product-detail-01.jpg" alt="" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div data-wow-delay="0s" className="wow fadeInRight infor-product">
                                        <div className="text">Atlas Arena <span className="icon-tick"><span className="path1" /><span className="path2" /></span></div>
                                        <div className="menu_card">
                                            <Menu as="div" className="dropdown">
                                                <div className="icon">
                                                    <Menu.Button as="a" className="btn-link" aria-expanded="false">
                                                        <i className="icon-link-1" />
                                                    </Menu.Button>
                                                    <Menu.Items as="div" className="dropdown-menu show d-block">
                                                        <Link className="dropdown-item" href="#"><i className="icon-link" />Copy link</Link>
                                                        <Link className="dropdown-item" href="#"><i className="icon-facebook" />Share on facebook</Link>
                                                        <Link className="dropdown-item mb-0" href="#"><i className="icon-twitter" />Share on twitter</Link>
                                                    </Menu.Items>
                                                </div>
                                            </Menu>
                                            <Menu as="div" className="dropdown">
                                                <div className="icon">
                                                    <Menu.Button as="a" className="btn-link" aria-expanded="false">
                                                        <i className="icon-content" />
                                                    </Menu.Button>
                                                    <Menu.Items as="div" className="dropdown-menu show d-block">
                                                        <Link className="dropdown-item" href="#"><i className="icon-refresh" />Refresh metadata</Link>
                                                        <Link className="dropdown-item mb-0" href="#"><i className="icon-report" />Report</Link>
                                                    </Menu.Items>
                                                </div>
                                            </Menu>
                                        </div>
                                        <h2>Razer Budget Box</h2>
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
                                            <div className="meta-item rating">
                                                <i className="icon-link-2" />Top #2 trending
                                            </div>
                                            <div className="meta-item favorites">
                                                <i className="icon-heart" />10 Tiers
                                            </div>
                                        </div>
                                    </div>
                                    <div data-wow-delay="0s" className="wow fadeInRight product-item time-sales">
                                    <h6><i className="icon-clock" />Sale ends {saleEnds}</h6>
                                        <div className="content">
                                            <div className="text">Entry Price</div>
                                            <div className="flex justify-between">
                                                <p>$7.99 <span>$15.99</span></p>
                                                <Link href="#" className="tf-button style-1 h50 w216">Enter Arena<i className="icon-arrow-up-right2" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>



                                <div className="tf-section seller ">
                                    <div className="themesflat-container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="heading-section">
                                                    <h2 className="tf-title pb-30">Live Arena Wins
                                                    </h2>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <Swiper {...swiperOptions} className="swiper-container seller seller-slider2">
                                                    <div className="swiper-wrapper">
                                                        <SwiperSlide>
                                                            <div className="tf-author-box text-center">
                                                                <div className="author-avatar ">
                                                                    <img src="/assets/images/avatar/avatar-01.png" alt="" className="avatar" />
                                                                </div>
                                                                <div className="author-infor ">
                                                                    <h5><Link href="/author-2">Razer Laptop</Link></h5>
                                                                    <h6 className="price gem style-1"><i className="icon-gem" />$5000</h6>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="tf-author-box text-center">
                                                                <div className="author-avatar ">
                                                                    <img src="/assets/images/avatar/avatar-02.png" alt="" className="avatar" />
                                                                </div>
                                                                <div className="author-infor ">
                                                                    <h5><Link href="/author-2">Robertson</Link></h5>
                                                                    <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="tf-author-box text-center">
                                                                <div className="author-avatar ">
                                                                    <img src="/assets/images/avatar/avatar-03.png" alt="" className="avatar" />
                                                                </div>
                                                                <div className="author-infor ">
                                                                    <h5><Link href="/author-2">Midjourney NFTs</Link></h5>
                                                                    <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="tf-author-box text-center">
                                                                <div className="author-avatar ">
                                                                    <img src="/assets/images/avatar/avatar-04.png" alt="" className="avatar" />
                                                                </div>
                                                                <div className="author-infor ">
                                                                    <h5><Link href="/author-2">Kristin Watson</Link></h5>
                                                                    <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="tf-author-box text-center">
                                                                <div className="author-avatar ">
                                                                    <img src="/assets/images/avatar/avatar-05.png" alt="" className="avatar" />
                                                                </div>
                                                                <div className="author-infor ">
                                                                    <h5><Link href="/author-2">Dianne Russell</Link></h5>
                                                                    <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="tf-author-box text-center">
                                                                <div className="author-avatar ">
                                                                    <img src="/assets/images/avatar/avatar-06.png" alt="" className="avatar" />
                                                                </div>
                                                                <div className="author-infor ">
                                                                    <h5><Link href="/author-2">Jenny Wilson</Link></h5>
                                                                    <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="tf-author-box text-center">
                                                                <div className="author-avatar ">
                                                                    <img src="/assets/images/avatar/avatar-02.png" alt="" className="avatar" />
                                                                </div>
                                                                <div className="author-infor ">
                                                                    <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                                                    <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                        <SwiperSlide>
                                                            <div className="tf-author-box text-center">
                                                                <div className="author-avatar ">
                                                                    <img src="/assets/images/avatar/avatar-01.png" alt="" className="avatar" />
                                                                </div>
                                                                <div className="author-infor ">
                                                                    <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                                                    <h6 className="price gem style-1"><i className="icon-gem" />7,080.95</h6>
                                                                </div>
                                                            </div>
                                                        </SwiperSlide>
                                                    </div>
                                                </Swiper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                
                                <div className="trait-item">
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
                                            </Link>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Enter Arena</span></a>
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Razer Laptop</Link></h5>
                                        <div className="author flex items-center">
                                            <div className="info">
                                                <h6><Link href="/author-2">Tier 10</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="meta-info flex items-center justify-between">
                                            <span className="text-bid">Value:</span>
                                            <h6 className="price gem"><i className="icon-gem" />$5000</h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="trait-item">
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
                                            </Link>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Enter Arena</span></a>
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Razer Laptop</Link></h5>
                                        <div className="author flex items-center">
                                            <div className="info">
                                                <h6><Link href="/author-2">Tier 10</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="meta-info flex items-center justify-between">
                                            <span className="text-bid">Value:</span>
                                            <h6 className="price gem"><i className="icon-gem" />$5000</h6>
                                        </div>
                                    </div>
                                </div>                                <div className="trait-item">
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
                                            </Link>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Enter Arena</span></a>
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Razer Laptop</Link></h5>
                                        <div className="author flex items-center">
                                            <div className="info">
                                                <h6><Link href="/author-2">Tier 10</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="meta-info flex items-center justify-between">
                                            <span className="text-bid">Value:</span>
                                            <h6 className="price gem"><i className="icon-gem" />$5000</h6>
                                        </div>
                                    </div>
                                </div>                                <div className="trait-item">
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
                                            </Link>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Enter Arena</span></a>
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Razer Laptop</Link></h5>
                                        <div className="author flex items-center">
                                            <div className="info">
                                                <h6><Link href="/author-2">Tier 10</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="meta-info flex items-center justify-between">
                                            <span className="text-bid">Value:</span>
                                            <h6 className="price gem"><i className="icon-gem" />$5000</h6>
                                        </div>
                                    </div>
                                </div>                                <div className="trait-item">
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
                                            </Link>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Enter Arena</span></a>
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Razer Laptop</Link></h5>
                                        <div className="author flex items-center">
                                            <div className="info">
                                                <h6><Link href="/author-2">Tier 10</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="meta-info flex items-center justify-between">
                                            <span className="text-bid">Value:</span>
                                            <h6 className="price gem"><i className="icon-gem" />$5000</h6>
                                        </div>
                                    </div>
                                </div>                                <div className="trait-item">
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
                                            </Link>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Enter Arena</span></a>
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Razer Laptop</Link></h5>
                                        <div className="author flex items-center">
                                            <div className="info">
                                                <h6><Link href="/author-2">Tier 10</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="meta-info flex items-center justify-between">
                                            <span className="text-bid">Value:</span>
                                            <h6 className="price gem"><i className="icon-gem" />$5000</h6>
                                        </div>
                                    </div>
                                </div>                                <div className="trait-item">
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
                                            </Link>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Enter Arena</span></a>
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Razer Laptop</Link></h5>
                                        <div className="author flex items-center">
                                            <div className="info">
                                                <h6><Link href="/author-2">Tier 10</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="meta-info flex items-center justify-between">
                                            <span className="text-bid">Value:</span>
                                            <h6 className="price gem"><i className="icon-gem" />$5000</h6>
                                        </div>
                                    </div>
                                </div>                                <div className="trait-item">
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
                                            </Link>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Enter Arena</span></a>
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Razer Laptop</Link></h5>
                                        <div className="author flex items-center">
                                            <div className="info">
                                                <h6><Link href="/author-2">Tier 10</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="meta-info flex items-center justify-between">
                                            <span className="text-bid">Value:</span>
                                            <h6 className="price gem"><i className="icon-gem" />$5000</h6>
                                        </div>
                                    </div>
                                </div>                                <div className="trait-item">
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
                                            </Link>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Enter Arena</span></a>
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Razer Laptop</Link></h5>
                                        <div className="author flex items-center">
                                            <div className="info">
                                                <h6><Link href="/author-2">Tier 10</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="meta-info flex items-center justify-between">
                                            <span className="text-bid">Value:</span>
                                            <h6 className="price gem"><i className="icon-gem" />$5000</h6>
                                        </div>
                                    </div>
                                </div>                                <div className="trait-item">
                                    <div className="tf-card-box">
                                        <div className="card-media">
                                            <Link href="#">
                                                <img src="/assets/images/box-item/card-item-35.jpg" alt="" />
                                            </Link>
                                            <div className="button-place-bid">
                                                <a onClick={handleBidModal} href="#" className="tf-button"><span>Enter Arena</span></a>
                                            </div>
                                        </div>
                                        <h5 className="name"><Link href="#">Razer Laptop</Link></h5>
                                        <div className="author flex items-center">
                                            <div className="info">
                                                <h6><Link href="/author-2">Tier 10</Link> </h6>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="meta-info flex items-center justify-between">
                                            <span className="text-bid">Value:</span>
                                            <h6 className="price gem"><i className="icon-gem" />$5000</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    
                    <div className="tf-section-2 featured-item style-bottom">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="heading-section pb-20">
                                        <h2 className="tf-title ">Recommended Boxes</h2>
                                        <Link href="/explore-3" >Discover more <i className="icon-arrow-right2" /></Link>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <FeaturedSlider1 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}