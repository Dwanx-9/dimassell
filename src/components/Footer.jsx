import React from "react";

const Footer = () => {
  return (
    // <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
    //   <div className="container p-12 flex justify-between">
    //     <span>DX1</span>
    //     <p className="text-slate-600">All rights reserved.</p>
    //   </div>
    // </footer>
    <footer class="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">

    <div className="container p-12 flex justify-between">
   
          <ul class="container p-12 flex justify-between text-slate-600">
          <span>DX1</span>
            <li>
              <a href="#" class="quicklink-link">Faq</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Help center</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Terms of use</a>
            </li>

            <li>
              <a href="#" class="quicklink-link">Privacy</a>
            </li>

          </ul>
          <div>
          <ul class="social-list">
            
            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-pinterest"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" class="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

          </ul>
      </div>
      </div>


  </footer>
  );
};

export default Footer;