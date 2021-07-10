import React from 'react'
import {DIV} from '../style/Styled.styles'

const DateBuilder = () => {

  const dateBuilder = (d) => {
    let months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December' ]
    let days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]

    let day = days[d.getDay()]
    let date = d.getDate()
    let month = months[d.getMonth()]
    let year = d.getFullYear()

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div>
      <DIV>{dateBuilder(new Date())}</DIV>
    </div>
  )
}

export default DateBuilder
