import Link from "next/link"
import FeaturedSlider1 from "../slider/FeaturedSlider1"

export default function FeaturedItem1() {
    return (
        <>
            <div className="tf-section featured-item style-bottom">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section pb-20">
                                <h2 className="tf-title">Unwrapping Your Delivered Triumphs!</h2>
                                <p className="header-text">Ready to flaunt your victories? Tag us on Instagram or Twitter when your loot arrives for a chance to be showcased in our arena!</p>
                                {/* <Link href="/explore-3">Discover more <i className="icon-arrow-right2" /></Link> */}
                            </div>
                        </div>
                        <div className="col-md-12">
                            <FeaturedSlider1 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
