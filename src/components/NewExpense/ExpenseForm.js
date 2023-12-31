import React , {useState} from "react"
import './ExpenseForm.css'
const ExpenseFrom = (props) =>{  

     const [enteredTitle, setTitle ] = useState(" ")
     const [enteredAmount, setAmount] = useState(" ")
     const [enteredDate, setDate] = useState(" ")
      
     const titleChangeHandler = (event) =>{
        setTitle(event.target.value);
     };
     const amountChangeHandler = (event) =>{
        setAmount(event.target.value);
     };
     const datechangeHandler = (event) =>{
        setDate(event.target.value);
     }; 
     
     const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title:enteredTitle ,
            amount:+enteredAmount,
            date: new Date(enteredDate)
        }; 
        props.saveExpenseData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
     };
    return ( 
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                 <label>Title</label>
                 <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
            </div>
            <div className="new-expense__control">
                 <label>Amount</label>
                 <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>    
            <div className="new-expense__control">
                 <label>Date</label>
                 <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={datechangeHandler} required/>
            </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancle}>Cancle</button>
                <button type="submit">Add Expenses</button>
            </div>
        
    </form>)
}

export default ExpenseFrom