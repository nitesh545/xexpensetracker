import React from 'react';
import {Button, Card, MenuItem, Select, TextField} from "@mui/material";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DemoContainer} from "@mui/x-date-pickers/internals/demo";
import {DatePicker} from "@mui/x-date-pickers/DatePicker";

export default function ExpenseForm(props) {
	return (
		<Card sx={{
			padding: '1rem',
			margin: '1rem',
			display: 'flex',
			justifyContent: 'space-between',
			flexDirection: 'column'
		}}>
			<TextField placeholder='Title' onChange={(e) => {

			}}/>
			<TextField placeholder='Price' onChange={(e) => {
				props.updateExpenseFormTitle(e);
			}}/>
			<Select variant="standard" label="Category" placeholder='Category' value={props.expenseForm.category}
					onChange={(e) => {
						props.handleSelectCategory(e)
					}}>
				<MenuItem value='food'>Food</MenuItem>
				<MenuItem value='entertainment'>Entertainment</MenuItem>
				<MenuItem value='travel'>Travel</MenuItem>
			</Select>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<DemoContainer components={['DatePicker']}>
					<DatePicker label="mm/dd/yyyy" onChange={(value) => {
						props.updateExpenseFormDate(value);
					}}/>
				</DemoContainer>
			</LocalizationProvider>
			<Button variant="contained" onClick={() => {
				props.handleAddExpense()
			}}>Add Expense</Button>
			<Button variant="contained" onClick={() => {
				props.handleHideExpenseForm()
			}}>Cancel</Button>
		</Card>
	);
}