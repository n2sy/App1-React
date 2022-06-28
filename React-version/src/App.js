import './App.css';
import Backdrop from './components/Backdrop';
import Course from './components/Course';
import Modal from './components/Modal';
// import ReactDOM from 'react-dom/client';
import { useState } from 'react';

function App() {
  const listCourses = [
    {
      id: 1,
      title: "React Course"
    },
    {
      id: 2,
      title: "Angular Course"
    },
    {
      id: 3,
      title: "Django Course"
    },
  ]

  const [tab, setTab] = useState(listCourses);

  function deleteCourse(id) {
    let newT = tab.filter((c) => c.id !== id);
    console.log(newT);
    setTab(newT);
  }



  function addCourse() {
    let newTab = [{
      id: 4,
      title: "Spring Course"
    }, ...tab,];
    console.log(newTab);
    setTab(newTab);
    // listCourses.push(
    //   {
    //     id: 3,
    //     title: "Spring Course"
    //   }
    // );
    // setTab((prev) => {
    //   return [...prev, { id: 3, title: "Spring Course" }]
    // });
    console.log(tab);
  }
  return (
    <div>
      <h1>My Courses</h1>
      <button onClick={addCourse} class="btn">+</button>
      <br />
      <div id="list-courses">
        {tab.map((c) => {
          return <Course key={c.id} onDelete={deleteCourse} title={c.title} id={c.id}></Course>
        })}

        {/* {[<Course title={listCourses[0].title} />, <Course title={listCourses[1].title} />]} */}
        {/* <Course title="React Course"></Course>
        <Course title="Angular Course"></Course>
        <Course title="Vue.js Course"></Course> */}
        {/* <Modal></Modal>
        <Backdrop></Backdrop> */}
      </div>

    </div>


  );
}

export default App;
