import React from 'react'

const Landing = () => {
  const handleClick = (e) => {
    e.preventDefault();
    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className='landing-container'>
      <div className='initial-container'>
        <p className='initials'>SR</p>
      </div>
      <h1 className='name'>Shawn Rice</h1>
      <button onClick={handleClick}><span>See More</span></button>
    </div>
  )
}

export default Landing
