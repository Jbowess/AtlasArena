import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    slidesPerView: 2,
    observer: true,
    grabCursor: true,
    observeParents: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2700,
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


import Link from "next/link"
import HoverDropdown from "../elements/HoverDropdown"
export default function Seller1() {
    return (
        <>

            <div className="tf-section seller ">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section">
                                <h2 className="tf-title pb-30">Highest Earning Champions in Last
                                    <HoverDropdown />
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <Swiper {...swiperOptions} className="swiper-container seller seller-slider2">
                                <div className="swiper-wrapper">
                                    <SwiperSlide>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar (8).png" alt="" className="avatar" />
                                                <div className="number">1</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />8,080.95</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar (6).png" alt="" className="avatar" />
                                                <div className="number">2</div>
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
                                                <img src="/assets/images/avatar/avatar (8).png" alt="" className="avatar" />
                                                <div className="number">3</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Midjourney NFTs</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />2,080.95</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar (6).png" alt="" className="avatar" />
                                                <div className="number">4</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Kristin Watson</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />3,080.95</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar (8).png" alt="" className="avatar" />
                                                <div className="number">5</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Dianne Russell</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />17,080.95</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar (6).png" alt="" className="avatar" />
                                                <div className="number">6</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Jenny Wilson</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />30,080.95</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar (6).png" alt="" className="avatar" />
                                                <div className="number">7</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />9,080.95</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="tf-author-box text-center">
                                            <div className="author-avatar ">
                                                <img src="/assets/images/avatar/avatar (8).png" alt="" className="avatar" />
                                                <div className="number">8</div>
                                            </div>
                                            <div className="author-infor ">
                                                <h5><Link href="/author-2">Courtney Henry</Link></h5>
                                                <h6 className="price gem style-1"><i className="icon-gem" />13,080.95</h6>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                            <div className="swiper-button-next seller-next over active" />
                            <div className="swiper-button-prev seller-prev over " />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
