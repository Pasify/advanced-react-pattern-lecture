import Counter from "./components/Counter";
function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      {/* <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
      /> */}
      <Counter>
        <Counter.Label>my flexible counter</Counter.Label>
        <Counter.Decrease icon="-" />
        <Counter.Count />
        <Counter.Increase icon="+" />
      </Counter>

      <div>
        <Counter>
          <Counter.Decrease icon="◀" />
          <div>
            <Counter.Count />
          </div>
          <Counter.Increase icon="▶" />
        </Counter>
      </div>
    </div>
  );
}

export default App;
