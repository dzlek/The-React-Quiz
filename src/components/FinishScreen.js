function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const persentage = points / maxPossiblePoints;

  let emoji;
  if (persentage === 100) emoji = "😁";
  if (persentage > 80 && persentage < 100) emoji = "🚒";
  if (persentage > 0 && persentage < 80) emoji = "😂";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(persentage)}%)
      </p>
      <p className="highscore">(Hihgscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishScreen;
