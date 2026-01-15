import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home'
import { Suspense, lazy } from "react";

const Movie = lazy(() => import('./pages/Movie/Movie'))

const App = () => {
  return (
    <BrowserRouter>
        <div className={"app"}>
            <header className={"app_header"}>
                <h1 className={"app_title"}>Kinoreel</h1>
            </header>

            <main className={"app_content"}>
                <Suspense fallback={<p>Загрузка страницы...</p>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/movie/:id" element={<Movie />} />
                    </Routes>
                </Suspense>
            </main>
        </div>
    </BrowserRouter>
  )
}

export default App
