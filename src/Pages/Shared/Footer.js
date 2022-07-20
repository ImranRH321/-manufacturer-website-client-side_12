import React from "react";

const Footer = () => {
  return (
    <footer class="footer p-10 bg-neutral text-neutral-content">
      <div>
        <a class="link link-hover">
          <img
            src="https://htmldemo.net/lukas/lukas/assets/img/logo-light.png"
            alt=""
          />
        </a>
        <p className="w-52 font-2xl font-bold">
          Lukas is the best parts shop for your car accessories. What kind of
          parts do you need you can get here soluta nobis{" "}
        </p>
      </div>
      <div>
        <span class="footer-title">Information</span>
        <hr />
        <a class="link link-hover">Our company</a>
        <a class="link link-hover">Contact us</a>
        <a class="link link-hover">Our services</a>
        <a class="link link-hover">Why We?</a>
      </div>
      <div>
        <span class="footer-title">Quicklink</span>
        <a class="link link-hover">About</a>
        <a class="link link-hover">Blog</a>
        <a class="link link-hover">Shop</a>
        <a class="link link-hover">Contact</a>
      </div>
      <div>
        <span class="footer-title">Support</span>
        <a class="link link-hover">Blog</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Return Policy</a>
      </div>
      <div>
        <span class="footer-title">Store Information</span>
        <a class="link link-hover">
          2005 Stokes Isle Apartment. 896, Washington 10010, USA
        </a>
        <a class="link link-hover">https://example.com</a>
        <a class="link link-hover">(+68) 120034509</a>
      </div>
    </footer>
  );
};

export default Footer;
