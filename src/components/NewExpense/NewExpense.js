import React , {useState} from "react";
import './NewExpense.css'
import ExpenseFrom from "./ExpenseForm";
const NewExpense = (props) =>{

    const [userSubmit , setUserSubmit] = useState(false)
    const saveExpenseDataHandler = (inputExpenseData)=>{
          const expenseData = {
            ...inputExpenseData,
            id: Math.random().toString()
          };
        props.onAddExpense(expenseData) 
        
    }

    const userClick = ()=>{
          setUserSubmit(prevState => !prevState)
    }
    return <div className="new-expense">

       {userSubmit ? <ExpenseFrom saveExpenseData={saveExpenseDataHandler} onCancle={userClick}/> : <button onClick={userClick}>Add Expenses</button>}
    </div>
}

export default NewExpense ; 