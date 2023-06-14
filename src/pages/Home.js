import { useTitle } from "../hooks/useTitle"
 
 const icons = [{'id':1, 'image':'/assets/html.svg', 'name':'html' },
 {'id':2, 'image':'/assets/css.svg', 'name':'css' },
 {'id':3, 'image':'/assets/js.svg', 'name':'js' }, 
 {'id':4, 'image':'/assets/r.svg', 'name': 'react'},
 {'id':5, 'image':'/assets/redux.svg', 'name': 'redux'},
 {'id':6, 'image':'/assets/tailwind.svg', 'name':'tailwind' }, 
 {'id':7, 'image':'/assets/git.svg', 'name':'git' },
 {'id':8, 'image':'/assets/github.svg', 'name':'github' },
 {'id':9, 'image':'/assets/postman.svg', 'name': 'postman'}];

export const Home = () => {
  useTitle('Home');
  return (
    <section className="home">
      <div className="container">
        <img className="hero" src="/assets/anshulbheniye.jpg" alt="anshul-bheniye" rel="me" />
      <div className="rs">
        <p>I'm a skilled React developer with expertise in building dynamic and interactive user interfaces using React's component-based architecture, coupled with my proficiency in HTML and CSS for creating visually appealing designs. With a focus on clean code and collaboration, I'm dedicated to delivering exceptional web applications that provide an outstanding user experience.</p>
      </div>
    </div>

    <div className="tech">
      <div className="tech-title">
        <p>TECHNOLOGIES I'VE WORKED WITH:</p>
      </div>
      <div className="icon-holder">
        {icons.map((icon) => (
          <div key={icon.id} >
            <span>
              <img className="icon" src={icon.image} alt={icon.name} />
            </span>
          </div>
        ))} 
      </div>
    </div>
    </section>
  )
}
