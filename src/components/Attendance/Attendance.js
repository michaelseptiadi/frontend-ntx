import React from "react";
import { LineChart, Tooltip, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import dataAttendance from "../../data/dataAttendance";

export default function Attendance(){
    return(
        <div className="attendance-office-history h-1/2 w-full bg-zinc-900">
            <h3 className="text-center text-white text-bold py-2 w-full bg-zinc-700">Attendance Office History</h3>
            <LineChart width={350} height={250} data={dataAttendance} className="mt-12 charts">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="attendance" stroke="#82ca9d" activeDot={{ r: 4 }}/>
        </LineChart>
        </div>
    )
}