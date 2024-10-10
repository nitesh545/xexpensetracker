import React from 'react';
import {Button, Card, TextField} from "@mui/material";

export default function BalanceForm(props) {
	return (
		<Card sx={{
			padding: '1rem',
			margin: '1rem',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center'
		}}>
			<TextField onChange={(e) => {
				props.updateBalanceForm(e);
			}}/>
			<Button variant="contained" onClick={() => {
				props.handleAddBalance();
			}}>Add Balance</Button>
			<Button variant="contained" onClick={() => {
				props.handleHideBalanceForm();
			}}>Cancel</Button>
		</Card>
	);
}