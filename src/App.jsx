import './App.css';
import UseRefExample1 from "./components/UseRefExample1"
import UseRefExample2 from "./components/UseRefExample2"
import UseRefExample3 from "./components/UseRefExample3"
import UseMemoExample from "./components/UseMemoExample"
import UseCallbackExample from "./components/UseCallbackExample"
import CustomHookExampl1 from "./components/CustomHookExampl1"
import CustomHookExample2 from "./components/CustomHookExample2"

function App() {
  return (
    <div className="container mt-5">
      {/* <UseRefExample1></UseRefExample1>
      <UseRefExample2></UseRefExample2>
      <UseRefExample3></UseRefExample3>
      <UseMemoExample></UseMemoExample> 
      <UseCallbackExample></UseCallbackExample>
      <CustomHookExampl1></CustomHookExampl1>*/}
      <CustomHookExample2></CustomHookExample2>
    </div>
  );
}

export default App;
