import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import SignUpForm from "./SignUpForm"


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    loop: false,
    spaceBetween: 28,
    slidesPerView: 'auto',
    centeredSlides: false,
    observer: true,
    observeParents: true,
    grabCursor: true,
    breakpoints: {
        0: { 
            spaceBetween: 20
        },
        480: { 
            spaceBetween: 20
        },
        767: { 
            spaceBetween: 28
        },
        992: {
            spaceBetween: 28
        }
    }
}
const swiperOptions2 = {
    loop: false,
                  spaceBetween: 28,
                  slidesPerView: 'auto',
                  centeredSlides: false,
                  observer: true,
                  observeParents: true,
                  grabCursor: true,
                  breakpoints: {
                      0: { 
                          spaceBetween: 20
                      },
                      480: { 
                          spaceBetween: 20
                      },
                      767: { 
                          spaceBetween: 28
                      },
                      992: {
                          spaceBetween: 28
                      }
                  }
}

import Link from "next/link"
export default function TopCollector1() {
    return (
        <>
            <div className="tf-section top-collector">
                <div className="top-collector-wrapper">
                    <div className="bg-text">
                        <h2>Top Collector</h2>
                    </div>
                    <div className="heading-section ">
                        <h2 className="tf-title">Atlas Arena Featured By</h2>
                    </div>
                    <Swiper {...swiperOptions} className="featured swiper-container autoslider1">
                        <div className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-01.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Game Informer</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-02.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">PC Gamer</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-03.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Global Gaming Business Magazine</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-04.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">iGaming Business</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-01.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Polygon</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-02.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Casino Journal</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-03.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Gambling Insider</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-04.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">G3 Magazine</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-01.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Casino Life & Business Magazine</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-02.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Inc. Magazine</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-03.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Entrepreneur</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-04.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Fast Company</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                    <Swiper {...swiperOptions2} className="featured mt-17 swiper-container autoslider2" >
                        <div className="swiper-wrapper">
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-01.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Wired</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-02.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">AffiliaXe</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-03.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">FeedFront Magazine</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-04.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">PerformanceIN</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-01.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Affiliate Marketing Magazine</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-02.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Nakamigos</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-03.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">InformationWeek</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-04.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">TechCrunch</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="tf-author-box style-1 text-center flex">
                                    <div className="author-avatar ">
                                        <img src="/assets/images/avatar/avatar-small-01.png" alt="" className="avatar" />
                                    </div>
                                    <div className="author-infor ">
                                        <h5><Link href="/author-2">Nakamigos</Link></h5>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                    </Swiper>
                </div>
            </div>

        </>
    )
}
