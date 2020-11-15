import React from "react";
import "./FooterStyle.css"

export default class FooterCategories extends React.Component {
  render() {
    return (

      <div className="parentDiv">
        <div className="childDiv">
      
          <div className="FooterCategoriesBody" >
            <section className="Sections"> <span className="sp">Popular Categories</span>
          <ul>
                <li className="List"><a className="anch" rel data-aut-id href="/cars_c84">Cars</a>
                </li>
                <li className="List"><a className="anch" rel data-aut-id href="/apartments-flats_c1723">Flats for rent</a>
                </li>
                <li className="List"><a className="anch" rel data-aut-id href="/jobs_c4">Jobs</a>
                </li>
                <li className="List"><a className="anch" rel data-aut-id href="/mobile-phones_c1453">Mobile Phones</a>
                </li>
              </ul>
            </section>
            <section className="Sections"><span className="sp">Trending Searches</span>
        <ul>
                <li className="List"><a className="anch" rel data-aut-id href="/motorcycles_c81">Bikes</a>
                </li>
                <li className="List"><a className="anch" rel data-aut-id href="/watches_c1970">Watches</a>
                </li>
                <li className="List"><a className="anch" rel data-aut-id href="/items/q-books">Books</a>
                </li>
                <li className="List"><a className="anch" rel data-aut-id href="/items/q-dogs">Dogs</a>
                </li>
              </ul>
            </section>
            <section className="Sections"><span className="sp">About us</span>
        <ul>
                <li className="List"><a href="https://www.olxgroup.com/" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id>About OLX Group</a>
                </li>
                <li className="List"><a href="https://blog.olx.com.pk/" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id>OLX Blog</a>
                </li>
                <li className="List"><a href="https://help.olx.com.pk/hc/en-us/requests/new?ticket_form_id=29191" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id>Contact Us</a>
                </li>
                <li className="List"><a href="https://www.surveygizmo.com/s3/4910980/WP-Business-Form?source=Website" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id>OLX for Businesses</a>
                </li>
              </ul>
            </section>
            <section className="Sections"><span className="sp">OLX</span>
        <ul>
                <li className="List"><a href="https://help.olx.com.pk/hc/en-us" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id>Help</a>
                </li>
                <li className="List"><a className="anch" rel data-aut-id href="/sitemap/most-popular">Sitemap</a>
                </li>
                <li className="List"><a href="https://help.olx.com.pk/hc/en-us/categories/360000044302-Legal-Privacy-information" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id>Legal &amp; Privacy information</a>
                </li>
              </ul>
            </section>
            <section>
              <div>
                <span className="followSec">Follow Us</span>
                <div>
                  <a href="https://www.facebook.com/olxpakistan" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id><span className="_164_b" role="listbox" tabIndex={0} id data-aut-id><svg width="25px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-77aaa" d="M512 85.325c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.605c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM616.789 301.133v57.6h-61.312c-15.403 0-28.8 14.848-28.8 31.616v0 63.147h90.069v53.845h-90.069v215.509h-67.115v-215.509h-78.592v-53.845h78.592v-74.325c0-42.752 34.517-78.037 76.672-78.037v0h80.555z" /></svg></span></a>
                  <a href="https://twitter.com/OLX_Pakistan" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id><span className="_164_b" role="listbox" tabIndex={0} id data-aut-id><svg width="25px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-77aaa" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM600.499 335.040c25.728 0 51.499 9.6 67.584 25.728 16.085 0 45.013-9.643 57.899-19.328-6.443 19.328-25.771 41.813-38.613 51.499 22.528 0 44.971-9.685 51.456-12.885-12.843 16.085-25.728 32.171-45.013 45.056 6.4 144.768-109.397 263.851-260.608 263.851-51.499 0-99.755-12.885-148.011-38.656 64.341 9.685 119.040-22.528 135.125-38.613-41.856 0-80.427-35.371-83.669-61.141 9.685 0 28.971 3.243 38.656-3.2-54.699-12.885-70.784-54.699-70.784-86.869 9.643 9.685 32.128 9.685 41.813 9.685-32.171-19.328-54.699-70.827-28.971-119.040 48.256 57.899 122.283 90.069 193.067 93.269-3.243-6.4-3.243-12.885-3.243-19.285 0-48.256 41.856-90.069 93.312-90.069z" /></svg></span></a>
                  <a href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id><span className="_164_b" role="listbox" tabIndex={0} id data-aut-id><svg width="25px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-77aaa" d="M512 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM382.605 321.86l311.125 190.123-311.125 190.165v-380.288z" /></svg></span></a>
                  <a href="https://www.instagram.com/olx.pakistan/" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id><span className="_164_b" role="listbox" tabIndex={0} id data-aut-id><svg width="25px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-77aaa" d="M511.979 85.321c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.605 0-426.667-191.019-426.667-426.667s191.061-426.667 426.667-426.667zM511.979 150.601c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429 199.637 0 361.429-161.792 361.429-361.429 0-199.595-161.792-361.387-361.429-361.387zM619.721 291.247c70.784 0 128.384 57.643 128.384 128.469v0 184.619c0 70.784-57.6 128.427-128.384 128.427v0h-215.424c-70.827 0-128.384-57.643-128.384-128.427v0-184.619c0-70.827 57.557-128.469 128.384-128.469v0zM619.721 335.791h-215.424c-46.293 0-83.883 37.632-83.883 83.925v0 184.619c0 46.293 37.589 83.925 83.883 83.925v0h215.424c46.251 0 83.883-37.632 83.883-83.925v0-184.619c0-46.293-37.632-83.925-83.883-83.925v0zM512.021 405.248c63.659 0 115.456 49.195 115.456 109.653 0 59.904-50.688 106.752-115.456 106.752-63.659 0-115.499-49.195-115.499-109.653 0-59.861 50.688-106.752 115.499-106.752zM512.021 444.885c-41.813 0-75.819 31.403-75.819 70.016 0 37.291 35.413 70.016 75.819 70.016s75.776-32.725 75.776-70.016c0-38.613-34.005-70.016-75.776-70.016zM630.857 358.852c23.296 0 43.008 19.712 43.008 43.008s-19.712 43.008-43.008 43.008c-23.296 0-43.008-19.712-43.008-43.008s19.712-43.008 43.008-43.008zM630.857 386.927c-8.661 0-15.019 6.272-15.019 14.933 0 8.704 6.357 14.976 15.019 14.976s14.976-6.272 14.976-14.976c0-8.661-6.315-14.933-14.976-14.933z" /></svg></span></a>
                </div>
                <div>
                  <a href="https://play.google.com/store/apps/details?id=com.olx.pk" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id><picture><source type="image/webp" srcSet="https://statics.olx.com.pk/external/base/img/appstore.webp" /><img src="https://statics.olx.com.pk/external/base/img/appstore.png" alt="Download OLX in the Android Play Store" className="androLink" /></picture></a>
                  <a href="https://itunes.apple.com/app/olx-pakistan/id1119081665?mt=8" target="_blank" rel="noopener noreferrer" className="anch" data-aut-id><picture><source type="image/webp" srcSet="https://statics.olx.com.pk/external/base/img/playstore.webp" /><img src="https://statics.olx.com.pk/external/base/img/playstore.png" alt="Download OLX for iOS in the Apple App Store" className="androLink" /></picture></a>
                </div>
              </div>
            </section>
          </div>
          </div>
          </div>
    )
  }
}