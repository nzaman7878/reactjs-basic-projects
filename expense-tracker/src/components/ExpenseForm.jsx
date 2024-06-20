import { useState } from 'react';

function ExpenseForm({ addExpense }) {
  // State hooks to manage form input values
  const [description, setDescription] = useState(''); // State for the description input field
  const [amount, setAmount] = useState(''); // State for the amount input field

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (page reload)
    
    // Ensure both description and amount fields have values
    if (description && amount) {
      // Call the addExpense function passed as a prop with the new expense object
      addExpense({ description, amount: parseFloat(amount) });

      // Clear the input fields after submitting the form
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <input
          type="text" 
          value={description} // Bind the value of the input to the description state
          onChange={(e) => setDescription(e.target.value)} // Update the description state on input change
          className="w-full p-2 border border-gray-300 rounded" 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)} // Update the amount state on input change
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
