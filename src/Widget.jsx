
const Widget = ({ title = "React Simple Widget", description = "This is a customizable widget." }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Widget;
