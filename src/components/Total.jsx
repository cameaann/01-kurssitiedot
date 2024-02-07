const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.ex[0].exercises + props.ex[1].exercises+ props.ex[2].exercises}</p>
    </>
  );
};

export default Total;
