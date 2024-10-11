import React from 'react';
import {Box, Button, Card, Grid2, MenuItem, Select, TextField, Typography} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

export default function ExpenseForm(props) {
	return (
		<Box sx={{
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: 800,
			height: 400,
			backgroundColor: 'rgba(239, 239, 239, 0.85)',
			boxShadow: 24,
			p: 2,
			borderRadius: 10,
		}}>
			<Typography variant='h4' px={4} fontWeight={'bold'}>Add Expenses</Typography>
			<Box sx={{
				// padding: '1rem',
				margin: '1rem',
				display: 'flex',
				justifyContent: 'center',
			}}>
				<Grid2 container spacing={2}>
					<Grid2 size={6}>
						<TextField placeholder='Title' onChange={(e) => {
							props.updateExpenseFormTitle(e);
						}} sx={{width: '100%'}}/>
					</Grid2>
					<Grid2 size={6}>
						<TextField placeholder='Price' onChange={(e) => {
							props.updateExpenseFormPrice(e);
						}} sx={{width: '100%'}}/>
					</Grid2>
					<Grid2 size={6}>
						<Select variant="standard" label="Category" placeholder='Category'
								value={props.expenseForm.category}
								onChange={(e) => {
									props.handleSelectCategory(e)
								}}
								sx={{width: '100%'}}>
							<MenuItem value='food'>Food</MenuItem>
							<MenuItem value='entertainment'>Entertainment</MenuItem>
							<MenuItem value='travel'>Travel</MenuItem>
						</Select>
					</Grid2>
					<Grid2 size={6}>
						{/*<LocalizationProvider dateAdapter={AdapterDayjs}>*/}
						{/*	<DemoContainer components={['DatePicker']}>*/}
						{/*		<DatePicker label="mm/dd/yyyy" onChange={(value) => {*/}
						{/*			props.updateExpenseFormDate(value);*/}
						{/*		}}/>*/}
						{/*	</DemoContainer>*/}
						{/*</LocalizationProvider>*/}
						<TextField type="date" placeholder={'dd/mm/yy'} sx={{width: '100%'}}></TextField>
					</Grid2>
					<Grid2 size={6}>
						<Button variant="contained" onClick={() => {
							props.handleAddExpense()
						}} sx={{
							margin: '1rem',
							backgroundColor: 'rgba(244, 187, 74, 1)',
							borderRadius: '1rem',
							height: '100%',
							width: '90%'
						}}>Add
							Expense</Button>
					</Grid2>
					<Grid2 size={6}>
						<Button variant="contained" onClick={() => {
							props.handleHideExpenseForm()
						}} sx={{
							margin: '1rem',
							backgroundColor: 'rgba(227, 227, 227, 1)',
							borderRadius: '1rem',
							color: 'black',
							height: '100%',
							width: '60%'
						}}>Cancel</Button>
					</Grid2>
				</Grid2>
			</Box>
		</Box>
	);
}