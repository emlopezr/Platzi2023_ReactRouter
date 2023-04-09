import { HashRouter, Routes, Route } from 'react-router-dom'
import Menu from './components/Menu.jsx';
import HomePage from './components/HomePage.jsx';
import BlogPage from './components/BlogPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import BlogPost from './components/BlogPost.jsx';

const App = () => {
    return (
        <HashRouter>
            {/* Se recomienda poner el menú en esta zona */}
            <Menu />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />}>
                    <Route path=":slug" element={<BlogPost />} />
                </Route>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="*" element={<p>Página no encontrada</p>} />
            </Routes>
        </HashRouter>
    )
}

export default App
