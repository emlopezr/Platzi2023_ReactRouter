import { HashRouter, Routes, Route } from 'react-router-dom'
import AuthProvider from "./AuthProvider.jsx";
import Menu from './components/Menu.jsx';
import HomePage from './components/HomePage.jsx';
import BlogPage from './components/BlogPage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import BlogPost from './components/BlogPost.jsx';
import LoginPage from './components/LoginPage.jsx';
import LogoutPage from './components/LogoutPage.jsx';
import AuthRoute from './AuthRoute.jsx';

const App = () => {
    return (
        <HashRouter>
            <AuthProvider>
                <Menu />

                <Routes>
                    <Route path="/login" element={<LoginPage />} />

                    <Route
                        path="/logout"
                        element={
                            <AuthRoute>
                                <LogoutPage />
                            </AuthRoute>
                        }
                    />

                    <Route path="/" element={<HomePage />} />

                    <Route path="/blog" element={<BlogPage />}>
                        <Route path=":slug" element={<BlogPost />} />
                    </Route>

                    <Route
                        path="/profile"
                        element={
                            <AuthRoute>
                                <ProfilePage />
                            </AuthRoute>
                        }
                    />

                    <Route path="*" element={<p>Página no encontrada</p>} />
                </Routes>
            </AuthProvider>
        </HashRouter>
    )
}

export default App
