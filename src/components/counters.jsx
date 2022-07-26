import Counter from "./counter";

const Counters = ({
  counters,
  onReset,
  onDelete,
  onDecrement,
  onIncrement,
}) => {
  return (
    <div className='p-3'>
      <button className='btn btn-primary' onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          counter={counter}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Counters;
