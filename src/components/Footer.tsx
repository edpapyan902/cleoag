import { NavLink } from "react-router-dom";

import Assets from "../assets/assets";

const navigation = [
    { name: "Home", to: "/", current: true, exact: true },
    { name: "What is Nu", to: "/what-is-nu", current: false },
    { name: "How it looks", to: "/how-it-looks", current: false },
    { name: "Life long learning", to: "/life-long-learning", current: false },
    { name: "Pricing", to: "/pricing", current: false },
];

const Footer = () => {
    return (
        <div className="bg-black text-white">
            <div className="px-4 lg:container lg:mx-auto pt-10">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="flex items-center justify-between">
                            <div className="flex-shrink-0">
                                <div className="flex items-center">
                                    <img
                                        className="inline-block mr-4 w-11"
                                        src={Assets.images.svgLogo}
                                        alt="Nu Logo"
                                    />
                                    <span className="font-mont-semibold text-2xl">nu.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <h6 className="font-mont-semibold text-sm mt-10">Address</h6>
                        <p className="mt-3 text-xs">
                            nu. AG <br/>
                            Stampfenbachstrasse 57 <br/>
                            8006 Zürich <br/>
                            Switzerland
                        </p>

                        <h6 className="font-mont-semibold text-sm mt-10">Email</h6>

                        <p className="mt-3 text-xs">
                            info@nu-lxp.ch
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-3">
                        <div className="mt-10">
                            {navigation.map((item, index) => (
                                <NavLink
                                    key={index}
                                    exact={item.exact}
                                    to={item.to}
                                    activeClassName="font-mont-semibold"
                                    className="block py-2 text-xs">
                                    {item.name}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 mt-10 md:mt-0">
                        
                    </div>
                </div>
            </div>
            <div className="mt-20 text-center text-sm">
                © 2021 nu. AG, All Rights Reserved
            </div>
        </div>
    );
};

export default Footer;