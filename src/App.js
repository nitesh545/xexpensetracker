import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {Grid2, Typography, Button, Card, TextField, Select, MenuItem, Box, Container, Modal,} from "@mui/material";
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {PieChart} from '@mui/x-charts/PieChart';
import {BarChart} from '@mui/x-charts/BarChart';
import BalanceForm from "./Components/BalanceForm";
import ExpenseForm from "./Components/ExpenseForm";
import Cards from "./Components/Cards"
// import RecentTransactions from "./Components/RecentTransactions";
// import ExpenseTrend from "./Components/ExpenseTrend";

function App() {
	const [balexp, setBalexp] = useState({
		balance: 5000,
		expense: 0,
	});

	const [expenseForm, setExpenseForm] = useState({
		title: '',
		price: 0,
		category: 'Category',
		date: '',
		showForm: false,
	});

	const [balanceForm, setBalanceForm] = useState({
		incomeAmount: 0,
		showForm: false,
	});

	const [allExpenses, setAllExpenses] = useState([]);

	const [totalExpenses, setTotalExpenses] = useState({
		food: 0,
		entertainment: 0,
		travel: 0,
	});

	const updateBalanceForm = (e) => {
		setBalanceForm({...balanceForm, incomeAmount: Number(e.target.value)});
	}

	const updateExpenseFormTitle = (e) => {
		setExpenseForm({...expenseForm, title: e.target.value});
	}

	const updateExpenseFormPrice = (e) => {
		setExpenseForm({...expenseForm, price: Number(e.target.value)});
	}

	const updateExpenseFormDate = (value) => {
		let valueToString = value.$d.toString().split(' ').slice(1, 4).join(' ');
		setExpenseForm({...expenseForm, date: valueToString});
	}

	const handleShowBalanceForm = () => {
		setBalanceForm({...balanceForm, showForm: true});
	};

	const handleHideBalanceForm = () => {
		setBalanceForm({...balanceForm, showForm: false});
	};

	const handleShowExpenseForm = () => {
		setExpenseForm({...expenseForm, showForm: true});
	};

	const handleHideExpenseForm = () => {
		setExpenseForm({...expenseForm, showForm: false});
	};

	const handleAddBalance = () => {
		setBalexp({...balexp, balance: balexp.balance + balanceForm.incomeAmount});
		handleHideBalanceForm();
	};

	const handleAddExpense = () => {
		if (balexp.balance - expenseForm.price < 0) {
			alert("not enough balance");
			return;
		}
		setAllExpenses([...allExpenses, {
			title: expenseForm.title,
			price: expenseForm.price,
			category: expenseForm.category,
			date: expenseForm.date
		}]);
		setBalexp({balance: balexp.balance - expenseForm.price, expense: balexp.expense + expenseForm.price});
		handleHideExpenseForm();
	};

	const handleSelectCategory = (e) => {
		setExpenseForm({...expenseForm, category: e.target.value});
	};

	const handleDeleteExpense = (index) => {
		let expenseToDelete = allExpenses.filter((expense, ind) => ind === index);
		setBalexp({
			balance: balexp.balance + expenseToDelete[0].price,
			expense: balexp.expense - expenseToDelete[0].price
		});
		setAllExpenses(allExpenses.filter((expense, ind) => ind !== index));
	};

	const handleEditExpenses = (index) => {
		let expenseToEdit = allExpenses.filter((expense, ind) => ind === index);
		setBalexp({
			balance: balexp.balance + expenseToEdit[0].price,
			expense: balexp.expense - expenseToEdit[0].price
		});
		setAllExpenses(allExpenses.filter((expense, ind) => ind !== index));
	}

	const totalExpensesFood = () => {
		let exp = allExpenses.filter((expense, ind) => expense.category === 'food');
		let totalExp = exp.reduce((total, x) => total += x.price, 0);
		return totalExp;
	}

	const totalExpensesEntertainment = () => {
		let exp = allExpenses.filter((expense, ind) => expense.category === 'entertainment');
		let totalExp = exp.reduce((total, x) => total += x.price, 0);
		return totalExp;
	}

	const totalExpensesTravel = () => {
		let exp = allExpenses.filter((expense, ind) => expense.category === 'travel');
		let totalExp = exp.reduce((total, x) => total += x.price, 0);
		return totalExp;
	}

	const totalExpensesFinal = () => {
		totalExpensesFood();
		totalExpensesEntertainment();
		totalExpensesTravel();
	}

	return (
		<div style={{backgroundColor: 'rgba(59, 59, 59, 1)', height: '100vh'}}>
			<Typography variant="h3" color='#FFFFFF' sx={{padding: '1.8rem'}} fontWeight='bold'>Expense
				Tracker</Typography>
			<Card sx={{
				backgroundColor: 'rgba(98, 98, 98, 1)',
				width: "95vw",
				height: 310,
				ml: '2rem',
				borderRadius: 5,
				justifyContent: 'center',
				alignContent: 'center',
			}}>
				<Grid2 container spacing={5} sx={{justifyContent: "center"}}>
					<Grid2 item xs={4}>
						<Cards Balance balexp={balexp} handleShowBalanceForm={handleShowBalanceForm}/>
					</Grid2>
					<Grid2 item xs={4}>
						<Cards Expense balexp={balexp} handleShowExpenseForm={handleShowExpenseForm}/>
					</Grid2>

					<Grid2 item xs={4}>
						<Card sx={{backgroundColor: '#D9D9D900', margin: '1rem 0rem 1rem 4rem', borderRadius: '1rem'}}
							  elevation={0}>
							<PieChart series={[
								{
									data: [
										{id: 0, value: totalExpensesFood(), label: 'Food'},
										{id: 1, value: totalExpensesEntertainment(), label: 'Entertainment'},
										{id: 2, value: totalExpensesTravel(), label: 'Travel'},
									],
								},
							]} width={400} height={200}/>
						</Card>
					</Grid2>
				</Grid2>
			</Card>
			<Modal open={balanceForm.showForm} onClose={handleHideBalanceForm} sx={{justifyContent: 'center'}}>
				<BalanceForm updateBalanceForm={updateBalanceForm} handleAddBalance={handleAddBalance}
							 handleHideBalanceForm={handleHideBalanceForm}/>
			</Modal>
			<Modal open={expenseForm.showForm} onClose={handleHideExpenseForm}>
				<ExpenseForm updateExpenseFormTitle={updateExpenseFormTitle} handleAddExpense={handleAddExpense}
							 handleHideExpenseForm={handleHideExpenseForm} handleSelectCategory={handleSelectCategory}
							 expenseForm={expenseForm} updateExpenseFormDate={updateExpenseFormDate}
							 updateExpenseFormPrice={updateExpenseFormPrice}/>
			</Modal>
			<Grid2 container spacing={8} sx={{margin: '2rem'}}>
				{/*<RecentTransactions/>*/}
				{/*<ExpenseTrend/>*/}
			</Grid2>
		</div>
	);
}

export default App;
