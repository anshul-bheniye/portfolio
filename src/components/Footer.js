 

export const Footer = () => {
  const year = new Date();

  return (
    <footer className="footer">
      <div className="links">
      <a href="https://www.linkedin.com/in/anshul-bheniye" target="_blank" rel="noreferrer"><i className="bi bi-linkedin  icons"></i></a>

      <a href="https://twitter.com/anshul_bheniye" target="_blank"  rel="noreferrer"><i className="bi bi-twitter icons"></i></a>

      <a href="https://github.com/anshul-bheniye" target="_blank"  rel="noreferrer"><i className="bi bi-github icons"></i></a>

      </div>
      <div className="information">
        <p>Copyright  <i className="bi bi-dash-lg"></i>  All Rights Reserved</p>
        <p>{year.getFullYear()} <i className="bi bi-dash-lg"></i> Anshul Bheniye Portfolio  <i className="bi bi-dash-lg"></i>  version 1.0 </p>
      </div>
    </footer>
  )
}
