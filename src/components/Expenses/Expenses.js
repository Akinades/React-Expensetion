import React , {useState} from 'react';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from '../ExpensesFilter/ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
    
  const [filteredYear , setFilteredYear]  = useState('2022');
 

  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear); 
  }
  const filteredExpenses = props.items.filter(        
    (expense) => expense.date.getFullYear().toString() === filteredYear);

 
 
 
  return (
      <Card className="expenses">
    <ExpensesFilter seleted ={filteredYear} onChangFilter = {filterChangeHandler}/>
    <ExpensesChart expenses = {filteredExpenses}/>
    <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;