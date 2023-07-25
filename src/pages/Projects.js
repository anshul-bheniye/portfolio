import { useTitle } from "../hooks/useTitle";

const projects = [{'id': 1, 'name': 'Task Keeper', 'image': '/assets/taskeeper.jpg', 'description': 'Keep all your tasks together with four themes and integrated local storage', 'code': 'https://github.com/anshul-bheniye/task-keeper', 'live': 'https://task-keeper-ab.netlify.app/'},
{'id': 2, 'name': 'Movies Repo', 'image': '/assets/moviesrepo.jpg', 'description': 'Repository for all upcoming, popular and top rated movies', 'code': 'https://github.com/anshul-bheniye/movie-repo', 'live': 'https://moviesrepo.netlify.app/'},{'id': 3, 'name': 'Camping Gears', 'image': '/assets/cg.png', 'description': 'Web app that sells camping gears', 'code': 'https://github.com/anshul-bheniye/camping_gears', 'live': 'https://camping-gears.netlify.app/'},];

export const Projects = () => {
useTitle('Projects');

  return (
    <section className="project">
        <h1>I have built {projects.length} web apps till now!</h1>
      <div className="project-list">
          {projects.map((project)=> (
            <section key={project.id} className="card">
              <img className="card-img" src={project.image} alt={project.name} />
              <div className="card-body">
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <div className="card-button">
                  <div><a className="card-code" href={project.code} target="_blank" rel='noreferrer'>GitHub</a></div>
                  <div><a className="card-app" href={project.live} target="_blank" rel='noreferrer'>Web App</a></div>
                </div>
              </div>
            </section>
          ))}
      </div>
    </section>
  )
}
