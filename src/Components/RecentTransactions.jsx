// import React from 'react';
// import {Box, Button, Grid2, Typography} from "@mui/material";
//
// export default function RecentTransactions() {
// 	return (
// 		<Grid2 container spacing={2}
// 			   sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
// 			<Typography variant='h2'>Recent Transactions</Typography>
// 			<Grid2 item xs={8}>
// 				{
// 					allExpenses.map((expense, index) => (
// 						<Box key={index}
// 							 sx={{display: 'flex', justifyContent: 'space-between', padding: '2rem'}}>
// 							<Box sx={{
// 								display: 'flex',
// 								justifyContent: 'space-between',
// 								flexDirection: 'column'
// 							}}>
// 								<Typography variant='h5'>{expense.title}</Typography>
// 								<Typography variant='body2'>{expense.date}</Typography>
// 							</Box>
// 							<Box sx={{display: 'flex',}}>
// 								<Typography variant='h5' sx={{padding: '1rem'}}>₹{expense.price}</Typography>
// 								<Button variant="contained" onClick={() => {
// 									handleDeleteExpense(index);
// 								}} sx={{margin: '0.25rem'}}>Delete</Button>
// 								<Button variant="contained" onClick={() => {
// 									handleShowExpenseForm();
// 									handleEditExpenses(index);
// 								}} sx={{margin: '0.25rem'}}>Edit</Button>
// 							</Box>
// 						</Box>
// 					))
// 				}
// 			</Grid2>
// 		</Grid2>
// 	);
// }