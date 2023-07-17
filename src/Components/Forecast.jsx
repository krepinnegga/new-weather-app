import React from 'react'
import { iconUrlFromCode } from "../Services/WeatherServices";

const Forecast = ({title, items}) => {
  return (
    <div className='px-20'>
      <div className="flex items-center justify-start mt-6">
        <p className=" font-medium uppercase">{title}</p>
      </div>
      <hr className="my-1" />

      <div className="flex flex-row items-center  justify-between ">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center my-3"
          >
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast
