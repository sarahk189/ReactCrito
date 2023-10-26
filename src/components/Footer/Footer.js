import React from 'react'
import img_critoblack from '../../Assets/images/Logo black background.svg'
import img_linesWhiteRight from '../../Assets/images/background-lines-white-right.svg'

const Footer = () => {
  return (
  <footer>
    <div class="container">
        <div class="menu-bars">
            <a href="index.html"><img class= "crito-logo" src={img_critoblack} alt="crito logotype" /></a>
            <button class="menu-bars"><i class="fa-regular fa-bars"></i></button>
        </div>
        <div class="footer-index">
            <div class="row">
                <div class="col-3">
                    <a href="index.html"><img class= "crito-logo" src={img_critoblack} alt="crito logotype" /></a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
                </div>
                <div class="col-1">
                    <h3>Company</h3>
                    <a href="#">About</a>
                    <a href="#">Features</a>
                    <a href="#">Works</a>
                    <a href="#">Career</a>
                </div>
                <div class="col-1">
                    <h3>Help</h3>
                    <a href="#">Customer Support</a>
                    <a href="#">Delivery Details</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div class="col-1">
                    <h3>Resources</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How To - Blog</a>
                    <a href="#">YouTube Playlist</a>
                </div>
                <div class="col-1">
                    <h3>Link</h3>
                    <a href="#">Free eBooks</a>
                    <a href="#">Development Tutorial</a>
                    <a href="#">How To - Blog</a>
                    <a href="#">YouTube Playlist</a>
                </div>

            </div>

            <div class="footer-squiggly">
                <img src={img_linesWhiteRight} alt="Squiggly white lines to the right" />
                </div>
        </div>
    </div>

    <div class="line"></div>
    <div class="container">
        <div class="bottom-footer">
            <div class="trademark">
            <p>© 2023 Crito - Consulting Company Inc. All Rights Reserved.</p>
            </div>
            <div class="social-media">
                <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-square-x-twitter"></i></a>
                <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer