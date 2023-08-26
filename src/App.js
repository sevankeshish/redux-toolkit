import "./App.css";
import { Provider } from "react-redux";
import { store } from "./features/store";
import AddTodoForm from "./components/Todos/AddTodoForm";
import TodoList from "./components/Todos/TodoList";
import TotalCompleteItems from "./components/Todos/TotalCompleteTodo";
// import CounterComp from "./components/CounterComp";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    // <div className="App container">
    //   {/* <h1>hi saheb !</h1> */}
    //   {/* <CounterComp /> */}
    //   <AddTodoForm />
    //   <TodoList />
    //   {/* <TotalCompleteItems /> */}
    // </div>
    <Provider store={store}>
      <div className="App">
        <AddTodoForm />
        <TodoList />
        <TotalCompleteItems />
      </div>
    </Provider>
  );
}

export default App;
