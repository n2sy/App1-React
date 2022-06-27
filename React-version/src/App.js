import './App.css';
import Backdrop from './components/Backdrop';
import Course from './components/Course';
import Modal from './components/Modal';
// import ReactDOM from 'react-dom/client';




function App() {

  // function addCourse() {
  //   const elt = ReactDOM.createRoot(document.getElementById('list-courses'));
  //   elt.render(<Course></Course>);
  // }
  return (
    <div>
      <h1>My Courses</h1>
      {/* <button onClick={addCourse} class="btn">+</button> */}
      <div id="list-courses">
        <Course title="React Course"></Course>
        <Course title="Angular Course"></Course>
        <Course title="Vue.js Course"></Course>
        {/* <Modal></Modal>
        <Backdrop></Backdrop> */}
      </div>

    </div>


  );
}

export default App;
