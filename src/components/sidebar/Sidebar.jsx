import './Sidebar.css'

import React,  {useState} from 'react'
import Logo from '../../assests/logo.png'
const Sidebar = () => {

    const[toggle, showMenu] = useState(false)
    

  const close = ()=>{
    showMenu(false)
  }

    return(
       <>
        <aside className={toggle? "aside show-menu" : "aside"}>
             <a href="#home" className='nav__logo'>
                <img className='foo' src={Logo} alt="logo text" />
             </a>
             
             <nav className='nav'>
                <div className="nav__menu">
                    <ul className="nav__list">

                        <li className="nav__item" > 
                            <a href="#home" className='nav__link'>
                                <i className="icon-home" onClick={close}></i>
                            </a>
                        </li>
                        
                        <li className="nav__item"  >
                            <a href="#about" className='nav__link'>
                                <i className="icon-user-following" onClick={close}></i>
                            </a>
                        </li>

                        <li className="nav__item"  >
                            <a href="#services" className='nav__link'>
                                 <i className="icon-briefcase" onClick={close}></i>
                            </a>
                        </li>

                        <li className="nav__item"  >
                            <a href="#resume" className='nav__link'>
                                 <i className="icon-graduation" onClick={close}></i>
                            </a>
                        </li>

                        <li className="nav__item"  >
                            <a href="#work" className='nav__link'>
                                  <i className="icon-layers" onClick={close}></i>
                            </a>
                        </li>

                        <li className="nav__item"  >
                            <a href="#blog" className='nav__link'>
                                   <i className="icon-note" onClick={close}></i>
                            </a>
                        </li>

                        <li className='nav__item'  >
                            <a href="#contact" className='nav__link'>
                                   <i className="icon-bubble" onClick={close}></i>
                            </a>
                        </li>

                    </ul>
                </div>
             </nav>

             <div className="nav__footer">
                <span className="copyright">&copy; 2023 - 2024.</span>
             </div>
        </aside>

        <div className={toggle? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={()=> showMenu(!toggle)}>
            <i className="icon-menu"></i>
        </div>
       </>
    )
}

export default Sidebar