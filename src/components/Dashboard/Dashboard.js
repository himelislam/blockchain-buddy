import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState();
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);
    console.log(data);
    return (
        <div className='grid grid-cols-2 gap-4 px-16 my-10 min-h-[70vh]'>
            <div>
                <h2 className='text-3xl font-mono text-slate-700 text-center my-4'>Month Wise Sell</h2>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart
                        width={500}
                        height={200}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div>
            <h2 className='text-3xl font-mono text-slate-700 text-center my-4'>Investment vs Revenue</h2>
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        width={500}
                        height={200}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="investment" stroke="#8884d8" fill="#8884d8" />
                        <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fill="#82ca9d" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
            <div>
            <h2 className='text-3xl font-mono text-slate-700 text-center my-4'>Investment vs Sell</h2>
                
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="sell" fill="#82ca9d" />
                    </BarChart>
                
            </div>
            <div className='mx-auto'>
            <h2 className='text-3xl font-mono text-slate-700 text-center my-4'>Investment vs Sell</h2>
               
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                        <Pie data={data} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip/>
                    </PieChart>
                
            </div>
        </div>
    );
};

export default Dashboard;