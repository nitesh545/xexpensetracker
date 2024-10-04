import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import {Grid2, Typography, Button, Card, TextField, Select, MenuItem, Box,} from "@mui/material";
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker} from '@mui/x-date-pickers/DatePicker';
import {PieChart} from '@mui/x-charts/PieChart';
import {BarChart} from '@mui/x-charts/BarChart';

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
        // setTotalExpenses({...totalExpenses, food: totalExp});
        return totalExp;
    }

    const totalExpensesEntertainment = () => {
        let exp = allExpenses.filter((expense, ind) => expense.category === 'entertainment');
        let totalExp = exp.reduce((total, x) => total += x.price, 0);
        // setTotalExpenses({...totalExpenses, entertainment: totalExp});
        return totalExp;
    }

    const totalExpensesTravel = () => {
        let exp = allExpenses.filter((expense, ind) => expense.category === 'travel');
        let totalExp = exp.reduce((total, x) => total += x.price, 0);
        // setTotalExpenses({...totalExpenses, travel: totalExp});
        console.log(exp, totalExp);
        return totalExp;
    }

    const totalExpensesFinal = () => {
        totalExpensesFood();
        totalExpensesEntertainment();
        totalExpensesTravel();
    }

    return (
        <div className="App">
            <Typography variant="h1">Expense Tracker</Typography>
            <Card sx={{backgroundColor: '#BBBBBB', width: "100%", height: 220, alignContent: 'center'}}>
                <Grid2 container spacing={5} sx={{justifyContent: "center"}}>
                    <Grid2 item xs={4}>
                        <Card sx={{
                            backgroundColor: '#D9D9D9',
                            width: 400,
                            height: 200,
                            alignItems: 'center',
                            alignContent: 'center'
                        }}>
                            <Typography variant="h4">Balance: ₹{balexp.balance}</Typography>
                            <Button variant='contained' onClick={() => {
                                handleShowBalanceForm()
                            }}>+ Add Income</Button>
                        </Card>
                    </Grid2>
                    <Grid2 item xs={4}>
                        <Card sx={{
                            backgroundColor: '#D9D9D9',
                            width: 400,
                            height: 200,
                            alignItems: 'center',
                            alignContent: 'center'
                        }}>
                            <Typography variant="h4">Expenses: ₹{balexp.expense}</Typography>
                            <Button variant='contained' onClick={() => {
                                handleShowExpenseForm()
                            }}>+ Add Expense</Button>
                        </Card>
                    </Grid2>
                    <Grid2 item xs={4}>
                        <Card sx={{backgroundColor: '#D9D9D9'}}>
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
            {
                balanceForm.showForm && (
                    <Card sx={{
                        padding: '1rem',
                        margin: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <TextField onChange={(e) => {
                            setBalanceForm({...balanceForm, incomeAmount: Number(e.target.value)})
                        }}/>
                        <Button variant="contained" onClick={() => {
                            handleAddBalance()
                        }}>Add Balance</Button>
                        <Button variant="contained" onClick={() => {
                            handleHideBalanceForm()
                        }}>Cancel</Button>
                    </Card>
                )
            }
            {
                expenseForm.showForm && (
                    <Card sx={{
                        padding: '1rem',
                        margin: '1rem',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexDirection: 'column'
                    }}>
                        <TextField placeholder='Title' onChange={(e) => {
                            setExpenseForm({...expenseForm, title: e.target.value});
                        }}/>
                        <TextField placeholder='Price' onChange={(e) => {
                            setExpenseForm({...expenseForm, price: Number(e.target.value)});
                        }}/>
                        <Select variant="standard" label="Category" placeholder='Category' value={expenseForm.category}
                                onChange={(e) => {
                                    handleSelectCategory(e)
                                }}>
                            <MenuItem value='food'>Food</MenuItem>
                            <MenuItem value='entertainment'>Entertainment</MenuItem>
                            <MenuItem value='travel'>Travel</MenuItem>
                        </Select>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker label="mm/dd/yyyy" onChange={(value) => {
                                    let valueToString = value.$d.toString().split(' ').slice(1, 4).join(' ');
                                    setExpenseForm({...expenseForm, date: valueToString});
                                }}/>
                            </DemoContainer>
                        </LocalizationProvider>
                        <Button variant="contained" onClick={() => {
                            handleAddExpense()
                        }}>Add Expense</Button>
                        <Button variant="contained" onClick={() => {
                            handleHideExpenseForm()
                        }}>Cancel</Button>
                    </Card>
                )
            }
            <Grid2 container spacing={8} sx={{margin: '2rem'}}>
                <Grid2 container spacing={2}
                       sx={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                    <Typography variant='h2'>Recent Transactions</Typography>
                    <Grid2 item xs={8}>
                        {
                            allExpenses.map((expense, index) => (
                                <Box key={index}
                                     sx={{display: 'flex', justifyContent: 'space-between', padding: '2rem'}}>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        flexDirection: 'column'
                                    }}>
                                        <Typography variant='h5'>{expense.title}</Typography>
                                        <Typography variant='body2'>{expense.date}</Typography>
                                    </Box>
                                    <Box sx={{display: 'flex',}}>
                                        <Typography variant='h5' sx={{padding: '1rem'}}>₹{expense.price}</Typography>
                                        <Button variant="contained" onClick={() => {
                                            handleDeleteExpense(index);
                                        }} sx={{margin: '0.25rem'}}>Delete</Button>
                                        <Button variant="contained" onClick={() => {
                                            handleShowExpenseForm();
                                            handleEditExpenses(index);
                                        }} sx={{margin: '0.25rem'}}>Edit</Button>
                                    </Box>
                                </Box>
                            ))
                        }
                    </Grid2>
                </Grid2>
                <Grid2 item xs={4}>
                    <Typography variant='h2'>Top Expenses</Typography>
                    <BarChart
                        dataset={[
                            {month: 'Food', value: totalExpensesFood()},
                            {month: 'Entertainment', value: totalExpensesEntertainment()},
                            {month: 'Travel', value: totalExpensesTravel()},
                        ]}
                        yAxis={[{scaleType: 'band', dataKey: 'month'}]}
                        series={[{dataKey: 'value', label: 'Expenses'}]}
                        layout="horizontal"
                        width={1000}
                        height={500}
                        sx={{padding: '1.5rem'}}
                    />
                </Grid2>
            </Grid2>
        </div>
    );
}

export default App;
