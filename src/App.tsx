import { Component, createSignal } from 'solid-js';

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return <div>你好</div>;
};

export default App;
