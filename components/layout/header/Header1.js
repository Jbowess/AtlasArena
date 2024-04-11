import Link from "next/link";
import { useState, useEffect } from 'react';
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import SignUpForm from "../../sections/SignUpForm"; 
import LoginForm from "../../sections/LoginForm";
import CheckoutModal from '@/components/sections/CheckoutModal'; // Update the path
import AddFundsModal from '@/components/sections/AddFundsModal'; // Import your AddFundsModal component
import { useRouter } from 'next/router';

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {

    const [isSidebar, setSidebar] = useState(false);
    const [showSignupForm, setShowSignupForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);
    const router = useRouter();
    const userData = router.query.userData ? JSON.parse(router.query.userData) : null;
    const [activeIndex, setActiveIndex] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isFundsModalOpen, setIsFundsModalOpen] = useState(false);
    const [accountBalance, setAccountBalance] = useState(0.00);
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isMobileSidebar, setMobileSidebar] = useState(false)
    const [isToggled, setToggled] = useState(false)
    const [isToggled2, setToggled2] = useState(false)
    const [isToggled3, setToggled3] = useState(false)

    const [cartItems, setCartItems] = useState([
        { name: 'Gucci Belt', price: '$100' },
        { name: 'Iphone Case', price: '$50' },
        { name: 'Airpods', price: '$310' },
        { name: 'Film Camera', price: '$30' },
        { name: 'Off-White Golden Shoes', price: '$510' },
        { name: 'Shoe Laces Rainbow', price: '$8' },
      ]);

    const handleMobileSidebar = () => setMobileSidebar(!isMobileSidebar)
    const handleSidebar = () => setSidebar(!isSidebar);
    const handleToggle = () => setToggled(!isToggled)
    const handleToggle2 = () => setToggled2(!isToggled2)


    const handleSignupButtonClick = (e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        setShowSignupForm(true); // Updated function name
        console.log("form clicked");
    };

    const handleCloseSignupForm = () => {
        setShowSignupForm(false); // Updated function name
    };

    const handleLoginButtonClick = (e) => {
        e.preventDefault(); // Prevent the default behavior of the link
        setShowLoginForm(true);
        console.log("form clicked")
    };

    const handleCloseLoginForm = () => {
        setShowLoginForm(false);
    };

    const handleLogin = () => {
        // Perform login actions (e.g., set state, redirect user)
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        // Handle logout logic
        setIsLoggedIn(false);
      };

    const handleLootBoxClick = (newIndex) => {
        // Update your state or perform any action with the new index here
        setActiveIndex(newIndex);
    };

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    const handleProceedToCheckout = () => {
        setIsModalOpen(true);
    };
    
  
    const handleCloseCheckout = () => {
        setIsModalOpen(false);
    };

    const addItemToCart = (cardData) => {
        setCartItems([...cartItems, cardData]);
      };

    const handleToggle3 = () => {
        console.log('Toggle Cart Clicked');
        setToggled3(!isToggled3);
        setIsCheckoutOpen(false); // Close modal when opening the cart
    }

    const handleOpenFundsModal = () => {
        setIsFundsModalOpen(true);
      };
    
      const handleCloseFundsModal = () => {
        setIsFundsModalOpen(false);
        // You may want to refresh the account balance or perform other actions here
      };

    // Calculations For Cart Costs
      // Additional fees
        const processingFee = 4.5;
        const shippingFee = 9;
        const taxAmount = 1.5;

    // Calculate the total cost dynamically based on cart items
    const totalCost = cartItems.reduce((acc, item) => {
        const itemPrice = parseFloat(item.price.replace('$', '')) || 0;
        return acc + itemPrice;
    }, 0);

      const grandTotal = processingFee + shippingFee + taxAmount;

    
    return (
        <>
            <header id="header_main" className={`header_1 header-fixed ${scroll ? "is-fixed is-small" : ""}`}>
                <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div id="site-header-inner">
                            <div className="wrap-box flex">
                                <div id="site-logo">
                                    <div id="site-logo-inner">
                                        <Link href="/" rel="home" className="main-logo">
                                            <img id="logo_header" src="/assets/images/logo/logo.png" data-retina="/assets/images/logo/logo.png" />
                                        </Link>
                                    </div>
                                </div>{/* logo */}
                                <div className="mobile-button" onClick={handleMobileMenu}>
                                    <span />
                                </div>{/* /.mobile-button */}
                                <nav id="main-nav" className="main-nav">
                                    <Menu />
                                </nav>{/* /#main-nav */}
                                <div className="flat-wallet flex">
                                {!isLoggedIn ? (
                                    <>
                                {/* Display login form when showLoginForm is true */}
                                    {showLoginForm && (
                                        <LoginForm
                                            onClose={handleCloseLoginForm}
                                            onLogin={handleLogin} // Pass handleLogin function
                                        />
                                    )}
                                    <div id="wallet-header">
                                        <Link href="/market" onClick={handleSignupButtonClick} className="tf-button style-1">
                                            <span>Sign up</span>
                                            <i className="icon-wa" />
                                        </Link>
                                    </div>
                                    <div id="wallet-header">
                                        <Link href="/market" onClick={handleLoginButtonClick} className="tf-button style-1">
                                            <span>Sign In</span>
                                            <i className="icon-wa" />
                                        </Link>
                                    </div>
                                    </>
                                ) : (
                                    <>                                
                                <div className="admin_active" id="header_admin">
                                <div className="popup-notification relative">
                                <button className="funds" onClick={handleOpenFundsModal}>
                                    ${accountBalance.toFixed(2)} <span>+</span>
                                </button>

                                {isFundsModalOpen && (
                                    <AddFundsModal onClose={handleCloseFundsModal} />
                                )}
                                </div>

                                <div className="popup-cart relative">
                                    <div className="cart-icon" onClick={handleToggle3}>
                                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                                <path d="M4 4C4 4.55228 4.44772 5 5 5H19C19.5523 5 20 4.55228 20 4C20 3.44772 19.5523 3 19 3H5C4.44772 3 4 3.44772 4 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M8 21C8 21.5523 8.44772 22 9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M16 21C16 21.5523 16.4477 22 17 22C17.5523 22 18 21.5523 18 21C18 20.4477 17.5523 20 17 20C16.4477 20 16 20.4477 16 21Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M19 5L15.9916 15.9949C15.8963 16.5523 15.427 17 14.8634 17H9.13657C8.573 17 8.10373 16.5523 8.00837 15.9949L5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                <circle cx={17} cy={5} r={4} fill="#ed4949" stroke="#1D1D1D" strokeWidth="1.5" />

                                            </g>
                                        </svg>
                                    </div>
                                    <div className={`avatar_popup ${isToggled3 ? 'visible' : ''}`}>
                                    <div className="close-button" onClick={handleToggle3}>×</div>
                                        <h5 className="mb-30">Active Cart</h5>
                                        <div className="widget-recently">
                                        {cartItems.map((item, index) => (
                                            <div className="card-small" key={index}>
                                                <div className="author">
                                                <img src="assets/images/blog/sidebar-06.jpg" alt="" />
                                                <div className="info">
                                                    <h6>{item.name}</h6>
                                                    <p>{item.price}</p>
                                                </div>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                        <div className="proceed-to-checkout">
                                        <p>Loot Value: ${totalCost.toFixed(2)}</p>
                                        <div className="cart-summary">
                                            <div className="line-item">
                                            <span>Processing Fee:</span>
                                            <span>{processingFee.toFixed(2)}</span>
                                            </div>
                                            <div className="line-item">
                                            <span>Shipping:</span>
                                            <span>{shippingFee.toFixed(2)}</span>
                                            </div>
                                            <div className="line-item">
                                            <span>Tax:</span>
                                            <span>{taxAmount.toFixed(2)}</span>
                                            </div>
                                            <div className="total-cost">
                                            <span></span>
                                            <span>${grandTotal.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
                                        </div>
                                        {/* Render CheckoutModal conditionally */}
                                        {isModalOpen && <CheckoutModal onClose={handleCloseCheckout} cartItems={cartItems} isModalOpen={isModalOpen} />}
                                    </div>
                                </div>
                               

                                <div className="popup-user relative">
                                    <div className="user" onClick={handleToggle}>
                                    <img src="assets/images/avatar/avatar (1).png" alt="" />
                                        <span>Champion<i className="icon-keyboard_arrow_down" /></span>
                                    </div>
                                    <div className={`avatar_popup2 ${isToggled ? "visible" : ""}`}>
                                        <div >
                                            <div className="links">
                                                <Link className="block mb-30" href="#">
                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.774902 18.333C0.774902 18.7932 1.14762 19.1664 1.60824 19.1664C2.06885 19.1664 2.44157 18.7932 2.44157 18.333C2.44157 15.3923 4.13448 12.7889 6.77329 11.5578C7.68653 12.1513 8.77296 12.4997 9.94076 12.4997C11.113 12.4997 12.2036 12.1489 13.119 11.5513C13.9067 11.9232 14.6368 12.4235 15.2443 13.0307C16.6611 14.4479 17.4416 16.3311 17.4416 18.333C17.4416 18.7932 17.8143 19.1664 18.2749 19.1664C18.7355 19.1664 19.1083 18.7932 19.1083 18.333C19.1083 15.8859 18.1545 13.5845 16.4227 11.8523C15.8432 11.2725 15.1698 10.7754 14.4472 10.3655C15.2757 9.3581 15.7741 8.06944 15.7741 6.66635C15.7741 3.44979 13.1569 0.833008 9.94076 0.833008C6.72461 0.833008 4.10742 3.44979 4.10742 6.66635C4.10742 8.06604 4.60379 9.35154 5.42863 10.3579C2.56796 11.9685 0.774902 14.9779 0.774902 18.333V18.333ZM9.94076 2.49968C12.2381 2.49968 14.1074 4.36898 14.1074 6.66635C14.1074 8.96371 12.2381 10.833 9.94076 10.833C7.6434 10.833 5.77409 8.96371 5.77409 6.66635C5.77409 4.36898 7.6434 2.49968 9.94076 2.49968V2.49968Z" fill="white" />
                                                    </svg>
                                                    <span>Profile</span>
                                                </Link>
                                                <Link className="block mb-30" href="#">
                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.774902 18.333C0.774902 18.7932 1.14762 19.1664 1.60824 19.1664C2.06885 19.1664 2.44157 18.7932 2.44157 18.333C2.44157 15.3923 4.13448 12.7889 6.77329 11.5578C7.68653 12.1513 8.77296 12.4997 9.94076 12.4997C11.113 12.4997 12.2036 12.1489 13.119 11.5513C13.9067 11.9232 14.6368 12.4235 15.2443 13.0307C16.6611 14.4479 17.4416 16.3311 17.4416 18.333C17.4416 18.7932 17.8143 19.1664 18.2749 19.1664C18.7355 19.1664 19.1083 18.7932 19.1083 18.333C19.1083 15.8859 18.1545 13.5845 16.4227 11.8523C15.8432 11.2725 15.1698 10.7754 14.4472 10.3655C15.2757 9.3581 15.7741 8.06944 15.7741 6.66635C15.7741 3.44979 13.1569 0.833008 9.94076 0.833008C6.72461 0.833008 4.10742 3.44979 4.10742 6.66635C4.10742 8.06604 4.60379 9.35154 5.42863 10.3579C2.56796 11.9685 0.774902 14.9779 0.774902 18.333V18.333ZM9.94076 2.49968C12.2381 2.49968 14.1074 4.36898 14.1074 6.66635C14.1074 8.96371 12.2381 10.833 9.94076 10.833C7.6434 10.833 5.77409 8.96371 5.77409 6.66635C5.77409 4.36898 7.6434 2.49968 9.94076 2.49968V2.49968Z" fill="white" />
                                                    </svg>
                                                    <span>Battle Pass</span>
                                                </Link>
                                                <Link className="block" onClick={() => setIsLoggedIn(false)} href="login.html" id="logout">
                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.9668 18.3057H2.49168C2.0332 18.3057 1.66113 17.9335 1.66113 17.4751V2.52492C1.66113 2.06644 2.03324 1.69437 2.49168 1.69437H9.9668C10.4261 1.69437 10.7973 1.32312 10.7973 0.863828C10.7973 0.404531 10.4261 0.0332031 9.9668 0.0332031H2.49168C1.11793 0.0332031 0 1.15117 0 2.52492V17.4751C0 18.8488 1.11793 19.9668 2.49168 19.9668H9.9668C10.4261 19.9668 10.7973 19.5955 10.7973 19.1362C10.7973 18.6769 10.4261 18.3057 9.9668 18.3057Z" fill="white" />
                                                        <path d="M19.7525 9.40904L14.7027 4.42564C14.3771 4.10337 13.8505 4.10755 13.5282 4.43396C13.206 4.76036 13.2093 5.28611 13.5366 5.60837L17.1454 9.16982H7.47508C7.01578 9.16982 6.64453 9.54107 6.64453 10.0004C6.64453 10.4597 7.01578 10.8309 7.47508 10.8309H17.1454L13.5366 14.3924C13.2093 14.7147 13.2068 15.2404 13.5282 15.5668C13.691 15.7313 13.9053 15.8143 14.1196 15.8143C14.3306 15.8143 14.5415 15.7346 14.7027 15.5751L19.7525 10.5917C19.9103 10.4356 20 10.2229 20 10.0003C20 9.77783 19.9111 9.56603 19.7525 9.40904Z" fill="white" />
                                                    </svg>
                                                    <span>Log out</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                                    <div className="canvas" onClick={handleSidebar}>
                                        <span />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className={`canvas-nav-wrap ${isSidebar ? "active" : ""}`}>
                    <div className="overlay-canvas-nav" onClick={handleSidebar} />
                    <div className="inner-canvas-nav">
                        <div className="side-bar">
                            <Link href="/" rel="home" className="main-logo">
                                <img id="logo_header" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
                            </Link>
                            <div className="canvas-nav-close" onClick={handleSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" /></g></svg>
                            </div>
                            {/* <div className="widget-search mt-30">
                                <form action="#" method="get" role="search" className="search-form relative">
                                    <input type="search" id="search" className="search-field style-1" placeholder="Search..." name="s" title="Search for" required />
                                    <button className="search search-submit" type="submit" title="Search">
                                        <i className="icon-search" />
                                    </button>
                                </form>
                            </div> */}
                            <div className="widget widget-categories">
                                <h5 className="title-widget">Menu</h5>
                                <ul>
                                    <li>
                                        <div className="cate-item"><Link href="#">HOME</Link></div>
                                    </li>
                                    <li>
                                        <div className="cate-item"><Link href="#">LOOT BOXES</Link></div>
                                    </li>
                                    <li>
                                        <div className="cate-item"><Link href="#">BATTLEPASS</Link></div>
                                    </li>
                                    <li>
                                        <div className="cate-item"><Link href="#">FAQ's</Link></div>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget widget-menu style-4">
                                <h5 className="title-widget">Company Information</h5>
                                <ul>
                                    <li><Link href="#">Contact</Link></li>
                                    <li><Link href="#">How It Works</Link></li>
                                    <li><Link href="#">Customer Support</Link></li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h5 className="title-widget">Join the community</h5>
                                <div className="widget-social">
                                    <ul className="flex">
                                        <li><Link href="#" className="icon-facebook" /></li>
                                        <li><Link href="#" className="icon-twitter" /></li>
                                        <li><Link href="#" className="icon-vt" /></li>
                                        <li><Link href="#" className="icon-tiktok" /></li>
                                        <li><Link href="#" className="icon-youtube" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`mobile-nav-wrap ${isMobileMenu ? "active" : ""}`}>
                    <div className="overlay-mobile-nav" onClick={handleMobileMenu} />
                    <div className="inner-mobile-nav">
                        <Link href="/" rel="home" className="main-logo">
                            <img id="mobile-logo_header" src="/assets/images/logo/logo.png" data-retina="assets/images/logo/logo@2x.png" />
                        </Link>
                        <div className="mobile-nav-close" onClick={handleMobileMenu}>
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="white" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.878 122.88" enableBackground="new 0 0 122.878 122.88" xmlSpace="preserve"><g><path d="M1.426,8.313c-1.901-1.901-1.901-4.984,0-6.886c1.901-1.902,4.984-1.902,6.886,0l53.127,53.127l53.127-53.127 c1.901-1.902,4.984-1.902,6.887,0c1.901,1.901,1.901,4.985,0,6.886L68.324,61.439l53.128,53.128c1.901,1.901,1.901,4.984,0,6.886 c-1.902,1.902-4.985,1.902-6.887,0L61.438,68.326L8.312,121.453c-1.901,1.902-4.984,1.902-6.886,0 c-1.901-1.901-1.901-4.984,0-6.886l53.127-53.128L1.426,8.313L1.426,8.313z" /></g></svg>
                        </div>
                        <MobileMenu />
                    </div>
                </div>
            </header>
            
            {console.log('showSignupForm:', showSignupForm)}
            {showSignupForm && (
                <>
                    {console.log('Rendering SignUpForm')}
                    <SignUpForm onClose={handleCloseSignupForm} />
                </>
            )}
        </>
    )
}
