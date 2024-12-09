import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router, Routes, Route
} from 'react-router-dom';
import Navbar from './component/navbar'
import Footer from './component/footer';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import './App.css';
import ByIngredient from './pages/ByIngredient';
import RecipeDetails from './pages/RecipeDetails';

const Home = lazy(() => import('./pages/home'));
const Settings = lazy(() => import('./pages/settings'));
const Login = lazy(() => import('./pages/login'));
const SignUp = lazy(() => import('./pages/signup'));
const Recipes = lazy(() => import('./pages/recipes'));
const App = () => {

  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className='flex justify-center items-center text-lg'>Loading</div>}>
        <div className="container main">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path='/recipes' element={<Recipes />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/recipe/:recipeId' element={<RecipeDetails />} />
            <Route path='/:ingredient' element={<ByIngredient />} />
          </Routes>
        </div>
      </Suspense>
      <SpeedInsights />
      <Analytics />
      <Footer />
    </Router>
  );
}



export default App;