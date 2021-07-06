import React from 'react'
import CityAxios from './axios/CityAxios'
import LatLonAxios from './axios/LatLonAxios'
import { GeoContextProvider } from './context/GeoContext'
import DateBuilder from './date/DateBuilder'
import GlobalStyle from './style/globalStyles'

const App = () => {
  return (
    <div>
      <GeoContextProvider>
        <LatLonAxios/>
      </GeoContextProvider>
       <DateBuilder/>
       <CityAxios/>
       <GlobalStyle/>
    </div>
  )
}

export default App