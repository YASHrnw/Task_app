import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Input from "./TaskOne/redux/Input";
import Display from "./TaskOne/redux/Display";

// import Localstorege_Form from "./TaskOne/Localstorage_crud_operation";

function App() {
  return (
    <>
      {/* <Localstorege_Form /> */}
      <Input />
      <Display />
    </>
  );
}

export default App;
