import React from 'react'

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
      <div>{dateBuilder(new Date())}</div>
    </div>
  )
}

export default DateBuilder
