import React, { useState } from "react";

const Signup = ({ onBack }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // For now, just log the data
    console.log("Signup data:", formData);

    // Later you can connect this to your backend API
    // Example: axios.post("/api/signup", formData)
    //like this
    try {
      const response = await fetch("http://localhost:8000/api/user/k", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // ✅ fixed header key
        },
        body: JSON.stringify(formData), // ✅ send formData
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      const data = await response.json();
      console.log("Signup successful:", data);

      // You can redirect or show a success message here
    } catch (error) {
      console.error("Error during signup:", error);
    }
    alert("Signup successful!"); // Show an alert for successful signup
  };

  return (
    <div style={styles.container}>
      <button type="button" onClick={onBack} style={styles.backButton}>
        ← Back to store
      </button>
      <h2 style={styles.title}>Signup to Zepto</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>
          Signup
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  backButton: {
    marginBottom: "16px",
    padding: "0",
    color: "#007bff",
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Signup;