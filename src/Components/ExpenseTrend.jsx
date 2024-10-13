import React from 'react';
import {Box, Grid2, Typography} from "@mui/material";
import {BarChart} from "@mui/x-charts/BarChart";

export default function ExpenseTrend(props) {
	let expenses = [['Food', props.totalExpensesFood()], ['Entertainment', props.totalExpensesEntertainment()], ['Travel', props.totalExpensesTravel()]];
	expenses = expenses.sort((a, b) => b[1] - a[1]);
	return (
		<Box>
			<Typography variant='h4' sx={{fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}>Top
				Expenses</Typography>
			<Box sx={{backgroundColor: 'white', borderRadius: '1rem'}}>
				<BarChart
					dataset={[
						{month: expenses[0][0], value: expenses[0][1]},
						{month: expenses[1][0], value: expenses[1][1]},
						{month: expenses[2][0], value: expenses[2][1]},
					]}
					yAxis={[{scaleType: 'band', dataKey: 'month'}]}
					series={[{dataKey: 'value', label: 'Expenses'}]}
					layout="horizontal"
					width={700}
					height={429}
					sx={{padding: '1.5rem'}}
				/>
			</Box>
		</Box>
	);
}