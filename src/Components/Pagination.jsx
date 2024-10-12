import React from 'react';
import {Button, IconButton} from "@mui/material";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';

export default function Pagination({pageno, handleNextPage, handlePreviousPage}) {
	return (
		<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
			<IconButton variant='contained'
						onClick={() => {
							handlePreviousPage();
						}}
						sx={{
							padding: '0.75rem',
							margin: '0.5rem',
							borderRadius: '0.5rem',
							backgroundColor: 'rgba(241, 241, 241, 1)',
							color: 'black',
							fontSize: '1.5rem',
							'&:hover': {
								backgroundColor: 'rgba(241, 241, 241, 1)',
							}
						}}><WestOutlinedIcon/></IconButton>
			<Button variant='contained' disbled={true} sx={{
				padding: '0.5rem',
				margin: '0.5rem',
				borderRadius: '1rem',
				backgroundColor: 'rgba(67, 150, 123, 1)',
				color: 'white',
				fontSize: '1.5rem',
				'&:hover': {
					backgroundColor: 'rgba(67, 150, 123, 1)',
				}
			}}>{pageno + 1}</Button>
			<IconButton variant='outlined'
						onClick={() => {
							handleNextPage();
						}}
						sx={{
							padding: '0.75rem',
							margin: '0.5rem',
							borderRadius: '0.5rem',
							backgroundColor: 'rgba(241, 241, 241, 1)',
							color: 'black',
							'&:hover': {
								backgroundColor: 'rgba(241, 241, 241, 1',
							}
						}}><EastOutlinedIcon/></IconButton>
		</div>
	)
};