// Import components from the correct paths
import Layout from "/components/layout/Layout";            // Importing Layout component from the layout directory
import Action1 from "/components/sections/Action1";        // Importing Action1 component from the sections directory
import DiscoverItem6 from "/components/sections/DiscoverItem6";  // Importing DiscoverItem6 component from the sections directory
import FeaturedItem1 from "/components/sections/FeaturedItem1";  // Importing FeaturedItem1 component from the sections directory
import FeaturedItem2 from "/components/sections/FeaturedItem2";  // Importing FeaturedItem2 component from the sections directory
import Counter from "/components/sections/Counter";        // Importing Counter component from the sections directory
import FlatTitle6 from "/components/sections/FlatTitle6";  // Importing FlatTitle6 component from the sections directory
import Seller1 from "/components/sections/Seller1";        // Importing Seller1 component from the sections directory
import TopCollections1 from "/components/sections/TopCollections1";  // Importing TopCollections1 component from the sections directory
import TopCollector1 from "/components/sections/TopCollector1";      // Importing TopCollector1 component from the sections directory

export default function Home() {
    return (
        <>
            {/* Rendering Layout component with specific props */}            

            <Layout headerStyle={1} footerStyle={1} pageCls="home-1">
                {/* Rendering FlatTitle6 component */}
                <FlatTitle6 />
                {/* Rendering Seller1 component */}
                <Seller1 />
                {/* Rendering Counter component */}
                <Counter />
                {/* Rendering FeaturedItem2 component */}
                <FeaturedItem2 />
                {/* <DiscoverItem6 /> */}
                {/* Rendering TopCollector1 component */}
                <TopCollector1 />
                {/* Rendering FeaturedItem1 component */}
                <FeaturedItem1 />
                {/* <TopCollections1 /> */}
                {/* Rendering Action1 component */}
                <Action1 />
            </Layout>
        </>
    );
}
