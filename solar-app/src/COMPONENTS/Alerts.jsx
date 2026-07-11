import React, { useState, useEffect, useMemo } from "react";

const defaultAlerts = [
  {
    id: 1,
    title: "Low Battery",
    message: "Your device battery is below 20%.",
    type: "Warning",
    priority: "High",
    status: "Unread",
    date: "11 Jul 2026",
  },
  {
    id: 2,
    title: "New Login",
    message: "A new login was detected from Mumbai.",
    type: "Security",
    priority: "Medium",
    status: "Unread",
    date: "10 Jul 2026",
  },
  {
    id: 3,
    title: "System Update",
    message: "Version 2.5.1 is now available.",
    type: "System",
    priority: "Low",
    status: "Read",
    date: "09 Jul 2026",
  },
  {
    id: 4,
    title: "Backup Complete",
    message: "Your weekly backup finished successfully.",
    type: "Backup",
    priority: "Low",
    status: "Read",
    date: "08 Jul 2026",
  },
];

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [newTitle, setNewTitle] = useState("");
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setAlerts(defaultAlerts);
  }, []);

  const filteredAlerts = useMemo(() => {
    return alerts.filter((alert) => {
      const matchSearch =
        alert.title.toLowerCase().includes(search.toLowerCase()) ||
        alert.message.toLowerCase().includes(search.toLowerCase());

      const matchFilter =
        filter === "All"
          ? true
          : alert.status.toLowerCase() === filter.toLowerCase();

      return matchSearch && matchFilter;
    });
  }, [alerts, search, filter]);

  const markAsRead = (id) => {
    setAlerts((previous) =>
      previous.map((alert) =>
        alert.id === id
          ? { ...alert, status: "Read" }
          : alert
      )
    );
  };

  const deleteAlert = (id) => {
    setAlerts((previous) =>
      previous.filter((alert) => alert.id !== id)
    );
  };

  const addAlert = () => {
    if (newTitle.trim() === "" || newMessage.trim() === "") {
      alert("Please enter title and message.");
      return;
    }

    const newAlert = {
      id: Date.now(),
      title: newTitle,
      message: newMessage,
      type: "General",
      priority: "Medium",
      status: "Unread",
      date: new Date().toLocaleDateString(),
    };

    setAlerts([newAlert, ...alerts]);
    setNewTitle("");
    setNewMessage("");
  };

  const totalAlerts = alerts.length;
  const unreadAlerts = alerts.filter(
    (item) => item.status === "Unread"
  ).length;

  const readAlerts = alerts.filter(
    (item) => item.status === "Read"
  ).length;

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "1100px",
        margin: "40px auto",
        fontFamily: "Arial",
      }}
    >
      <h1 style={{ textAlign: "center" }}>
        Alerts Management Dashboard
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}
      >
        <StatCard title="Total Alerts" value={totalAlerts} />
        <StatCard title="Unread Alerts" value={unreadAlerts} />
        <StatCard title="Read Alerts" value={readAlerts} />
      </div>

      <div
        style={{
          border: "1px solid #ddd",
          padding: "20px",
          marginBottom: "30px",
        }}
      >
        <h2>Create Alert</h2>

        <input
          type="text"
          placeholder="Alert Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          style={inputStyle}
        />

        <textarea
          placeholder="Alert Message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          style={{
            ...inputStyle,
            height: "80px",
          }}
        />

        <button
          onClick={addAlert}
          style={buttonStyle}
        >
          Add Alert
        </button>
      </div>

      <input
        type="text"
        placeholder="Search Alerts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />

      <div style={{ marginTop: "20px", marginBottom: "30px" }}>
        {["All", "Read", "Unread"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            style={{
              ...buttonStyle,
              marginRight: "10px",
            }}
          >
            {item}
          </button>
        ))}
      </div>

      {filteredAlerts.length === 0 ? (
        <div
          style={{
            padding: "40px",
            border: "1px solid #ddd",
            textAlign: "center",
          }}
        >
          <h2>No Alerts Available</h2>
        </div>
      ) : (
        filteredAlerts.map((alert) => (
          <div
            key={alert.id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          >
            <h2>{alert.title}</h2>

            <p>{alert.message}</p>

            <p>
              <strong>Type:</strong> {alert.type}
            </p>

            <p>
              <strong>Priority:</strong> {alert.priority}
            </p>

            <p>
              <strong>Status:</strong> {alert.status}
            </p>

            <p>
              <strong>Date:</strong> {alert.date}
            </p>

            <button
              onClick={() => markAsRead(alert.id)}
              style={buttonStyle}
            >
              Mark as Read
            </button>

            <button
              onClick={() => deleteAlert(alert.id)}
              style={{
                ...buttonStyle,
                marginLeft: "10px",
              }}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div
      style={{
        flex: 1,
        minWidth: "220px",
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  marginBottom: "15px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px 20px",
  cursor: "pointer",
  border: "none",
  backgroundColor: "#007bff",
  color: "#fff",
  borderRadius: "5px",
};