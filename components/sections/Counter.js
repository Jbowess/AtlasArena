

import dynamic from 'next/dynamic'
import Link from "next/link"

const CounterUp = dynamic(() => import('../elements/CounterUp'), {
    ssr: false,
})

export default function Counter() {
    return (
        <>
            <div className="tf-section counter">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <div className="counter__body">
                                <div className="counter">
                                    <div className="number-counter">
                                        <span className="number" data-speed={1000} data-to={12} data-inviewport="yes">
                                            <CounterUp count={12} time={1} />
                                        </span>K+
                                    </div>
                                    <h6 className="title">Live</h6>
                                </div>
                                <div className="counter">
                                    <div className="number-counter">
                                        <span className="number" data-speed={1000} data-to={117} data-inviewport="yes">
                                        <CounterUp count={117} time={1} />
                                        </span>K+
                                    </div>
                                    <h6 className="title">Atlas Champions</h6>
                                </div>
                                <div className="counter">
                                    <div className="number-counter">
                                        <span className="number" data-speed={1000} data-to={478575} data-inviewport="yes">
                                        <CounterUp count={478575} time={1} />
                                        </span>
                                    </div>
                                    <h6 className="title">Loot Boxes Opened</h6>
                                </div>
                            </div>
                            <div className="box-icon-wrap">
                                
                                <div className="tf-box-icon style-1 relative m-0">
                                    <div className="image">
                                        <p>Step 1</p>
                                    </div>
                                    <h4 className="heading"><Link href="/contact-us">Sign Up To Atlas</Link></h4>
                                    <p className="content">Join Atlas today and be rewarded greatly for your efforts.</p>
                                </div>
                                <div className="tf-box-icon style-1 relative m-0">
                                    <div className="image">
                                        <p>Step 2</p>
                                    </div>
                                    <h4 className="heading"><Link href="/contact-us">Select a Loot Box</Link></h4>
                                    <p className="content">Each loot box holds the potential for extraordinary rewards. Triump awaits</p>
                                </div>
                                <div className="tf-box-icon style-1 relative m-0">
                                    <div className="image">
                                        <p>Step 3</p>
                                    </div>
                                    <h4 className="heading"><Link href="/contact-us">Consider Options</Link></h4>
                                    <p className="content">Immerse yourself in the thrill of the unboxing experience. With each opening, you'll be greeted with anticipation as you unveil the secrets hidden within.</p>
                                </div>
                                <div className="tf-box-icon style-1 relative m-0">
                                    <div className="image">
                                        <p>Step 4</p>
                                    </div>
                                    <h4 className="heading"><Link href="/contact-us">Recieve Your Rewards</Link></h4>
                                    <p className="content">Outshine Atlas, grab exclusive rewards! Open your loot box, and prove you're the best.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
