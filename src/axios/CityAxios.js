import React, { useState } from 'react'

const api = {
    base: 'http://api.openweathermap.org/data/2.5/',
    key:  '33951dec42b4a4f440403c96a0228ab2'
  }

const CityAxios = () => {
  const [ query, setQuery ] = useState('');
  const [ cityW, setCityW ] = useState('');

 

  const search = evt => {
    if(evt.key === 'Enter'){
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res => res.json())
      .then(
        result =>{
        setQuery(''); 
        setCityW(result);
        console.log(`result`, result)
      });
    }
  }

  return (
    <div>
      <input
      onChange={e => setQuery(e.target.value)}
      value={query}
      onKeyPress={search}
      />
      <p>{cityW.name}</p>
    </div>
  )
}

export default CityAxios;