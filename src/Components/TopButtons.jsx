import React from 'react'

const TopButtons = ({setQuery}) => {
    const cities = [
    {
        id: 1,
        title: 'New York',
    },
    {
        id: 2,
        title: 'Accra',
    },
    {
        id: 3,
        title: 'Delhi',
    },
    {
        id: 4,
        title: 'Abuja',
    },
    {
        id: 5,
        title: 'Kumasi',
    },

]
  return (
    <div className="flex items-center justify-around pt-5">
     {cities.map((city) => (
        <button
        key={city.id}
        className="text-lg font-medium"
        onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
     ))}
    </div>
  )
}

export default TopButtons
