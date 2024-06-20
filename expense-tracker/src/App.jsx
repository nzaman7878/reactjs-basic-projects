import { useState } from 'react';
import ExpenseList from './components/ExpenseList'; 
import ExpenseForm from './components/ExpenseForm'; 

function App() {
  // State hook to manage the list of expenses
  const [expenses, setExpenses] = useState([]);

  // Function to add a new expense to the list
  const addExpense = (expense) => {
    // Update the state with the new expense added to the existing expenses array
    setExpenses([...expenses, expense]);
  };

  return (
    // Main container for the app with full-screen height and flexbox alignment
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Inner container with white background, padding, rounded corners, shadow, and max width */}
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        {/* Title of the app */}
        <h1 className="text-2xl font-bold mb-6 text-center">Expense Tracker</h1>
        
        {/* Form component to add new expenses */}
        <ExpenseForm addExpense={addExpense} />
        
        {/* List component to display the expenses */}
        <ExpenseList expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
