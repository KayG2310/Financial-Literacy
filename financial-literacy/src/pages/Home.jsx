import React from "react";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";

// Expense data
const expenses = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 200 },
  { name: "Shopping", value: 300 },
  { name: "Bills", value: 150 },
];

// Distinct colors for pie chart
const COLORS = ["#1e40af", "#16a34a", "#dc2626", "#f59e0b"];

// Monthly expenses for bar chart
const monthlyExpenses = [
  { month: "Jan", Food: 400, Transport: 150, Shopping: 200, Bills: 100 },
  { month: "Feb", Food: 300, Transport: 200, Shopping: 250, Bills: 150 },
  { month: "Mar", Food: 450, Transport: 100, Shopping: 300, Bills: 200 },
  { month: "Apr", Food: 350, Transport: 250, Shopping: 150, Bills: 120 },
];

// Cumulative expenses for line chart
const cumulativeData = monthlyExpenses.map((m, i, arr) => {
  const total = m.Food + m.Transport + m.Shopping + m.Bills;
  const prevTotal = i === 0 ? 0 : arr[i - 1].cumulative;
  return { month: m.month, cumulative: total + prevTotal };
});

// Quick analytics
const totalExpenses = expenses.reduce((sum, e) => sum + e.value, 0);
const avgExpense = (totalExpenses / expenses.length).toFixed(2);
const maxCategory = expenses.reduce((prev, curr) =>
  prev.value > curr.value ? prev : curr
).name;
const transactionsCount = expenses.length;

const Home = () => {
  return (
    <div style={styles.container}>
      {/* Top Navigation Ribbon */}
      <nav style={styles.nav}>
        <Link style={styles.navLink} to="/home">Home</Link>
        <Link style={styles.navLink} to="/expenses">Expenses</Link>
        <Link style={styles.navLink} to="/goals">Goals</Link>
        <Link style={styles.navLink} to="/articles">Articles</Link>
      </nav>

      <h1 style={{ marginTop: 80 }}>Dashboard</h1>

      {/* Analytics Cards */}
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h3>Total Expenses</h3>
          <p>₹{totalExpenses}</p>
        </div>
        <div style={styles.card}>
          <h3>Average Expense</h3>
          <p>₹{avgExpense}</p>
        </div>
        <div style={styles.card}>
          <h3>Highest Category</h3>
          <p>{maxCategory}</p>
        </div>
        <div style={styles.card}>
          <h3>Transactions Count</h3>
          <p>{transactionsCount}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div style={styles.chartsContainer}>
        {/* Pie Chart */}
        <div style={styles.chart}>
          <h2>Category Breakdown</h2>
          <PieChart width={350} height={250}>
            <Pie
              data={expenses}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label={({ index, percent }) => `${index}: ${(percent * 100).toFixed(0)}%`}
            >
              {expenses.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `₹${value}`} />
            <Legend />
          </PieChart>
        </div>

        {/* Bar Chart */}
        <div style={styles.chart}>
          <h2>Monthly Expenses</h2>
          <BarChart width={500} height={250} data={monthlyExpenses} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `₹${value}`} />
            <Legend />
            <Bar dataKey="Food" fill="#1e40af" />
            <Bar dataKey="Transport" fill="#16a34a" />
            <Bar dataKey="Shopping" fill="#dc2626" />
            <Bar dataKey="Bills" fill="#f59e0b" />
          </BarChart>
        </div>

        {/* Line Chart */}
        {/* <div style={styles.chart}>
          <h2>Cumulative Spending Trend</h2>
          <LineChart width={500} height={250} data={cumulativeData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `₹${value}`} />
            <Line type="monotone" dataKey="cumulative" stroke="#f59e0b" strokeWidth={3} />
          </LineChart>
        </div> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Inter, sans-serif",
    backgroundColor: "#0b0d17",
    color: "#f1f1f1",
    minHeight: "100vh",
    padding: "20px",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#1e40af",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  navLink: {
    color: "#fff",
    margin: "0 20px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: 16,
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 20,
    marginTop: 20,
  },
  card: {
    backgroundColor: "#1f2937",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  chartsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: 40,
    marginTop: 40,
  },
  chart: {
    backgroundColor: "#1f2937",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
    display: "flex",            // enable flex
    justifyContent: "center",   // horizontal center
    alignItems: "center",       // vertical center
    flexDirection: "column",    // if you have heading + chart stacked
  },
  
};

export default Home;
