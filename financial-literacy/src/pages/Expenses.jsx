import React, { useState } from "react";
const categories = ["Food", "Transport", "Shopping", "Bills", "Other"];

const Expenses = () => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!amount) return;
    const newExpense = { amount: parseFloat(amount), category, description };
    setExpenses([...expenses, newExpense]);
    setAmount("");
    setDescription("");
  };

  return (
    <div style={styles.container}>
      <h1>Expense Tracker</h1>
      <div style={styles.form}>
        <input
          type="number"
          placeholder="Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={styles.input}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={styles.input}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
        />
        <button onClick={addExpense} style={styles.button}>
          Add Expense
        </button>
      </div>

      <h2>Expenses</h2>
      <table style={styles.table}>
  <thead>
    <tr>
      <th style={styles.th}>Amount (₹)</th>
      <th style={styles.th}>Category</th>
      <th style={styles.th}>Description</th>
    </tr>
  </thead>
  <tbody>
    {expenses.map((exp, index) => (
      <tr key={index} style={index % 2 === 0 ? styles.evenRow : styles.oddRow}>
        <td style={styles.td}>{exp.amount.toFixed(2)}</td>
        <td style={styles.td}>{exp.category}</td>
        <td style={styles.td}>{exp.description || "-"}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

const styles = {
  container: {
    padding: 20,
    fontFamily: "Inter, sans-serif",
    backgroundColor: "#0b0d17",
    color: "#f1f1f1",
    minHeight: "100vh",
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 20,
  },
  input: {
    padding: 10,
    borderRadius: 5,
    border: "none",
    flex: "1 1 150px",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    border: "none",
    backgroundColor: "#1e40af",
    color: "#fff",
    cursor: "pointer",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: 20,
  },
  th: {
    borderBottom: "2px solid #fff",
    textAlign: "left",
    padding: "10px",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #555",
  },
  evenRow: {
    backgroundColor: "#1f2937",
  },
  oddRow: {
    backgroundColor: "#111827",
  },
  
};

export default Expenses;
