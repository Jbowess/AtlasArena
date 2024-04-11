import Preloader from "@/components/elements/Preloader"
import { useEffect, useState } from "react"
// import 'swiper/css';
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import 'swiper/css/free-mode';
import AddClassBody from "@/components/elements/AddClassBody"
import "/public/assets/css/style.css"
import "/public/assets/css/responsive.css"
import SideBar from 'components/layout/SideBar'; // Adjust the import path as necessary

function MyApp({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {!loading ? (
                <div className="app-container"> {/* Flex container */}
                    <SideBar />
                    <div className="main-content"> {/* Main content wrapper */}
                        <AddClassBody />
                        <Component {...pageProps} />
                    </div>
                </div>
            ) : (
                <Preloader />
            )}
        </>
    );
}

export default MyApp;

