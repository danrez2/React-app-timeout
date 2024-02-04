export function Timeout() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        padding: "20px", // Add padding for better visibility
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#4285F4", // Change color to a blue shade
          textAlign: "center",
          margin: 0, // Remove default margin
        }}
      >
        Uh-oh! Your session has timed out ⌛
      </p>
      <p
        style={{
          fontSize: "1.2rem",
          textAlign: "center",
          marginTop: "10px",
          margin: 0, // Remove default margin
        }}
      >
        It seems you took a bit too long. Refresh the page to continue your app
        journey!
      </p>
    </div>
  );
}

  