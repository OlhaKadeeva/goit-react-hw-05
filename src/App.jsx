import { Route, Routes, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Navigation from "./components/Navigation.jsx";
import MovieCast from "./components/MovieCast.jsx";
import MovieReviews from "./components/MovieReviews.jsx";
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const MoviesPage = lazy(() => import("./pages/MoviesPage.jsx"));
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
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
