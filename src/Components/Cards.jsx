import React from 'react';
import {Button, Card, Typography, Box} from "@mui/material";

export default function BalanceCard(props) {
	// props will have Balance or Expense as flag/tag.
	// other props are given based on Balance Card or Expense Card.
	// this way we have 1 re-usable component making our program modular

	let inText = props.Balance ? "Balance:" : props.Expense ? "Expenses:" : null;
	let value = props.Balance ? props.balexp.balance : props.Expense ? props.balexp.expense : null;
	let buttonText = props.Balance ? "+ Add Income" : props.Expense ? "+ Add Expense" : null;
	let color = props.Balance ? "rgba(181, 220, 82, 1)" : props.Expense ? "rgba(255, 71, 71, 1)" : null;
	let textColor = props.Balance ? "rgba(157, 255, 91, 1)" : props.Expense ? "rgba(244, 187, 74, 1)" : null;

	return (
		<Card sx={{
			backgroundColor: 'rgba(155, 155, 155, 1)',
			width: '25vw',
			height: '20vh',
			borderRadius: 10,
			alignContent: 'center',
			justifyContent: 'center',
			alignItems: 'center',
			display: 'flex',
			flexDirection: 'column',
			m: '1rem'
		}}>
			<Box sx={{display: 'flex'}}>
				<Typography variant="h4" color='white' align='right'>{inText} &nbsp;</Typography>
				<Typography variant="h4" color={textColor} align='cennter'>₹{value}</Typography>
			</Box>
			<Button variant='contained'
					sx={{backgroundColor: color, margin: '1rem', borderRadius: '1rem'}}
					onClick={() => {
						if (props.Balance) {
							props.handleShowBalanceForm();
						}
						if (props.Expense) {
							props.handleShowExpenseForm();
						}
					}}>{buttonText}</Button>
		</Card>
	);
}