import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Course(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [myTitle, setMyTitle] = useState(props.title)

    function deleteHandler() {
        console.log("Clicked !");
        props.onDelete(props.id);
        //console.log(props.title);
        // setIsOpen(true);
        //setIsOpen(prevIsOpen => !prevIsOpen);
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

    function changeTitle() {
        setMyTitle('Title Changed');
    }
    return (
        <div>
            <div className="card">
                <h2>{myTitle}</h2>
                <div className="actions">
                    <button onClick={deleteHandler} className="btn">Delete</button>
                    <button onClick={changeTitle} className="btn">Change</button>
                </div>
            </div>

            {/* {isOpen ? <Modal></Modal> : null} */}
            {isOpen && <Modal onConfirm={confirmHandler} onCancel={cancelHandler}></Modal>}
            {isOpen && <Backdrop onBackClick={deleteHandler}></Backdrop>}
        </div>
    );

}

export default Course;