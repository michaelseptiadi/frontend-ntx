import React from "react";
import { BarChart, Bar, Tooltip, CartesianGrid, XAxis, YAxis } from "recharts"
import dataEmployee from "../../data/dataEmployee";

export default function Employee(){
    const sick = [...dataEmployee].filter(e=> e.status_employee_attendance === "sick")
    const leave = [...dataEmployee].filter(e=> e.status_employee_attendance === "leave")
    const project = [...dataEmployee].filter(e=> e.status_employee_attendance === "project")
    const office = [...dataEmployee].filter(e=> e.status_employee_attendance === "office")

    const data = [
        {name: "Sick", sum: sick.length},
        {name: "Leave", sum: leave.length},
        {name: "Project", sum: project.length},
        {name: "Office", sum: office.length},
    ]

    return(
        <div className="employee-information h-1/2 w-full bg-zinc-900">
            <h3 className="text-center text-white text-bold py-2 w-full bg-zinc-700">Employee Information</h3>
                <BarChart width={350} height={250} data={data} className="mt-12 charts">
                    <Bar dataKey="sum" fill="#82ca9d" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="8 8" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </BarChart>
        </div>
    )
}