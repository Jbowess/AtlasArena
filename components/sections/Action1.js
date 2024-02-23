

import Link from "next/link"
import SignUpForm from "./SignUpForm"
import { useState } from "react"

export default function Action1() {

    const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

    const openSignUpModal = () => {
      setIsSignUpModalOpen(true);
    };
  
    const closeSignUpModal = () => {
      setIsSignUpModalOpen(false);
    };

    return (
        <>
                    <div className="tf-section-2">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="widget-income">
                                        <div className="title">Start Earning Real-Life Rewards Today</div>
                                        <p>Get started with the highest rewarding and fair loot box platform now.</p>
                                        <button onClick={openSignUpModal} href="#" className="tf-button style-1 h50 w190">Get started<i className="icon-arrow-up-right2" /></button>
                                        <div className="image">
                                            <img className="icon-1" src="/assets/images/item-background/item11.png" alt="" />
                                            <img className="icon-2" src="/assets/images/item-background/item12.png" alt="" />
                                            <img className="icon-3" src="/assets/images/item-background/item13.png" alt="" />
                                            <img className="icon-4" src="/assets/images/item-background/item14.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {isSignUpModalOpen && <SignUpForm onClose={closeSignUpModal} />}
                    </div>

        </>
    )
}
