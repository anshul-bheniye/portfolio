 import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="brand">
        <Link to='/'>
          <div><img src="/assets/abcv-logo.png" alt="logo" /></div>
          <span>Anshul Bheniye</span>
        </Link>
      </div>
      <nav>
        <NavLink to='/' end>{`// Home `}</NavLink>
        <NavLink to='/projects'>{`// Projects `}</NavLink>
        <NavLink to='/blogs'>{`// Blogs `}</NavLink>
      </nav>
    </header>
  )
}
