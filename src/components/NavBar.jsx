import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants'

const NavBar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full" >
        <nav className="w-full flex justify-between max-c" >
          <a href="/">
            <img src={headerLogo} alt="logo" width={130} height={29} />
          </a>

          <ul className="flex justify-center items-center gap-24 max-lg:hidden">
            {
              navLinks.map((item, index) =>
                <li key={index} className="relative contain-link">
                  <a className="font-montserrat font-[600] leading-normal text-slate-gray link" href={item.href}>{item.label}</a>
                </li>
              )
            }
          </ul>

          <div className="hidden max-lg:block">
            <img width={25} height={25} src={hamburger} alt="hamburger" />
          </div>
        </nav>
    </header>
  )
}

export default NavBar