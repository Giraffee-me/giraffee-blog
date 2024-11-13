import { LuWind } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";

import clear_icon from "../../../public/images/weather/clear.png"
import cloud_icon from "../../../public/images/weather/cloud.png";
import drizzle_icon from "../../../public/images/weather/drizzle.png";
import rain_icon from "../../../public/images/weather/rain.png";
import snow_icon from "../../../public/images/weather/snow.png";


const Weather = () => {

    const inputRef = useRef();

    const [weatherData, setWeatherData] = useState(false)

    const allIcons = {
        "01d": clear_icon,
        "01n": clear_icon,
        "02d": cloud_icon,
        "02n": cloud_icon,
        "03d": cloud_icon,
        "03n": cloud_icon,
        "04d": drizzle_icon,
        "04n": drizzle_icon,
        "09d": rain_icon,
        "09n": rain_icon,
        "10d": rain_icon,
        "10n": rain_icon,
        "13d": snow_icon,
        "13n": snow_icon,
    }

    const search = async (city)=> {
        if (city === "") {
            alert("Please Enter City Name");
            return;
        }

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_API_KEY}`;

            const response = await fetch(url);
            const data = await response.json();

            if(!response.ok){
                alert(data.message);
                console.log(data);
                
                return;
            }

            console.log(data);
            const icon = allIcons[data.weather[0].icon] || clear_icon;
            setWeatherData({
                humidity: data.main.humidity,
                windSpeed: data.wind.speed,
                temperature: Math.floor(data.main.temp),
                location: data.name,
                icon: icon
            })
        } catch (error) {
            setWeatherData(false);
            console.error("Error in fetching weather data.")
        }
    }

    const enterKey = (event)=>{
        if(event.key === "Enter"){
            search(inputRef.current.value)
        }
    }

    useEffect(()=>{
        search("Alexandria");
    },[])

  return (
    <div className="weather">
        <h1 className="mx-auto mt-16 text-xl sm:text-3xl font-bold border-2 border-dashed border-black pt-4 pb-6 w-1/2 sm:w-mainSize flex justify-center bg-white">حالة الطقس اليوم</h1>
        <div className="w-96 mx-auto my-16 bg-white p-4 border-black border-dashed border-2">
            <div className="bg-[#F2F0E9] flex gap-2 justify-center">
                <input ref={inputRef} onKeyDown={enterKey} type="text" placeholder="Search" className="w-full bg-inherit outline-none px-2"/>
                <IoSearchOutline onClick={()=>search(inputRef.current.value)} className="cursor-pointer text-4xl bg-primary p-1 hover:border-black hover:border-dashed border-2"/>
            </div>
            {weatherData?<>
            
            <img src={weatherData.icon} alt="" className="mx-auto"/>
            <div className="flex flex-col">
                <h1 className="mx-auto font-semiboldbold text-6xl">{weatherData.temperature}°c</h1>
                <p className="mx-auto text-4xl my-4"><span>- </span>{weatherData.location}<span> -</span></p>
            </div>
            <div className="bg-primary w-full flex justify-between py-4 px-6 border-black border-dashed border-2 mt-4">
                <div className="flex gap-2 ">
                    <WiHumidity className="text-4xl"/>
                    <div className="text-xl flex flex-col items-start">
                        <p>{weatherData.humidity} %</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div className="flex gap-2 content-start">
                    <LuWind className="text-3xl"/>
                    <div className="text-xl flex flex-col items-start">
                        <p>{weatherData.windSpeed} Km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
            </>:<></>}
        </div>
    </div>
  )
}

export default Weather