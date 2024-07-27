import React from 'react'
import  '../Styles/footer.css'
function Footer() {
  return (
      <div className='container3 mt-16'> 
   <section className="deneb_cta">
  <div className="container mx-auto px-4">
    <div className="cta_wrapper py-16">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-7/12">
          <div className="cta_content">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">Want to watch moives?</h3>
            <p className="text-lg lg:w-[80%] sm:w-[w-70%]  text-gray-700">Curabitur libero eros, efficitur sit amet sodales tincidunt, aliquet et leo sed ut nibh feugiat, auctor enim quis.</p>
          </div>
        </div>
        <div className="w-full lg:w-5/12 mt-6 lg:mt-0">
          <div className="button_box text-center lg:text-right">
            <a href="#" className="btn btn-warning bg-[#5b58f4] hover:bg-[#2C2A97] text-white py-2 px-4 rounded">Join Premium</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<footer className="deneb_footer bg-cover mx-auto " style={{ backgroundImage: 'url(http://demo.tortoizthemes.com/deneb-html/deneb-ltr/assets/images/footer_bg.png)' }}>
  <div className="widget_wrapper py-16 w-[80%] mx-auto">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/12 md:w-6/12 mb-8 md:mb-0">
          <div className="widget widget_about mr-3">
            <div className="widget_title mb-4">
              <img src="https://m.media-amazon.com/images/G/01/digital/video/DVUI/favicons/apple-touch-icon-57x57.png" className="img-fluid w-16" alt="Logo" />
            </div>
            <p className="text-gray-700 mb-4   footerpara  ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem minus doloribus hic similique. Culpa provident quos unde, nemo non earum.</p>
            <ul className="social flex space-x-4 ">
              <li class="hover:bg-[#d7b16b5b] group rounded-full w-[2rem] h-[2rem] flex justify-center items-center"><a href="#" className="text-gray-500 group-hover:text-orange-700 "><i className="fab fa-facebook-f"></i></a></li>
              <li class="hover:bg-[#d7b16b5b] group rounded-full w-[2rem] h-[2rem] flex justify-center items-center"  ><a href="#" className="text-gray-500  group-hover:text-orange-700   "><i className="fab fa-twitter"></i></a></li>
              <li class="hover:bg-[#d7b16b5b] group rounded-full w-[2rem] h-[2rem] flex justify-center items-center"><a href="#" className="text-gray-500 group-hover:text-orange-700"><i className="fab fa-instagram"></i></a></li> 
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-4/12 md:w-6/12 mb-8 md:mb-0">
          <div className="widget widget_link">
            <div className="widget_title mb-4">
              <h4 className="text-xl font-bold">Links</h4>
            </div>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-700 hover:underline">About Us</a></li>
              <li><a href="#" className="text-gray-700 hover:underline">Services</a></li>
              <li><a href="#" className="text-gray-700 hover:underline">Portfolio</a></li>
              <li><a href="#" className="text-gray-700 hover:underline">Blog</a></li>
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-4/12 md:w-6/12 mb-8 md:mb-0 sm:mt-14 contactus">
          <div className="widget widget_contact">
            <div className="widget_title mb-4">
              <h4 className="text-xl font-bold">Contact Us</h4>
            </div>
            <div className="contact_info space-y-4">
              <div className="single_info flex items-center">
                <div className="icon text-yellow-500 mr-4">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="info">
                  <p><a href="tel:+919246147999" className="text-gray-700 hover:underline">1800-121-3637</a></p>
                  <p><a href="tel:+919246147999" className="text-gray-700 hover:underline">+91 924-614-7999</a></p>
                </div>
              </div>
              <div className="single_info flex items-center">
                <div className="icon text-yellow-500 mr-4">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info">
                  <p><a href="mailto:info@deneb.com" className="text-gray-700 hover:underline">info@amazon.com</a></p>
                  <p><a href="mailto:services@deneb.com" className="text-gray-700 hover:underline">services@amazon.com</a></p>
                </div>
              </div>
              <div className="single_info flex items-center">
                <div className="icon text-yellow-500 mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info">
                  <p className="text-gray-700">125, Park street aven, Brocklyn,<span className="block">Newyork.</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright_area bg-gray-800 py-4">
    <div className="container mx-auto px-4">
      <div className="text-center text-white">
        <p>Copyright &copy; 2020 All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>
</div>  
  )
}

export default Footer