import React, { useState } from "react";

const Goals = () => {
  const [goalName, setGoalName] = useState("");
  const [goalAmount, setGoalAmount] = useState("");
  const [savedAmount, setSavedAmount] = useState("");
  const [goals, setGoals] = useState([]);

  // Add new goal
  const addGoal = () => {
    if (!goalName || !goalAmount) return;
    setGoals([
      ...goals,
      { name: goalName, amount: parseFloat(goalAmount), saved: parseFloat(savedAmount) || 0 },
    ]);
    setGoalName("");
    setGoalAmount("");
    setSavedAmount("");
  };

  // Add money to existing goal
  const addToSaved = (index) => {
    const input = parseFloat(prompt("Enter amount to add to saved:"));
    if (!isNaN(input) && input > 0) {
      const newGoals = [...goals];
      newGoals[index].saved += input;
      setGoals(newGoals);
    }
  };

  return (
    <div style={styles.container}>
      <h1>Financial Goals</h1>

      {/* Add Goal Form */}
      <div style={styles.form}>
        <input
          type="text"
          placeholder="Goal Name"
          value={goalName}
          onChange={(e) => setGoalName(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Target Amount (₹)"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Amount (₹)"
          value={savedAmount}
          onChange={(e) => setSavedAmount(e.target.value)}
          style={styles.input}
        />
        <button onClick={addGoal} style={styles.button}>
          Add Goal
        </button>
      </div>

      {/* Display Goals */}
      <h2>My Goals</h2>
      <div style={styles.goalsList}>
        {goals.map((goal, index) => {
          const progress = Math.min((goal.saved / goal.amount) * 100, 100);

          return (
            <div key={index} style={styles.goalCard}>
              <h3>{goal.name}</h3>
              <p>
                Target: ₹{goal.amount} | Saved/Spent: ₹{goal.saved.toFixed(2)}
              </p>

              {/* Progress Bar */}
              <div style={styles.progressBarBackground}>
                <div
                  style={{
                    ...styles.progressBarFill,
                    width: `${progress}%`,
                  }}
                ></div>
              </div>
              <p>{progress.toFixed(0)}% completed</p>

              {/* Add to Saved Button */}
              {progress < 100 ? (
                <button onClick={() => addToSaved(index)} style={styles.button}>
                  Add amount
                </button>
              ) : (
                <p style={{ color: "#10b981", fontWeight: "bold" }}>Goal Completed!</p>
              )}
            </div>
          );
        })}
      </div>
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
  goalsList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 20,
    marginTop: 20,
  },
  goalCard: {
    backgroundColor: "#1f2937",
    padding: 20,
    borderRadius: 8,
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  progressBarBackground: {
    width: "100%",
    height: 15,
    backgroundColor: "#111827",
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 5,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#10b981",
  },
};

export default Goals;
