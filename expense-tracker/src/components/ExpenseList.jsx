function ExpenseList({ expenses }) {
    return (
      <div>
        {/* Title for the list of expenses */}
        <h2 className="text-xl font-semibold mb-4">Expenses</h2>
  
        {/* Unordered list to display each expense item */}
        <ul className="space-y-2">
          {/* Loop through the expenses array and render each expense as a list item */}
          {expenses.map((expense, index) => (
            <li key={index} className="p-4 bg-gray-50 rounded shadow-sm">
              {/* Container for the expense description and amount */}
              <div className="flex justify-between items-center">
                {/* Display the expense description */}
                <span>{expense.description}</span>
                {/* Display the expense amount with a dollar sign */}
                <span>${expense.amount}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ExpenseList;
  