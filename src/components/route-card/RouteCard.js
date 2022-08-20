const RouteCard = ({ title, description, estimatedTime, onClick }) => {
  return (
    <Card onClick={onClick}>
      <p style={{ font: "var(--mini-title)", margin: "0 0 4px" }}>{title}</p>
      <p style={{ font: "var(--copy14)", margin: "0 0 8px" }}>{description}</p>
      <p style={{ font: "var(--copy12)", color: "var(--slate)", margin: "0" }}>
        Estimated cycle time: {estimatedTime}
      </p>
    </Card>
  );
};

export default RouteCard;
