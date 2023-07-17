import  React,{ useState } from 'react'
import './NavbarStyles.css'
import {FaBars,FaTimes} from 'react-icons/fa'
import { GiCarWheel } from 'react-icons/gi'
import { FaFacebookF,FaInstagram} from 'react-icons/fa'
import { Link } from 'react-scroll'


const Navbar = () => {
    const [nav , setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setSlide(!slide)
    }

    const [slide, setSlide]= useState(false)
    // const handleslide = () => setSlide(!slide)




  return (
    <div className='navbar'> 
        <div className="cotainer">
            <div className={slide ? 'logo slide-right':'logo'}>
                <h3>Race.</h3>
            </div>
            <ul className={nav ? 'nav-menu active':'nav-menu'}>
            
                <li><a href="/"><Link activeClass="active" to="power" spy={true} smooth={true} offset={50} duration={500}>Power</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="speed" spy={true} smooth={true} offset={50} duration={500}>Speed</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="handling" spy={true} smooth={true} offset={50} duration={500}>Handling</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="options" spy={true} smooth={true} offset={50} duration={500}>Options</Link></a></li>
                <li><a href="/"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></a></li>

                    <div className='mobile-menu'>
                        <button>Shop</button>
                        <button>Account</button>

                        <div className="socail-icons">
                          <FaFacebookF className='icons'/>
                          <FaInstagram className='icons'/>
                          <GiCarWheel className='icons'/>
                        </div>
                    </div>
            </ul>
            <ul className="nav-menu hide">
                <li><a href="/">Shop</a></li>
                <li><a href="/">Account</a></li>
            </ul>

           {/* FaBars */}
            <div className="hamporger"onClick={handleNav}>
            {nav ? (<FaTimes size={20} style={{ color: '#ffffff' }} />) : (<FaBars style={{ color: '#ffffff' }} size={20} />)}
           
            </div>

        </div>
    </div>
  )
}

export default Navbar

