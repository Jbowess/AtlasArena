import { Menu } from '@headlessui/react'
import Link from 'next/link'
import AutoSlider1 from '../slider/AutoSlider1'
import AutoSlider2 from '../slider/AutoSlider2'

import { useState } from "react"
export default function Leaderboards() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <div className="wrapper-content">
                <div className="inner-content">
                    <div className="heading-section">
                        <h2 className="tf-title pb-30">Leaderboards</h2>
                    </div>
                                    <div className="tf-section-2 ranking">
                        <div className="themesflat-container">
                            <div className="row">
                                <div className="col-12 mb-30">
                                    <div className="widget-tabs relative">
                                        <div className="tf-soft">
                                            <div className="soft-right">
                                                <Menu as="div" className="dropdown">
                                                    <Menu.Button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton4" aria-haspopup="true" aria-expanded="false">
                                                        <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M3.125 5.625H16.875M3.125 10H16.875M3.125 14.375H10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <span>Last 30 day</span>
                                                    </Menu.Button>
                                                    <Menu.Items className="dropdown-menu d-block show" aria-labelledby="dropdownMenuButton">
                                                        <h6>Sort by</h6>
                                                        <Link href="#" className="dropdown-item">
                                                            <div className="sort-filter active" href="#">
                                                                <span>Last 30 day</span>
                                                                <span className="icon-tick"><span className="path2" /></span>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item">
                                                            <div className="sort-filter" href="#">
                                                                <span>Last 60 day</span>
                                                                <span className="icon-tick"><span className="path2" /></span>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item">
                                                            <div className="sort-filter" href="#">
                                                                <span>Last 90 day</span>
                                                                <span className="icon-tick"><span className="path2" /></span>
                                                            </div>
                                                        </Link>
                                                        <Link href="#" className="dropdown-item">
                                                            <div className="sort-filter" href="#">
                                                                <span>Last 365 day</span>
                                                                <span className="icon-tick"><span className="path2" /></span>
                                                            </div>
                                                        </Link>
                                                    </Menu.Items>
                                                </Menu>
                                            </div>
                                        </div>
                                        <ul className="widget-menu-tab">
                                            <li  className={activeIndex === 1 ? "item-title active" : "item-title"} onClick={() => handleOnClick(1)}>
                                                <span className="inner">Top Champions</span>
                                            </li>
                                            <li  className={activeIndex === 2 ? "item-title active" : "item-title"} onClick={() => handleOnClick(2)}>
                                                <span className="inner">Most Victorious Wins</span>
                                            </li>
                                        </ul>
                                        <div className="widget-content-tab pt-10">
                                            <div className="widget-content-inner" style={{ display: `${activeIndex === 1 ? "block" : "none"}` }}>
                                                <div className="widget-table-ranking">
                                                    <div data-wow-delay="0s" className="wow fadeInUp table-ranking-heading">
                                                        <div className="column1">
                                                            <h3>Collection</h3>
                                                        </div>
                                                        <div className="column2">
                                                            <h3>Volume</h3>
                                                        </div>
                                                        <div className="column">
                                                            <h3>24h %</h3>
                                                        </div>
                                                        <div className="column">
                                                            <h3>7d %</h3>
                                                        </div>
                                                        <div className="column">
                                                            <h3>Floor price</h3>
                                                        </div>
                                                        <div className="column">
                                                            <h3>Owners</h3>
                                                        </div>
                                                        <div className="column">
                                                            <h3>Items</h3>
                                                        </div>
                                                    </div>
                                                    <div className="table-ranking-content">
                                                        <div data-wow-delay="0s" className="wow fadeInUp fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">1. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-01.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Biao Family
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />31,673.31
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div data-wow-delay="0s" className="wow fadeInUp fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">2. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-02.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Xtreme Pixels
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div data-wow-delay="0s" className="wow fadeInUp fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">3. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-03.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    The potatoz
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div data-wow-delay="0s" className="wow fadeInUp fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">4. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-04.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Sybil samurai
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div data-wow-delay="0s" className="wow fadeInUp fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">5. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-05.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Máchine
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div data-wow-delay="0s" className="wow fadeInUp fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">6. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-06.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Neo Tokyo
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div data-wow-delay="0s" className="wow fadeInUp fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">7. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-07.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Cityzeen
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div data-wow-delay="0s" className="wow fadeInUp fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">8. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-08.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Mutan Hounds
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div data-wow-delay="0s" className="wow fadeInUp fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">9. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-01.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    The art pixie
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="widget-content-inner" style={{ display: `${activeIndex === 2 ? "block" : "none"}` }}>
                                                <div className="widget-table-ranking">
                                                    <div className="table-ranking-heading">
                                                        <div className="column1">
                                                            <h3>Collection</h3>
                                                        </div>
                                                        <div className="column2">
                                                            <h3>Volume</h3>
                                                        </div>
                                                        <div className="column">
                                                            <h3>24h %</h3>
                                                        </div>
                                                        <div className="column">
                                                            <h3>7d %</h3>
                                                        </div>
                                                        <div className="column">
                                                            <h3>Floor price</h3>
                                                        </div>
                                                        <div className="column">
                                                            <h3>Owners</h3>
                                                        </div>
                                                        <div className="column">
                                                            <h3>Items</h3>
                                                        </div>
                                                    </div>
                                                    <div className="table-ranking-content">
                                                        <div className="fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">1. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-01.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Biao Family
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />31,673.31
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div className="fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">2. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-02.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Xtreme Pixels
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div className="fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">3. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-03.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    The potatoz
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div className="fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">4. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-04.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Sybil samurai
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div className="fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">5. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-05.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Máchine
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div className="fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">6. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-06.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Neo Tokyo
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div className="fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">7. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-07.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Cityzeen
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div className="fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">8. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-08.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    Mutan Hounds
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                        <div className="fl-row-ranking">
                                                            <div className="td1">
                                                                <div className="item-rank">9. </div>
                                                                <div className="item-avatar">
                                                                    <img src="/assets/images/box-item/rank-01.jpg" alt="" />
                                                                </div>
                                                                <div className="item-name">
                                                                    The art pixie
                                                                </div>
                                                            </div>
                                                            <div className="td2">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />7,080.95
                                                                </h6>
                                                            </div>
                                                            <div className="td3 danger">
                                                                <h6>-39.75%</h6>
                                                            </div>
                                                            <div className="td4 warning">
                                                                <h6>+340.53%</h6>
                                                            </div>
                                                            <div className="td5">
                                                                <h6 className="price gem">
                                                                    <i className="icon-gem" />9,34
                                                                </h6>
                                                            </div>
                                                            <div className="td6">
                                                                <h6>69.9k</h6>
                                                            </div>
                                                            <div className="td7">
                                                                <h6>10.1k</h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="widget-pagination">
                                        <ul className="justify-center">
                                            <li>
                                                <Link href="#"><i className="icon-keyboard_arrow_left" /></Link>
                                            </li>
                                            <li>
                                                <Link href="#">1</Link>
                                            </li>
                                            <li>
                                                <Link href="#">2</Link>
                                            </li>
                                            <li className="active">
                                                <Link href="#">3</Link>
                                            </li>
                                            <li>
                                                <Link href="#">4</Link>
                                            </li>
                                            <li>
                                                <Link href="#">...</Link>
                                            </li>
                                            <li>
                                                <Link href="#"><i className="icon-keyboard_arrow_right" /></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="side-bar">
                    <div className="widget widget-recently">
                        <h5 className="title-widget">Largest Purchases</h5>
                        <div className="card-small-main">
                            <img src="assets/images/blog/sidebar-05.jpg" alt="" />
                            <div className="card-bottom">
                                <h5><Link href="#">Gucci Box</Link></h5>
                                <span className="date">16hr ago</span>
                            </div>
                        </div>
                        <div className="card-small">
                            <div className="author">
                                <img src="assets/images/blog/sidebar-06.jpg" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Razer Box</Link></h6>
                                    <p><Link href="#">$100</Link></p>
                                </div>
                            </div>
                            <span className="date">Mon, 08 May </span>
                        </div>
                        <div className="card-small">
                            <div className="author">
                                <img src="assets/images/blog/sidebar-07.jpg" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Apple Box</Link></h6>
                                    <p><Link href="#">$300</Link></p>
                                </div>
                            </div>
                            <span className="date">Mon, 08 May </span>
                        </div>
                        <div className="card-small">
                            <div className="author">
                                <img src="assets/images/blog/sidebar-08.jpg" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Movie Box</Link></h6>
                                    <p><Link href="#">$200</Link></p>
                                </div>
                            </div>
                            <span className="date">Mon, 08 May </span>
                        </div>
                    </div>


                    <div className="widget widget-history">
                        <div className="flex items-center justify-between">
                            <h5 className="title-widget">Live Purchases</h5>
                            <Link className="see-all" href="#">See all</Link>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Pokemon Box</Link></h6>
                                    <span><Link href="#">$300</Link></span>
                                </div>
                            </div>
                            <span className="time">Just now</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-02.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Apple Box</Link></h6>
                                    <span><Link href="#">$200</Link></span>
                                </div>
                            </div>
                            <span className="time">1hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-03.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Designer Box</Link></h6>
                                    <span><Link href="#">$150</Link></span>
                                </div>
                            </div>
                            <span className="time">2hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-04.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Gucci Box</Link></h6>
                                    <span><Link href="#">$300</Link></span>
                                </div>
                            </div>
                            <span className="time">4hr ago</span>
                        </div>
                        <div className="widget-creators-item flex items-center">
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Razer Box</Link></h6>
                                    <span><Link href="#">@100</Link></span>
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
                                    <h6><Link href="#">Michael Burns</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">2. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-02.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Brooklyn Simmons</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">3. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-03.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Rhys James</Link></h6>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center mb-20">
                            <div className="order">4. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-04.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Ash Roggins</Link></h6>
                                    <span><Link href="#">@themes</Link></span>
                                </div>
                            </div>
                        </div>
                        <div className="widget-creators-item flex items-center">
                            <div className="order">5. </div>
                            <div className="author flex items-center flex-grow">
                                <img src="assets/images/avatar/avatar-small-01.png" alt="" />
                                <div className="info">
                                    <h6><Link href="#">Tom Sons</Link></h6>
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
