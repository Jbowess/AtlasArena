import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SignUpForm from "components/sections/SignUpForm.js"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: true,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    spaceBetween: 30,
    centeredSlides: true,
    navigation: {
        clickable: true,
        nextEl: '.next-full',
        prevEl: '.prev-full'
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

import Countdown from '@/components/elements/Countdown'
import { useState } from "react"
import BidModal from "../elements/BidModal"
const currentTime = new Date()
export default function FeaturedSlider2() {

    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const openSignUpModal = () => {
      setIsSignUpModalOpen(true);
    };
  
    const closeSignUpModal = () => {
      setIsSignUpModalOpen(false);
    };
    return (
        <>
            {/* <Swiper {...swiperOptions} className="abc">
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper> */}


            <Swiper {...swiperOptions} className="featured pt-10 swiper-container carouselfull">
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="">
                                <img src="/assets/images/box-item/box (1).png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Gucci Box</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar (1).png" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Alex Bishop</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />300</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/box (2).png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Gaming Box</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar (2).png" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Kingsley Turnball</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />130</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/box (3).png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Supreme Box</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar (3).png" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>James Roth</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />200</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/box (4).png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Tech Box</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar (4).png" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Mary August</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />50</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/box (5).png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Budget Tech Box</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar (5).png" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Wiley Smith</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />20</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/box (6).png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Apple Box</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar (6).png" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Tim Warner</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />400</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/box (7).png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Fashion Box</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar (7).png" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Yasmin Davies</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />200</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/box (8).png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Car Box</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar (7).png" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Will Mayfair</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />10</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/box (9).png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Tech Box</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar (5).png" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Mao Young</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />250</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/box (10).png" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Designer Box</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar (5).png" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Matt Row</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />450s</h6>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            {isSignUpModalOpen && <SignUpForm onClose={closeSignUpModal} />}
        </>
    )
}
