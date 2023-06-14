import { Link } from "react-router-dom";
import { useTitle } from "../hooks/useTitle"

export const NotFound = () => {
useTitle('404');

  return (
  <section className="notfound">
      <h2 className="notfound-title">404 | Page Not Found</h2>
      <img className="notfound-img" src="/assets/not-found.jpg" alt="pagenotfound" />
    {/* image credits:  unsplashby@pantiumforce */}
       <Link to='/' className='notfound-btn' >Back To Home</Link>
  </section>
  )
}
