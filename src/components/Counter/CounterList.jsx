import CounterItem from "./CounterItem";

function CounterList({ ...item }) {
  return <CounterItem {...item} />;
}

export default CounterList;
