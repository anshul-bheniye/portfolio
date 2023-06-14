import { useTitle } from "../hooks/useTitle";

export const Blogs = () => {
  useTitle('Blogs');

  const blogs = [{"id": 1, "name":"Function Scope", "description" : "Confused why variable you have defined is showing error? Let us learn about function scope in detail.", "jump": "https://anshulbheniye.hashnode.dev/function-scope", "image": "/assets/blog-one.jpg" },
   {"id": 2, "name":"Coming Soon", "description" : "I will update this section as soon as I write one and I am thinking of writing one", "image": "/assets/blog-temp.jpg" }, 
   {"id": 3, "name":"Coming Soon", "description" : "I will update this section as soon as I write one and I am thinking of writing one",  "image": "/assets/blog-temp.jpg" },];

  return (
    <section className="blogs">
        <h1>I write too, here are blogs</h1>
      <div>
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <img className="blog-img" src={blog.image} alt={blog.name} />
            <div className="blog-content">
              <a href={blog.jump} target="_blank" rel="noreferrer"><h2>{blog.name}</h2></a>
              <p>{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
