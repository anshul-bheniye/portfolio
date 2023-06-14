import {Routes, Route} from 'react-router-dom';
import {Home, Projects, Blogs, NotFound} from '../pages';

export const AllRoutes = () => {
  return (
    <main>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='projects' element={<Projects />}></Route>
            <Route path='blogs' element={<Blogs />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    </main>
  )
}
