import Layout from "@/components/layout/Layout"

import Action1 from "@/components/sections/Action1"
import DiscoverItem6 from "@/components/sections/DiscoverItem6"
import FeaturedItem1 from "@/components/sections/FeaturedItem1"
import FeaturedItem2 from "@/components/sections/FeaturedItem2"
import Counter from "@/components/sections/Counter"
import FlatTitle6 from "@/components/sections/FlatTitle6"
import Seller1 from "@/components/sections/Seller1"
import TopCollections1 from "@/components/sections/TopCollections1"
import TopCollector1 from "@/components/sections/TopCollector1"
export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} pageCls="home-1">
                <FlatTitle6 />           {/* signup/boxes display/rewards display */}
                <Seller1 />              {/* top prize winners*/}
                <Counter />              {/* how to/number of players*/}
                <FeaturedItem2 />        {/* live winners*/}
                {/* <DiscoverItem6 />        Loot box list */}
                <TopCollector1 />        {/* atlas banner*/} 
                <FeaturedItem1 />        {/* social media posts*/}
                {/* <TopCollections1 />      loyalty program */}
                <Action1 />              {/* affliate link / signup */}
            </Layout>
        </>
    )
}