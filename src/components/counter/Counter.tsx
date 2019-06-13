import * as React from "react";
import { observer, inject } from "mobx-react";
import CounterStore from "../../stores/CounterStore";

export interface CounterProps {
  counterStore?: CounterStore;
}

@inject("counterStore")
@observer
export default class Counter extends React.Component<CounterProps> {
  public render() {
    // const { number, increase, decrease } = this.props.counterStore!;
    const store = this.props.counterStore!;
    return (
      <div>
        <h1>{store.number}</h1>
        <button onClick={store.increase}>+1</button>
        <button onClick={store.decrease}>-1</button>
      </div>
    );
  }
}

// 어찌어찌 funtional로 해볼 순 있는데 별로다.
// import * as React from "react";
// import { observer, inject } from "mobx-react";
// import CounterStore from "../../stores/CounterStore";

// export interface CounterProps {
//   counterStore?: CounterStore;
// }

// const Counter = (props: CounterProps) => {
//   const store = props.counterStore;
//   return (
//     <div>
//       <h1>{store!.number}</h1>
//       <button onClick={store!.increase}>+1</button>
//       <button onClick={store!.decrease}>-1</button>
//     </div>
//   );
// };
// export default inject("counterStore")(observer(Counter));
