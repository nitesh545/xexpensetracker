// import React from 'react';
// import {Grid2, Typography} from "@mui/material";
// import {BarChart} from "@mui/x-charts/BarChart";
//
// export default function ExpenseTrend() {
// 	return (
// 		<Grid2 item xs={4}>
// 			<Typography variant='h2'>Top Expenses</Typography>
// 			<BarChart
// 				dataset={[
// 					{month: 'Food', value: totalExpensesFood()},
// 					{month: 'Entertainment', value: totalExpensesEntertainment()},
// 					{month: 'Travel', value: totalExpensesTravel()},
// 				]}
// 				yAxis={[{scaleType: 'band', dataKey: 'month'}]}
// 				series={[{dataKey: 'value', label: 'Expenses'}]}
// 				layout="horizontal"
// 				width={1000}
// 				height={500}
// 				sx={{padding: '1.5rem'}}
// 			/>
// 		</Grid2>
// 	);
// }