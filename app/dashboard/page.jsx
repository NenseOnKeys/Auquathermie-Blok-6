"use client"
import { BarChart } from "../../components/Barchart"
import { LineChart } from "../../components/LineChart"
import React, { useState, useEffect } from 'react';


const Dashboard = () => {
    // const response = await fetch('url');
    // const apiData = await response.json();

    const [tempData, setTempData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],	
        datasets: [
          {
            label: 'Temperature Data',
            // label: apiData.type,
            data: [12, 15, 18, 20, 21, 14, 27],
            // data: apiData.data,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      });
      const [zuurData, setZuurData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],	
        datasets: [
          {
            label: 'Zuurstof Data',
            // label: apiData.type,
            data: [12, 15, 18, 9, 7, 22, 27],
            // data: apiData.data,
            backgroundColor: 'rgba(255,75,75,0.2)',
            borderColor: 'rgba(255,75,75,1)',
            borderWidth: 1,
          },
        ],
      });
      const [tdsData, setTDSData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],	
        datasets: [
          {
            label: 'TDS Data',
            // label: apiData.type,
            data: [12, 15, 18, 20, 11, 22, 35],
            // data: apiData.data,
            backgroundColor: 'rgba(100,192,75,0.2)',
            borderColor: 'rgba(100,192,75,1)',
            borderWidth: 1,
          },
        ],
      });
      const [phData, setPHData] = useState({
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],	
        datasets: [
          {
            label: 'PH waarde Data',
            // label: apiData.type,
            data: [12, 13, 14, 14, 15, 15, 17],
            // data: apiData.data,
            backgroundColor: 'rgba(192,75,192,0.2)',
            borderColor: 'rgba(192,75,192,1)',
            borderWidth: 1,
          },
        ],
      });

      const [tempOptions, setTempOptions] = useState({
        
        responsive: true,
        plugins: {
            legend: {
            position: 'top' ,
            },
            title: {
            display: true,
            text: 'Temperatuur',
            },
            },
          
      })

      const [zuurOptions, setZuurOptions] = useState({
        
        responsive: true,
        plugins: {
            legend: {
            position: 'top' ,
            },
            title: {
            display: true,
            text: 'Zuurstof',
            },
            },
          
      })
      const [tdsOptions, setTDSOptions] = useState({
        
        responsive: true,
        plugins: {
            legend: {
            position: 'top' ,
            },
            title: {
            display: true,
            text: 'TDS',
            },
            },
          
      })
      const [phOptions, setPHOptions] = useState({
        
        responsive: true,
        plugins: {
            legend: {
            position: 'top' ,
            },
            title: {
            display: true,
            text: 'Ph Waarde',
            },
            },
          
      })

    const z = "Zuurstof"
    
  return (
    // <div className="Centeren">
    <div className="chartContainer">
       <div className="box1 box"> 
            <LineChart d={tempData} t={tempOptions} />
       </div>
       <div className="box2 box"> 
       <LineChart d={zuurData} t={zuurOptions} />
       </div>
       <div className="box3 box"> 
       <LineChart d={tdsData} t={tdsOptions}/>
       </div>
       <div className="box4 box"> 
       <LineChart d={phData} t={phOptions} />
       </div>
    

    </div>
    // </div>
  )
}

export default Dashboard