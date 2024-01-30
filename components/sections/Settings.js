import Link from 'next/link'
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'

export default function Settings() {
    return (
        <>
            <div className="wrapper-content">
                <div className="inner-content">
                <div className="action__body w-full mb-40">
                        <div className="tf-tsparticles">
                            <div id="tsparticles1" data-color="#161616" data-line="#000" />
                        </div>
                            <div className="flat-button flex">
                        </div>
                        <div className="bg-home7">
                            <AutoSlider1 />
                            <AutoSlider2 />
                            <AutoSlider1 />
                        </div>
                    </div>
                    <div className="heading-section">
                        <h2 className="tf-title pb-30">Settings</h2>
                    </div>
                    <div className="widget-edit mb-30 avatar">
                        <div className="title">
                            <h4>Edit your champion</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form action="#">
                            <div className="uploadfile flex">
                                <img src="assets/images/avatar/avatar-07.png" alt="" />
                                <div>
                                    <h6>Upload Avatar”</h6>
                                    <label>
                                        <input type="file" name="file" />
                                        <span className="text filename"></span>
                                    </label>
                                    <p className="text">JPEG 100x100</p>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="widget-edit mb-30 profile">
                        <div className="title">
                            <h4>Edit your profile</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form id="commentform" className="comment-form" noValidate="novalidate">
                            <div className="flex gap30">
                                <fieldset className="name">
                                    <label>Your name*</label>
                                    <input type="text" id="name" placeholder="Enter your name" name="name" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <fieldset className="email">
                                    <label>Email address*</label>
                                    <input type="email" id="email" placeholder="Your email" name="email" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <fieldset className="tel">
                                    <label>Phone number</label>
                                    <input type="tel" id="tel" placeholder="Your phone" name="tel" tabIndex={2} aria-required="true" required />
                                </fieldset>
                            </div>
                            <div className="flex gap30">
                                <fieldset className="name">
                                    <label>Country*</label>
                                    <input type="text" id="name" placeholder="Enter your country" name="name" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <fieldset className="curency">
                                    <label>Currency</label>
                                    <select className="select" name="curency" id="curency">
                                        <option>Us Dollar ($)</option>
                                        <option value="100$">100$</option>
                                        <option value="1000$">1000$</option>
                                        <option value="10000$">10000$</option>
                                    </select>
                                </fieldset>
                            </div>
                            <div className="flex gap30">
                            <fieldset className="name">
                                    <label>City*</label>
                                    <input type="text" id="name" placeholder="Enter your city" name="name" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <fieldset className="address">
                                    <label>Post Code*</label>
                                    <input type="text" id="address" placeholder="Enter your postcode" name="address" tabIndex={2} aria-required="true" required />
                                </fieldset>
                            </div>
                            <fieldset className="address">
                                <label>Address*</label>
                                <input type="text" id="address" placeholder="Enter your address" name="address" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <div className="btn-submit">
                                <button className="w242" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                    <div className="widget-edit mb-30 password">
                        <div className="title">
                            <h4>Change password</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form id="commentform" className="comment-form" noValidate="novalidate">

                            <fieldset className="password">
                                <label>Old password</label>
                                <input type="text" id="password" placeholder="Enter Old password" name="password" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <fieldset className="password">
                                <label>New password</label>
                                <input type="text" id="password" placeholder="Enter New password" name="password" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <fieldset className="password">
                                <label>Confirm password</label>
                                <input type="text" id="password" placeholder="Confirm password" name="password" tabIndex={2} aria-required="true" required />
                            </fieldset>
                            <div className="btn-submit">
                                <button className="w242" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                    <div className="widget-edit mb-30 setting">
                        <div className="title">
                            <h4>Notification settings</h4>
                            <i className="icon-keyboard_arrow_up" />
                        </div>
                        <form id="commentform" className="comment-form" noValidate="novalidate">
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Order confirmation</h6>
                                    <p>will be notified when order arrives</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" defaultChecked />
                            </div>
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>New Items Notification</h6>
                                    <p>Will be notified of new loot boxes arriving to atlas arena</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" />
                            </div>
                            <div className="notification-setting-item">
                                <div className="content">
                                    <h6>Email Notifications</h6>
                                    <p>Turn on email notification to get updates through email</p>
                                </div>
                                <input className="check" type="checkbox" defaultValue="checkbox" name="check" defaultChecked />
                            </div>

                            <div className="btn-submit">
                                <button className="w242" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>


                <div className="side-bar">
                    <div className="widget widget-recently">
                        <h5 className="title-widget">Most Victorious Wins</h5>
                        <div className="card-small-main">
                            <img src="assets/images/blog/sidebar-05.jpg" alt="" />
                            <div className="card-bottom">
                                <h5><Link href="#">Gucci Boxes</Link></h5>
                                <span className="date">16hr ago</span>
                            </div>
                        </div>
                        <div className="card-small">
                            <div className="author">
                                <img src="assets/images/blog/sidebar-06.jpg" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Propw</Link></h6>
                                    <p><Link href="#">@themes</Link></p>
                                </div>
                            </div>
                            <span className="date">Mon, 08 May </span>
                        </div>
                        <div className="card-small">
                            <div className="author">
                                <img src="assets/images/blog/sidebar-07.jpg" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Propw</Link></h6>
                                    <p><Link href="#">@themes</Link></p>
                                </div>
                            </div>
                            <span className="date">Mon, 08 May </span>
                        </div>
                        <div className="card-small">
                            <div className="author">
                                <img src="assets/images/blog/sidebar-08.jpg" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Propw</Link></h6>
                                    <p><Link href="#">@themes</Link></p>
                                </div>
                            </div>
                            <span className="date">Mon, 08 May </span>
                        </div>
                    </div>


                    <div className="widget widget-history">
                        <div className="flex items-center justify-between">
                            <h5 className="title-widget">Live Wins</h5>
                            <Link className="see-all" href="#">See all</Link>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Lorem NFT sold</Link></h6>
                                    <span><Link href="#">Sold at 1.32 ETH</Link></span>
                                </div>
                            </div>
                            <span className="time">Just now</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-02.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">New NFT uploaded</Link></h6>
                                    <span><Link href="#">By Marisol Pena</Link></span>
                                </div>
                            </div>
                            <span className="time">1hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-03.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">You followed a creator</Link></h6>
                                    <span><Link href="#">Jane Cooper</Link></span>
                                </div>
                            </div>
                            <span className="time">2hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-04.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">You placed a bid</Link></h6>
                                    <span><Link href="#">Whirl wind NFT</Link></span>
                                </div>
                            </div>
                            <span className="time">4hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">You followed a creator</Link></h6>
                                    <span><Link href="#">Courtney Henry</Link></span>
                                </div>
                            </div>
                            <span className="time">16hr ago</span>
                        </div>
                    </div>


                    <div className="widget widget-creators">
                        <div className="flex items-center justify-between">
                            <h5 className="title-widget">Top Champions</h5>
                            <Link className="see-all" href="#">See all</Link>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">1. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">2. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-02.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">3. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-03.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">4. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-04.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center">
                            <div className="order">5. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
