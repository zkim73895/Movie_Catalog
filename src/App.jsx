import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'

const App = () => {
  return (
    <BrowserRouter>
        <div className={"app"}>
            <header className={"app_header"}>
                <h1 className={"app_title"}>Каталог фильмов</h1>
            </header>

            <main className={"app_content"}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:id" element={<Movie />} />
                </Routes>
            </main>

            <footer className={"app_footer"}>
                <span>2026</span>
            </footer>
        </div>
    </BrowserRouter>
  )
}

export default App
