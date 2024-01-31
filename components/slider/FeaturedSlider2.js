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
                                <img src="/assets/images/box-item/card-item-16.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Dayco serpentine belt</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Leslie Alexander</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/card-item-10.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Dayco serpentine belt</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Leslie Alexander</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/card-item-11.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Dayco serpentine belt</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Leslie Alexander</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/card-item-12.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Dayco serpentine belt</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Leslie Alexander</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/card-item-13.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Dayco serpentine belt</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar-box-05.jpg" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Leslie Alexander</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/card-item-16.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Dayco serpentine belt</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar-box-01.jpg" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Leslie Alexander</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/card-item-10.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Dayco serpentine belt</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar-box-02.jpg" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Leslie Alexander</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/card-item-11.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Dayco serpentine belt</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar-box-03.jpg" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Leslie Alexander</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/card-item-12.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Dayco serpentine belt</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar-box-04.jpg" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Leslie Alexander</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide onClick={openSignUpModal}>
                    <div className="tf-card-box style-1">
                        <div className="card-media">
                            <Link href="#">
                                <img src="/assets/images/box-item/card-item-13.jpg" alt="" />
                            </Link>
                            <span className="wishlist-button icon-heart" />
                            <div className="featured-countdown">
                                <Countdown endDateTime={currentTime.setDate(currentTime.getDate() + 2)} />
                            </div>
                            <div className="button-place-bid">
                                <a onClick={openSignUpModal} href="#" className="tf-button"><span>Join Now</span></a>
                            </div>
                        </div>
                        <h5 className="name">Dayco serpentine belt</h5>
                        <div className="author flex items-center">
                            <div className="avatar">
                                <img src="/assets/images/avatar/avatar-box-05.jpg" alt="Image" />
                            </div>
                            <div className="info">
                                 <h6>Leslie Alexander</h6>
                            </div>
                        </div>
                        <div className="divider" />
                        <div className="meta-info flex items-center justify-between">
                            <span className="text-bid"> Value</span>
                            <h6 className="price gem"><i className="icon-gem" />0,34</h6>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
            {isSignUpModalOpen && <SignUpForm onClose={closeSignUpModal} />}
        </>
    )
}
