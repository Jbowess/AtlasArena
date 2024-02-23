import Link from "next/link"
import FeaturedSlider2 from "../slider/FeaturedSlider2"

export default function FeaturedItem2() {
    return (
        <>
            <div className="tf-section-6 featured-item style-bottom">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-section pb-20">
                                <h2 className="tf-title">Live Atlas Winners</h2> 
                                <p className="tf-subtitle">Witness the victories of our live unboxing champions, you' never know what great rewards you can recieve with Atlas Arena today!</p>
                                {/* <Link href="/explore-3" >Discover more <i className="icon-arrow-right2" /></Link> */}
                            </div>

                        </div>
                        <div className="col-md-12">
                            <FeaturedSlider2 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
