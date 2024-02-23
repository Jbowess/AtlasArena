import ActiveBid from "@/components/sections/AreanaPractise"
import Collection from "@/components/sections/AffiliateProgram"
import Create from "@/components/sections/Create"
import Explore from "@/components/sections/LeaderBoards"
import Favourite from "@/components/sections/Rewards"
import History from "@/components/sections/Tournaments"
import Market from "@/components/sections/MysteryBoxes"
import Settings from "@/components/sections/Settings"
import Wallet from "@/components/sections/Wallet"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/router';
import CheckoutModal from '@/components/sections/CheckoutModal'; // Update the path
import AddFundsModal from '@/components/sections/AddFundsModal'; // Import your AddFundsModal component
import LootBoxOne from 'pages/product-detail-2';

export default function Home() {
 
    const router = useRouter(); // Initialize the router
    const userData = router.query.userData ? JSON.parse(router.query.userData) : null;
    console.log(userData)

    const [activeIndex, setActiveIndex] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
    const [isFundsModalOpen, setIsFundsModalOpen] = useState(false);
    const [accountBalance, setAccountBalance] = useState(0.00);

    const handleLootBoxClick = (newIndex) => {
        // Update your state or perform any action with the new index here
        setActiveIndex(newIndex);
    };

    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    const [cartItems, setCartItems] = useState([
        { name: 'Gucci Belt', price: '$100' },
        { name: 'Iphone Case', price: '$50' },
        { name: 'Airpods', price: '$310' },
        { name: 'Film Camera', price: '$30' },
        { name: 'Off-White Golden Shoes', price: '$510' },
        { name: 'Shoe Laces Rainbow', price: '$8' },


      ]);

    const handleProceedToCheckout = () => {
        setIsModalOpen(true);
    };
    
  
    const handleCloseCheckout = () => {
        setIsModalOpen(false);
    };

    const addItemToCart = (cardData) => {
        setCartItems([...cartItems, cardData]);
      };


    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)

    const [isToggled2, setToggled2] = useState(false)
    const handleToggle2 = () => setToggled2(!isToggled2)

    const [isToggled3, setToggled3] = useState(false)
    
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


    const [isMobileSidebar, setMobileSidebar] = useState(false)
    const handleMobileSidebar = () => setMobileSidebar(!isMobileSidebar)

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
            <div id="wrapper">
                <div id="page" className={`market-page ${isMobileSidebar ? "full" : ""}`}>
                    <div id="market-header">
                        <div className="market-header flex items-center justify-between">
                            <div className="widget-search">
                                <form action="#" method="get" role="search" className="search-form relative">
                                    <div id='account-bar'>
                                        <div id='account-bar-level'>Champion Rank 2</div>
                                        <div id='xp-bar'>
                                        <div id='xp-bar-fill'>
                                            <div id='xp-increase-fx'><div id='xp-increase-fx-flicker'><div class='xp-increase-glow1'></div><div class='xp-increase-glow2'></div><div class='xp-increase-glow3'></div></div><div class='xp-increase-glow2'></div></div>
                                        </div>
                                        </div>
                                        <div id='account-bar-next-level'> 3</div>
                                    </div>
                                </form>
                            </div>
                            <div className="widget-search">
                                <img src="/assets/images/logo/Logo.png" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>



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
                                                <circle cx={17} cy={5} r={4} fill="#f700ff" stroke="#1D1D1D" strokeWidth="1.5" />

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
                                <div className="popup-notification relative">
                                    <div className="notification" onClick={handleToggle2}>
                                        <svg width={24} height={25} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12 18.8476C17.6392 18.8476 20.2481 18.1242 20.5 15.2205C20.5 12.3188 18.6812 12.5054 18.6812 8.94511C18.6812 6.16414 16.0452 3 12 3C7.95477 3 5.31885 6.16414 5.31885 8.94511C5.31885 12.5054 3.5 12.3188 3.5 15.2205C3.75295 18.1352 6.36177 18.8476 12 18.8476Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14.3888 21.8574C13.0247 23.3721 10.8967 23.3901 9.51947 21.8574" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <circle cx={17} cy={5} r={4} fill="#6200ff" stroke="#1D1D1D" strokeWidth="1.5" />
                                        </svg>
                                    </div>
                                    <div className={`avatar_popup ${isToggled2 ? "visible" : ""}`}>
                                        <h5 className="mb-30">Notification</h5>
                                        <div className="widget-recently">
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
                                                    <img src="assets/images/blog/sidebar-06.jpg" alt="" />
                                                    <div className="info">
                                                        <h6><Link href="#">Propw</Link></h6>
                                                        <p><Link href="#">@themes</Link></p>
                                                    </div>
                                                </div>
                                                <span className="date">Mon, 08 May </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="popup-user relative">
                                    <div className="user" onClick={handleToggle}>
                                        <img src="assets/images/avatar/avatar-small-09.png" alt="" />
                                        <span>Champion<i className="icon-keyboard_arrow_down" /></span>
                                    </div>
                                    <div className={`avatar_popup2 ${isToggled ? "visible" : ""}`}>
                                        <div >
                                            <div className="links">
                                                <Link className="block mb-30" href="#">
                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.774902 18.333C0.774902 18.7932 1.14762 19.1664 1.60824 19.1664C2.06885 19.1664 2.44157 18.7932 2.44157 18.333C2.44157 15.3923 4.13448 12.7889 6.77329 11.5578C7.68653 12.1513 8.77296 12.4997 9.94076 12.4997C11.113 12.4997 12.2036 12.1489 13.119 11.5513C13.9067 11.9232 14.6368 12.4235 15.2443 13.0307C16.6611 14.4479 17.4416 16.3311 17.4416 18.333C17.4416 18.7932 17.8143 19.1664 18.2749 19.1664C18.7355 19.1664 19.1083 18.7932 19.1083 18.333C19.1083 15.8859 18.1545 13.5845 16.4227 11.8523C15.8432 11.2725 15.1698 10.7754 14.4472 10.3655C15.2757 9.3581 15.7741 8.06944 15.7741 6.66635C15.7741 3.44979 13.1569 0.833008 9.94076 0.833008C6.72461 0.833008 4.10742 3.44979 4.10742 6.66635C4.10742 8.06604 4.60379 9.35154 5.42863 10.3579C2.56796 11.9685 0.774902 14.9779 0.774902 18.333V18.333ZM9.94076 2.49968C12.2381 2.49968 14.1074 4.36898 14.1074 6.66635C14.1074 8.96371 12.2381 10.833 9.94076 10.833C7.6434 10.833 5.77409 8.96371 5.77409 6.66635C5.77409 4.36898 7.6434 2.49968 9.94076 2.49968V2.49968Z" fill="white" />
                                                    </svg>
                                                    <span>My Profile</span>
                                                </Link>
                                                <Link className="block mb-30" href="#">
                                                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.774902 18.333C0.774902 18.7932 1.14762 19.1664 1.60824 19.1664C2.06885 19.1664 2.44157 18.7932 2.44157 18.333C2.44157 15.3923 4.13448 12.7889 6.77329 11.5578C7.68653 12.1513 8.77296 12.4997 9.94076 12.4997C11.113 12.4997 12.2036 12.1489 13.119 11.5513C13.9067 11.9232 14.6368 12.4235 15.2443 13.0307C16.6611 14.4479 17.4416 16.3311 17.4416 18.333C17.4416 18.7932 17.8143 19.1664 18.2749 19.1664C18.7355 19.1664 19.1083 18.7932 19.1083 18.333C19.1083 15.8859 18.1545 13.5845 16.4227 11.8523C15.8432 11.2725 15.1698 10.7754 14.4472 10.3655C15.2757 9.3581 15.7741 8.06944 15.7741 6.66635C15.7741 3.44979 13.1569 0.833008 9.94076 0.833008C6.72461 0.833008 4.10742 3.44979 4.10742 6.66635C4.10742 8.06604 4.60379 9.35154 5.42863 10.3579C2.56796 11.9685 0.774902 14.9779 0.774902 18.333V18.333ZM9.94076 2.49968C12.2381 2.49968 14.1074 4.36898 14.1074 6.66635C14.1074 8.96371 12.2381 10.833 9.94076 10.833C7.6434 10.833 5.77409 8.96371 5.77409 6.66635C5.77409 4.36898 7.6434 2.49968 9.94076 2.49968V2.49968Z" fill="white" />
                                                    </svg>
                                                    <span>Battle Pass</span>
                                                </Link>
                                                <Link className="block" href="login.html" id="logout">
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
                        </div>
                    </div>
                    {/* <div className={`btn-canvas ${isMobileSidebar ? "" : "active"}`}>    SIDE BAR ICON
                        <div className="canvas" onClick={handleMobileSidebar}>
                            <span />
                        </div>
                    </div> */}
                    <div className="flat-tabs">
                        <div className={`section-menu-left ${isMobileSidebar ? "null" : ""}`}>
                            <div className="box-logo">
                            <img src="/assets/images/logo/Logo2.png" alt="Logo" style={{ maxWidth: '100%', height: 'auto' }} />
                            </div>
                            {/* <div className="create menu-tab">
                                <div className="popup-funds relative" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <button className="funds" onClick={handleOpenFundsModal} style={{ margin: ' auto' }}>
                                        ${accountBalance.toFixed(2)} <span>+</span>
                                    </button>
                                    {isFundsModalOpen && (
                                        <AddFundsModal onClose={handleCloseFundsModal} />
                                    )}
                                </div>
                            </div> */}
                            <div className="over-content">
                                <div className="content">
                                    <h6>Skill-Based Prizes</h6>
                                    <ul className="menu-tab">
                                        <li className={activeIndex === 1 ? "tablinks active" : "tablinks"} data-tabs="market" onClick={() => handleOnClick(1)}>
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.2">
                                                    <path d="M6.75731 9.35159V15.64" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M11.0351 6.34253V15.64" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M15.2431 12.6746V15.6401" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.2954 1.83334H6.70492C3.71048 1.83334 1.8335 3.95275 1.8335 6.95307V15.0469C1.8335 18.0473 3.70175 20.1667 6.70492 20.1667H15.2954C18.2986 20.1667 20.1668 18.0473 20.1668 15.0469V6.95307C20.1668 3.95275 18.2986 1.83334 15.2954 1.83334Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.71982 1.83371H15.2806C18.3982 1.83371 20.1582 3.60196 20.1673 6.71954V15.2812C20.1673 18.3979 18.3982 20.167 15.2806 20.167H6.71982C3.60223 20.167 1.83398 18.3979 1.83398 15.2812V6.71954C1.83398 3.60196 3.60223 1.83371 6.71982 1.83371ZM11.0456 16.372C11.4407 16.372 11.7697 16.0787 11.8064 15.6845V6.34371C11.8431 6.05954 11.7065 5.77446 11.459 5.61954C11.2014 5.46371 10.8897 5.46371 10.6432 5.61954C10.3947 5.77446 10.2582 6.05954 10.2847 6.34371V15.6845C10.3315 16.0787 10.6606 16.372 11.0456 16.372ZM15.2628 16.372C15.6478 16.372 15.9769 16.0787 16.0237 15.6845V12.6779C16.0502 12.3836 15.9137 12.1095 15.6652 11.9537C15.4187 11.7979 15.107 11.7979 14.8503 11.9537C14.6019 12.1095 14.4653 12.3836 14.502 12.6779V15.6845C14.5387 16.0787 14.8677 16.372 15.2628 16.372ZM7.534 15.6845C7.49734 16.0787 7.16825 16.372 6.77317 16.372C6.379 16.372 6.049 16.0787 6.01325 15.6845V9.35038C5.98575 9.0653 6.12234 8.78205 6.37075 8.62621C6.61734 8.47038 6.92992 8.47038 7.17742 8.62621C7.424 8.78205 7.56242 9.0653 7.534 9.35038V15.6845Z" fill="#f700ff" />
                                            </svg>
                                            Loot Boxes
                                        </li>

                                        <li className={activeIndex === 3 ? "tablinks active" : "tablinks"} data-tabs="explore" onClick={() => handleOnClick(3)}>
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.2">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.73177 3.20834C3.21094 3.20834 3.21094 3.39901 3.21094 5.72918V5.75209C3.21094 6.76684 3.21094 7.50018 3.45935 7.81001C3.70227 8.11068 4.42369 8.25001 5.73177 8.25001C7.03985 8.25001 7.76127 8.10976 8.00419 7.80909C8.2526 7.50018 8.2526 6.76684 8.2526 5.75118C8.2526 3.39901 8.2526 3.20834 5.73177 3.20834ZM5.73177 9.62501C4.18627 9.62501 3.02669 9.46276 2.3896 8.67168C1.83594 7.98509 1.83594 7.04826 1.83594 5.75209L2.52344 5.72918H1.83594C1.83594 3.09834 2.00185 1.83334 5.73177 1.83334C9.46169 1.83334 9.6276 3.09834 9.6276 5.72918C9.6276 7.04734 9.6276 7.98509 9.07394 8.67168C8.43685 9.46276 7.27727 9.62501 5.73177 9.62501Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8177 3.20834C13.2969 3.20834 13.2969 3.39901 13.2969 5.72918V5.75209C13.2969 6.76684 13.2969 7.50018 13.5453 7.81001C13.7882 8.11068 14.5096 8.25001 15.8177 8.25001C17.1258 8.25001 17.8472 8.10976 18.0901 7.80909C18.3385 7.50018 18.3385 6.76684 18.3385 5.75118C18.3385 3.39901 18.3385 3.20834 15.8177 3.20834ZM15.8177 9.62501C14.2722 9.62501 13.1126 9.46276 12.4755 8.67168C11.9219 7.98509 11.9219 7.04826 11.9219 5.75209L12.6094 5.72918H11.9219C11.9219 3.09834 12.0878 1.83334 15.8177 1.83334C19.5476 1.83334 19.7135 3.09834 19.7135 5.72918C19.7135 7.04734 19.7135 7.98509 19.1599 8.67168C18.5228 9.46276 17.3632 9.62501 15.8177 9.62501Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.73177 13.2917C3.21094 13.2917 3.21094 13.4824 3.21094 15.8125V15.8354C3.21094 16.8502 3.21094 17.5835 3.45935 17.8934C3.70227 18.194 4.42369 18.3334 5.73177 18.3334C7.03985 18.3334 7.76127 18.1931 8.00419 17.8924C8.2526 17.5835 8.2526 16.8502 8.2526 15.8345C8.2526 13.4824 8.2526 13.2917 5.73177 13.2917ZM5.73177 19.7084C4.18627 19.7084 3.02669 19.5461 2.3896 18.755C1.83594 18.0684 1.83594 17.1316 1.83594 15.8354L2.52344 15.8125H1.83594C1.83594 13.1817 2.00185 11.9167 5.73177 11.9167C9.46169 11.9167 9.6276 13.1817 9.6276 15.8125C9.6276 17.1307 9.6276 18.0684 9.07394 18.755C8.43685 19.5461 7.27727 19.7084 5.73177 19.7084Z" fill="white" />
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M15.8177 13.2917C13.2969 13.2917 13.2969 13.4824 13.2969 15.8125V15.8354C13.2969 16.8502 13.2969 17.5835 13.5453 17.8934C13.7882 18.194 14.5096 18.3334 15.8177 18.3334C17.1258 18.3334 17.8472 18.1931 18.0901 17.8924C18.3385 17.5835 18.3385 16.8502 18.3385 15.8345C18.3385 13.4824 18.3385 13.2917 15.8177 13.2917ZM15.8177 19.7084C14.2722 19.7084 13.1126 19.5461 12.4755 18.755C11.9219 18.0684 11.9219 17.1316 11.9219 15.8354L12.6094 15.8125H11.9219C11.9219 13.1817 12.0878 11.9167 15.8177 11.9167C19.5476 11.9167 19.7135 13.1817 19.7135 15.8125C19.7135 17.1307 19.7135 18.0684 19.1599 18.755C18.5228 19.5461 17.3632 19.7084 15.8177 19.7084Z" fill="white" />
                                                </g>
                                            </svg>
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.16134 1.83334H7.25967C8.55217 1.83334 9.58801 2.88751 9.58801 4.18093V7.30584C9.58801 8.60751 8.55217 9.65251 7.25967 9.65251H4.16134C2.87801 9.65251 1.83301 8.60751 1.83301 7.30584V4.18093C1.83301 2.88751 2.87801 1.83334 4.16134 1.83334ZM4.16134 12.3472H7.25967C8.55217 12.3472 9.58801 13.3932 9.58801 14.6948V17.8197C9.58801 19.1122 8.55217 20.1664 7.25967 20.1664H4.16134C2.87801 20.1664 1.83301 19.1122 1.83301 17.8197V14.6948C1.83301 13.3932 2.87801 12.3472 4.16134 12.3472ZM17.8381 1.83334H14.7398C13.4473 1.83334 12.4114 2.88751 12.4114 4.18093V7.30584C12.4114 8.60751 13.4473 9.65251 14.7398 9.65251H17.8381C19.1214 9.65251 20.1664 8.60751 20.1664 7.30584V4.18093C20.1664 2.88751 19.1214 1.83334 17.8381 1.83334ZM14.7398 12.3472H17.8381C19.1214 12.3472 20.1664 13.3932 20.1664 14.6948V17.8197C20.1664 19.1122 19.1214 20.1664 17.8381 20.1664H14.7398C13.4473 20.1664 12.4114 19.1122 12.4114 17.8197V14.6948C12.4114 13.3932 13.4473 12.3472 14.7398 12.3472Z" fill="#f700ff" />
                                            </svg>
                                            Leaderboards
                                        </li>
                                    </ul>
                                </div>
                                <div className="content mt-30">
                                    <h6>Account</h6>
                                    <ul className="menu-tab">
                                    <li className={activeIndex === 5 ? "tablinks active" : "tablinks"} data-tabs="favorite" onClick={() => handleOnClick(5)}>
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.2">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M2.63385 10.6318C1.65026 7.56096 2.79976 4.05104 6.02368 3.01246C7.71951 2.46521 9.59135 2.78788 11.0012 3.84846C12.3349 2.81721 14.2755 2.46888 15.9695 3.01246C19.1934 4.05104 20.3503 7.56096 19.3676 10.6318C17.8368 15.4993 11.0012 19.2485 11.0012 19.2485C11.0012 19.2485 4.21601 15.5561 2.63385 10.6318Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M14.668 6.14166C15.6488 6.45883 16.3418 7.33425 16.4252 8.36183" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.5279 2.29232C15.1063 2.29232 15.6838 2.3739 16.2329 2.55815C19.6163 3.65815 20.8355 7.37066 19.817 10.6157C19.2395 12.2739 18.2954 13.7873 17.0588 15.0239C15.2887 16.7381 13.3463 18.2597 11.2554 19.5706L11.0262 19.709L10.7879 19.5614C8.68963 18.2597 6.73621 16.7381 4.94963 15.0147C3.7213 13.7782 2.77621 12.2739 2.18955 10.6157C1.15371 7.37066 2.37288 3.65815 5.79296 2.5389C6.0588 2.44724 6.33288 2.38307 6.60788 2.34732H6.71788C6.97546 2.30974 7.23121 2.29232 7.48788 2.29232H7.58871C8.16621 2.30974 8.72538 2.41057 9.26713 2.59482H9.32121C9.35788 2.61224 9.38538 2.63149 9.40371 2.6489C9.6063 2.71399 9.79788 2.78732 9.98121 2.88815L10.3295 3.04399C10.4137 3.08888 10.5082 3.15747 10.5898 3.21675C10.6416 3.25431 10.6882 3.28813 10.7237 3.30982C10.7387 3.31865 10.7539 3.32752 10.7692 3.33647C10.8478 3.38235 10.9297 3.43014 10.9987 3.48307C12.0171 2.70482 13.2537 2.28315 14.5279 2.29232ZM16.9674 8.8923C17.3432 8.88222 17.6641 8.58063 17.6916 8.19472V8.08563C17.7191 6.80138 16.9408 5.63813 15.7574 5.18897C15.3816 5.05972 14.9691 5.2623 14.8316 5.6473C14.7032 6.0323 14.9049 6.45397 15.2899 6.59055C15.8775 6.81055 16.2707 7.38897 16.2707 8.02972V8.05813C16.2533 8.26805 16.3166 8.47063 16.4449 8.62647C16.5732 8.7823 16.7657 8.87305 16.9674 8.8923Z" fill="#f700ff" />
                                            </svg>
                                            Battle Pass
                                        </li>

                                        <li className={activeIndex === 8 ? "tablinks active" : "tablinks"} data-tabs="settings" onClick={() => handleOnClick(8)}>
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.2">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M19.0713 6.98827L18.5008 5.99819C18.0181 5.16043 16.9484 4.87142 16.1095 5.35212V5.35212C15.7101 5.58736 15.2336 5.6541 14.785 5.53762C14.3364 5.42115 13.9526 5.13102 13.7182 4.73122C13.5673 4.4771 13.4863 4.18765 13.4832 3.89216V3.89216C13.4968 3.41841 13.3181 2.95933 12.9877 2.61949C12.6574 2.27965 12.2035 2.088 11.7296 2.0882H10.5801C10.1158 2.08819 9.67059 2.27321 9.34306 2.60233C9.01552 2.93144 8.83263 3.3775 8.83486 3.84182V3.84182C8.8211 4.80047 8.03999 5.57037 7.08124 5.57027C6.78575 5.5672 6.49631 5.48616 6.24219 5.33534V5.33534C5.40328 4.85464 4.33358 5.14365 3.85088 5.98141L3.23837 6.98827C2.75626 7.82499 3.04134 8.89401 3.87605 9.37958V9.37958C4.41863 9.69283 4.75288 10.2718 4.75288 10.8983C4.75288 11.5248 4.41863 12.1037 3.87605 12.417V12.417C3.0424 12.8992 2.75701 13.9657 3.23837 14.7999V14.7999L3.81732 15.7983C4.04348 16.2064 4.42294 16.5076 4.87173 16.6351C5.32052 16.7627 5.80164 16.7061 6.20862 16.478V16.478C6.60871 16.2445 7.08548 16.1806 7.53295 16.3003C7.98042 16.4201 8.36152 16.7136 8.59154 17.1157C8.74236 17.3698 8.8234 17.6592 8.82647 17.9547V17.9547C8.82647 18.9232 9.6116 19.7083 10.5801 19.7083H11.7296C12.6948 19.7083 13.4786 18.9283 13.4832 17.9631V17.9631C13.481 17.4973 13.665 17.05 13.9944 16.7206C14.3237 16.3913 14.7711 16.2072 15.2368 16.2095C15.5316 16.2174 15.8199 16.2981 16.0759 16.4444V16.4444C16.9126 16.9265 17.9816 16.6414 18.4672 15.8067V15.8067L19.0713 14.7999C19.3052 14.3985 19.3693 13.9205 19.2497 13.4716C19.13 13.0228 18.8363 12.6402 18.4336 12.4086V12.4086C18.031 12.1769 17.7373 11.7943 17.6176 11.3455C17.4979 10.8967 17.5621 10.4186 17.796 10.0173C17.948 9.75177 18.1682 9.53164 18.4336 9.37958V9.37958C19.2634 8.89428 19.5478 7.83149 19.0713 6.99666V6.99666V6.98827Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <ellipse cx="11.1587" cy="10.8983" rx="2.41648" ry="2.41648" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M18.702 12.4484C19.0299 12.6225 19.2828 12.8975 19.4608 13.1725C19.8074 13.7409 19.7793 14.4375 19.4421 15.0517L18.7863 16.1517C18.4397 16.7384 17.7933 17.105 17.1282 17.105C16.8003 17.105 16.4349 17.0134 16.1352 16.83C15.8916 16.6742 15.6106 16.6192 15.3108 16.6192C14.3834 16.6192 13.6058 17.38 13.5777 18.2875C13.5777 19.3417 12.7159 20.1667 11.6386 20.1667H10.3645C9.27784 20.1667 8.41599 19.3417 8.41599 18.2875C8.39725 17.38 7.61971 16.6192 6.69228 16.6192C6.38314 16.6192 6.1021 16.6742 5.86791 16.83C5.56813 17.0134 5.19341 17.105 4.8749 17.105C4.20041 17.105 3.55402 16.7384 3.20741 16.1517L2.56102 15.0517C2.21441 14.4559 2.19567 13.7409 2.54229 13.1725C2.69217 12.8975 2.97321 12.6225 3.29172 12.4484C3.55402 12.32 3.72265 12.1092 3.8819 11.8617C4.3503 11.0734 4.06926 10.0375 3.27299 9.57004C2.34556 9.04754 2.04579 7.88337 2.57976 6.97587L3.20741 5.89421C3.75075 4.98671 4.91238 4.66587 5.84917 5.19754C6.66418 5.63754 7.72276 5.34421 8.20052 4.56504C8.35041 4.30837 8.43472 4.03337 8.41599 3.75837C8.39725 3.40087 8.5003 3.06171 8.67829 2.78671C9.0249 2.21837 9.65255 1.85171 10.3364 1.83337H11.6573C12.3505 1.83337 12.9782 2.21837 13.3248 2.78671C13.4934 3.06171 13.6058 3.40087 13.5777 3.75837C13.559 4.03337 13.6433 4.30837 13.7932 4.56504C14.271 5.34421 15.3295 5.63754 16.1539 5.19754C17.0813 4.66587 18.2523 4.98671 18.7863 5.89421L19.4139 6.97587C19.9573 7.88337 19.6575 9.04754 18.7207 9.57004C17.9244 10.0375 17.6434 11.0734 18.1212 11.8617C18.2711 12.1092 18.4397 12.32 18.702 12.4484ZM8.35041 11.0092C8.35041 12.4484 9.54014 13.5942 11.0109 13.5942C12.4817 13.5942 13.6433 12.4484 13.6433 11.0092C13.6433 9.57004 12.4817 8.41504 11.0109 8.41504C9.54014 8.41504 8.35041 9.57004 8.35041 11.0092Z" fill="#f700ff" />
                                            </svg>
                                            Settings
                                        </li>
                                        <li>
                                            <Link href="/">Logout</Link>
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g opacity="0.2">
                                                    <path d="M13.7627 6.77369V5.91844C13.7627 4.05303 12.2502 2.54053 10.3848 2.54053H5.91606C4.05156 2.54053 2.53906 4.05303 2.53906 5.91844V16.1209C2.53906 17.9864 4.05156 19.4989 5.91606 19.4989H10.394C12.2539 19.4989 13.7627 17.9909 13.7627 16.131V15.2666" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M19.9907 11.0196H8.95312" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M17.3047 8.34741L19.9887 11.0195L17.3047 13.6925" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </g>
                                            </svg>
                                            <svg width={22} height={22} viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.0709 10.2942C8.66986 10.2942 8.35275 10.6059 8.35275 11C8.35275 11.385 8.66986 11.7059 9.0709 11.7059H14.6668V16.0875C14.6668 18.3334 12.8108 20.1667 10.5165 20.1667H5.97448C3.68948 20.1667 1.8335 18.3425 1.8335 16.0967V5.91254C1.8335 3.65754 3.69881 1.83337 5.98381 1.83337H10.5352C12.8108 1.83337 14.6668 3.65754 14.6668 5.90337V10.2942H9.0709ZM17.9945 7.82856L20.6712 10.4961C20.8087 10.6336 20.882 10.8077 20.882 11.0002C20.882 11.1836 20.8087 11.3669 20.6712 11.4952L17.9945 14.1627C17.857 14.3002 17.6737 14.3736 17.4995 14.3736C17.3162 14.3736 17.1328 14.3002 16.9953 14.1627C16.7203 13.8877 16.7203 13.4386 16.9953 13.1636L18.462 11.7061H14.667V10.2944H18.462L16.9953 8.83689C16.7203 8.56189 16.7203 8.11272 16.9953 7.83772C17.2703 7.55356 17.7195 7.55356 17.9945 7.82856Z" fill="#f700ff" />
                                            </svg>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="bottom">
                                <p>© 2023 Atlas Arena</p>
                                <p>Skill-Based Loot Boxes</p>
                            </div>
                        </div>
                        <div className="content-tabs">
                            <div id="create" className={activeIndex === 9 ? "tabcontent active" : "tabcontent"}>
                                <Create />
                            </div>
                            <div id="market" className={activeIndex === 1 ? "tabcontent active" : "tabcontent"}>
                                <Market />
                            </div>
                            <div id="bid" className={activeIndex === 2 ? "tabcontent active" : "tabcontent"}>
                                <ActiveBid />
                            </div>
                            <div id="explore" className={activeIndex === 3 ? "tabcontent active" : "tabcontent"}>
                                <Explore />
                            </div>
                            <div id="tf-collection" className={activeIndex === 4 ? "tabcontent active" : "tabcontent"}>
                                <Collection />
                            </div>
                            <div id="favorite" className={activeIndex === 5 ? "tabcontent active" : "tabcontent"}>
                                <Favourite />
                            </div>
                            <div id="wallet" className={activeIndex === 6 ? "tabcontent active" : "tabcontent"}>
                                <Wallet />
                            </div>
                            <div id="history" className={activeIndex === 7 ? "tabcontent active" : "tabcontent"}>
                                <History />
                            </div>
                            <div id="settings" className={activeIndex === 8 ? "tabcontent active" : "tabcontent"}>
                                <Settings />
                            </div>
                            <div id="LootBoxOne" className={activeIndex === 10 ? "tabcontent active" : "tabcontent"}>
                                <Market onLootBoxClick={handleLootBoxClick}/>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="modal fade popup" id="popup_bid" tabIndex={-1} role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            <div className="modal-body">
                                <div className="image">
                                    <img src="assets/images/backgroup-section/popup.png" alt="" />
                                </div>
                                <div className="logo-rotate">
                                    <img src="assets/images/item-background/item6-img.png" alt="" />
                                </div>
                                <h2>Subscribe to our newsletter</h2>
                                <p>Subscribe for our newsletter to stay in the loop</p>
                                <fieldset className="email">
                                    <input type="email" className="style-1" id="email" placeholder="Email address*" name="email" tabIndex={2} aria-required="true" required />
                                </fieldset>
                                <Link href="#" className="tf-button style-1 h50">Subscribe<i className="icon-arrow-up-right2" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}