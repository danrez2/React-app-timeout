export function Home() {
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
          color: "#FF4081",
          textAlign: "center",
          margin: 0, // Remove default margin
        }}
      >
        Session about to expire. Refresh to continue.
      </p>
    </div>
  );
}

  