import React, { useEffect, useState } from 'react'

import "./Covid.css"

const Covid = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        try {
            // const res = await fetch('https://api.covid19india.org/data.json');
            const res = await fetch("https://data.covid19india.org/data.json");
            const data = await res.json();
            console.log(data);
            console.log(data.statewise[0]);
            setData(data.statewise[0]);
        }
        catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        getCovidData();
    }, []);


    return (
        <>
            <section>
                {/* <div className='heading'> */}
                <h2 >🔴 Live</h2>
                <h1 >Live Covid 19 Report</h1>
                {/* </div> */}

                <ul>
                    <li className='car'>
                        <div className='mainClass'>
                            <div className='innerClass'>
                                <p className='cardName'><span>Our </span>COUNTRY</p>
                                <p className='cardTotal cardSmall'>INDIA</p>
                            </div>
                        </div>
                    </li>
                </ul>
                

                <ul>
                    <li className='car'>
                        <div className='mainClass'>
                            <div className='innerClass'>
                                <p className='cardName'><span>Total </span>Recovered</p>
                                <p className='cardTotal cardSmall'>{data.recovered}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className='car'>
                        <div className='mainClass'>
                            <div className='innerClass'>
                                <p className='cardName'><span>Total </span>Confirmed</p>
                                <p className='cardTotal cardSmall'>{data.confirmed}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className='car'>
                        <div className='mainClass'>
                            <div className='innerClass'>
                                <p className='cardName'><span>Total </span>Deaths</p>
                                <p className='cardTotal cardSmall'>{data.deaths}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className='car'>
                        <div className='mainClass'>
                            <div className='innerClass'>
                                <p className='cardName'><span>Total </span>Active</p>
                                <p className='cardTotal cardSmall'>{data.active}</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li className='car'>
                        <div className='mainClass'>
                            <div className='innerClass'>
                                <p className='cardName'><span>Last </span>Update</p>
                                <p className='cardTotal cardSmall'>{data.lastupdatedtime}</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Covid