export const InlineStyle = () => {
  const containerStyle = {
    border: "solid 2px blue",
    borderRadius: "20px",
    margin: "0px 10px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const titleStyle = {
    fontWeight: "bold",
    backgroundColor: "#ffff00",
    color: "red",
  };
  const buttonStyle = {
    height: "20px",
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>-Inline Style-</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
