import React from "react";

const Footer = () => {
  return (
    <footer className="sm:footer-horizontal bg-black text-base-content p-10">
      <div className="footer  md:flex justify-around">
        <aside>
          <p className="text-2xl text-white font-bold">
            Career Hub
         </p>
           <p className="text-[#FFFFFFB3] my-4">
              There are many variations of passages of Lorem Ipsum , but the <br />
              majority have suffered alteration in some form.
            </p>
          <img src="https://i.ibb.co/C31dkY2q/social.png" alt="" />
        </aside>
        <nav className="text-[#FFFFFFB3]">
          <h6 className="text-xl text-white">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest news</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav className="text-[#FFFFFFB3]">
          <h6 className="text-xl text-white">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav className="text-[#FFFFFFB3]">
          <h6 className="text-xl text-white">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav className="text-[#FFFFFFB3]">
          <h6 className="text-xl text-white">Contact</h6>
          <a className="link link-hover">524 Broadway, NYC</a>
          <a className="link link-hover">+1777-978-5570</a>
         
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
