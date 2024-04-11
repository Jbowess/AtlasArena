import React, { useRef } from 'react';
import Link from 'next/link';
import useLivePurchases from 'components/layout/useLivePurchases'; // Adjust the path as necessary

const SideBar = () => {
    const livePurchases = useLivePurchases();
    const scrollContainerRef = useRef(null);

    return (
      <div className="side-bar2">
        <h5 className="title-widget2" style={{ marginTop: '20px' }}>Live Wins</h5> {/* Moved outside the scrollable container */}
        <div className="widget-history2" ref={scrollContainerRef}>
          {livePurchases.map((purchase) => (
            <div key={purchase.id} className="widget-creators-item2">
              <div className="author2">
                <img src={purchase.image} alt={purchase.name} />
                <div className="info2">
                  <h6><Link href="#">{purchase.name}</Link></h6>
                  <span><Link href="#">{purchase.price}</Link></span>
                </div>
              </div>
              <span className="time2">{purchase.time}</span>
            </div>
          ))}
        </div>
      </div>
    );
};
export default SideBar;
