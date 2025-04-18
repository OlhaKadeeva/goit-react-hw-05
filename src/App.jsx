import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation.jsx";
// import HomePage from "./pages/HomePage";
// import MoviesPage from "./pages/MoviesPages";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import NotFoundPage from "./pages/NotFoundPage";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPages.jsx"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
