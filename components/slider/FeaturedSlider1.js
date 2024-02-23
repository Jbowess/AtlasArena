import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SignUpForm from "components/sections/SignUpForm.js"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 1,
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

import Countdown from '@/components/elements/Countdown'
import { useState } from "react"
import BidModal from "../elements/BidModal"
const currentTime = new Date()
export default function FeaturedSlider1() {
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

            <div className="featured pt-10 swiper-container carousel">
                <Swiper {...swiperOptions}>
                    <SwiperSlide>
                        <div className="tf-card-box style-4" onClick={openSignUpModal}>
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/testimonial (1).png" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tf-card-box style-4" onClick={openSignUpModal}>
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/testimonial (2).png" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tf-card-box style-4" onClick={openSignUpModal}>
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/testimonial (3).png" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tf-card-box style-4" onClick={openSignUpModal}>
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/testimonial (4).png" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tf-card-box style-4" onClick={openSignUpModal}>
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/testimonial (5).png" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tf-card-box style-4" onClick={openSignUpModal}>
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/testimonial (6).png" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tf-card-box style-4" onClick={openSignUpModal}>
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/testimonial (7).png" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                            </div>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tf-card-box style-4" onClick={openSignUpModal}>
                            <div className="card-media">
                                <Link href="#">
                                    <img src="/assets/images/box-item/testimonial (8).png" alt="" />
                                </Link>
                                <span className="wishlist-button icon-heart" />
                            </div>

                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination" />
                <div className="slider-next swiper-button-next" />
                <div className="slider-prev swiper-button-prev" />
            </div>
            {isSignUpModalOpen && <SignUpForm onClose={closeSignUpModal} />}
        </>
    )
}
