import React from 'react'
import { Navbar } from '../../ui/components/Navbar'
import { Navigate, Route, Routes } from "react-router-dom";
import { DcPage, HeroPage, MarvelPages, SearchPage } from '../pages';
import { AsociacionesPage } from '../pages/AsociacionesPage';
export const HeroesRoutes = () => {
  return (
  <>
  <Navbar/>
<div className='container'>
  <Routes>
        <Route path="marvel" element={<MarvelPages />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="hero/:id" element={<HeroPage />} />
        <Route path="/" element={<AsociacionesPage/>} />
      </Routes>

</div>

  </>

  )
}
