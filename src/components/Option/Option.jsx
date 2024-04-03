const Option = () => {
  const data = ["Good", "Neutral", "Bad"];
  return (
    <div>
      {data.map((btn) => (
        <button key={btn}>{btn}</button>
      ))}
    </div>
  );
};

export default Option;
