import React from 'react';
import {Avatar, Box, Button, Divider, Grid2, Icon, IconButton, Stack, Typography} from "@mui/material";
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import {Image} from "@mui/icons-material";

export default function RecentTransactions(props) {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				flexDirection: 'column',
				width: '60vw',
			}}>
			<Typography variant='h4' sx={{fontStyle: 'italic', fontWeight: 'bold', color: 'white'}}>Recent
				Transactions</Typography>
			<Stack spacing={2} divider={<Divider variant='middle'/>}
				   sx={{backgroundColor: 'rgba(255, 255, 255, 1)', borderRadius: '1rem'}}>
				{
					props.allExpenses.map((expense, index) => (
						<Box key={index}
							 sx={{
								 display: 'flex',
								 justifyContent: 'space-between',
								 padding: '2rem',
							 }}>
							<Box sx={{display: 'flex',}}>
								{
									expense.category === 'food' ? (
										<LocalPizzaOutlinedIcon sx={{
											// margin: '1rem',
											padding: '0.75rem',
											fontSize: '2rem',
											backgroundColor: 'rgba(217, 217, 217, 1)',
											borderRadius: '2rem'
										}}/>
									) : expense.category === 'entertainment' ? (
										<RedeemOutlinedIcon sx={{
											// margin: '1rem',
											padding: '0.75rem',
											fontSize: '2rem',
											backgroundColor: 'rgba(217, 217, 217, 1)',
											borderRadius: '2rem'
										}}/>
									) : expense.category === 'travel' ? (
										<WorkOutlineOutlinedIcon sx={{
											// margin: '1rem',
											padding: '0.75rem',
											fontSize: '2rem',
											backgroundColor: 'rgba(217, 217, 217, 1)',
											borderRadius: '2rem'
										}}/>
									) : null
								}
								<Box sx={{
									display: 'flex',
									justifyContent: 'space-between',
									flexDirection: 'column',
									mx: '1rem'
								}}>
									<Typography variant='h5'>{expense.title}</Typography>
									<Typography variant='h6'
												sx={{color: 'rgba(155, 155, 155, 1)'}}>{expense.date}</Typography>
								</Box>
							</Box>
							<Box sx={{display: 'flex',}}>
								<Typography variant='h5' sx={{
									padding: '1rem',
									color: 'rgba(244, 187, 74, 1)'
								}}>₹{expense.price}</Typography>
								<IconButton variant="contained" onClick={() => {
									props.handleDeleteExpense(index);
								}} sx={{
									padding: '0.5rem',
									margin: '0.6rem',
									borderRadius: '1rem',
									backgroundColor: 'rgba(255, 62, 62, 1)',
									color: 'white',
									'&:hover': {
										backgroundColor: 'rgba(255, 2, 2, 1)'
									}
								}}><CancelOutlinedIcon/></IconButton>
								<IconButton variant="contained" onClick={() => {
									props.handleShowExpenseForm();
									props.handleEditExpenses(index);
								}} sx={{
									padding: '0.5rem',
									margin: '0.6rem',
									borderRadius: '1rem',
									backgroundColor: 'rgba(244, 187, 74, 1)',
									color: 'white',
									'&:hover': {
										backgroundColor: 'rgba(244, 165, 60, 1)',
									}
								}}><CreateOutlinedIcon/></IconButton>
							</Box>
						</Box>
					))
				}
			</Stack>
		</Box>
	);
}