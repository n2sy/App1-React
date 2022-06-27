import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Course(props) {
    const [isOpen, setIsOpen] = useState(false);

    function deleteHandler() {
        console.log("Clicked !");
        console.log(props.title);
        // setIsOpen(true);
        setIsOpen(prevIsOpen => !prevIsOpen);
    }
    function confirmHandler() {
        console.log("Confirm !");
        // setIsOpen(true);
        setIsOpen(prevIsOpen => !prevIsOpen);
    }
    function cancelHandler() {
        console.log("Cancel !");
        // setIsOpen(true);
        setIsOpen(prevIsOpen => !prevIsOpen);
    }
    return (
        <div>
            <div className="card">
                <h2>{props.title}</h2>
                <div className="actions">
                    <button onClick={deleteHandler} className="btn">Delete</button>
                </div>
            </div>

            {/* {isOpen ? <Modal></Modal> : null} */}
            {isOpen && <Modal onConfirm={confirmHandler} onCancel={cancelHandler}></Modal>}
            {isOpen && <Backdrop onBackClick={deleteHandler}></Backdrop>}
        </div>
    );

}

export default Course;