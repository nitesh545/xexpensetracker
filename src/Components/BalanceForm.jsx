import React from 'react';
import {Button, Card, TextField, Typography, Box} from "@mui/material";

export default function BalanceForm(props) {
	return (
		<Box sx={{
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: 600,
			backgroundColor: 'rgba(239, 239, 239, 0.95)',
			boxShadow: 24,
			p: 2,
			borderRadius: 10,
		}}>
			<Typography variant='h4' px={4} fontWeight={'bold'}>Add Balance</Typography>
			<Box sx={{
				// padding: '1rem',
				margin: '1rem',
				display: 'flex',
				justifyContent: 'center',
			}}>
				<TextField onChange={(e) => {
					props.updateBalanceForm(e);
				}} sx={{margin: '1rem'}} placeholder='Income Amount'/>
				<Button variant="contained" onClick={() => {
					props.handleAddBalance();
				}} sx={{margin: '1rem', backgroundColor: 'rgba(244, 187, 74, 1)', borderRadius: '1rem'}}>Add
					Balance</Button>
				<Button variant="contained" onClick={() => {
					props.handleHideBalanceForm();
				}} sx={{
					margin: '1rem',
					backgroundColor: 'rgba(227, 227, 227, 1)',
					borderRadius: '1rem',
					color: 'black',
					alignContent: 'center',
					alignItems: 'center',
				}}>Cancel</Button>
			</Box>
		</Box>
	);
}