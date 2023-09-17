import Logo from '../Logo/Logo'
import  s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footer_wrapper}>
          <Logo />

            <div className="options_wrapper">
              {/* в фигурных скобках классы */}
              <div className="buy">
                <ul className="buy_list">
                  <li>Apartment in Dubai</li>
                  <li>House in Dubai</li>
                  <li>Apartments in Dubai</li>
                  <li>Loft in Dubai</li>
                  <li>Penthouse in Dubai</li>
                  <li>Villa in Dubai</li>
                </ul>
              </div>   

              <div className="services">   
                <ul className="services_list">
                  <li>Property management in Dubai, UAE</li>
                  <li>Sell ​​property in Dubai, UAE</li>
                  <li>Rent property in Dubai, UAE</li>
                  <li>Investments in Dubai, UAE</li>
                  <li>Real estate for cryptocurrency in Dubai</li>
                  <li>Moving to Dubai, UAE</li>
                </ul>
              </div>

              <div className="information">
                <ul className="information_list">
                  <li><a href="">Video</a></li>
                  <li><a href="">Podcasts</a></li>
                  <li><a href="">Laws</a></li>
                  <li><a href="">Questions and answers</a></li>
                  <li><a href="">Books</a></li>
                  <li><a href="">Articles</a></li>
                </ul>
              </div>


            </div>


        </div>
      </div>
    </footer>
    
  )
}
