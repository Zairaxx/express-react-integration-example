import React, {useState} from 'react'
import axios from 'axios'

const StudentForm = () => {

    const [studentName, setStudentName] = useState("");
    const [studentClass, setStudentClass] = useState("");

    const editName = (e) => {
        setStudentName(e.target.value);
    }

    const editClass = (e) => {
        setStudentClass(e.target.value);
    }

    const addStudent = (e) => {
        axios.post("/api/addStudent", {
            id:4,
            name:studentName,
            class:studentClass
        });
    }

    return(
        <div>
            <form onSubmit={addStudent}>
                <div>
                <label htmlFor="studentName">Name</label>
                <input type="text" name="student" id="studentName" onChange={editName}/>
                </div>
                <div>
                <label htmlFor="studentClass">Class</label>
                <input type="text" name="student" id="studentClass" onChange={editClass}/>
                </div>
                <input type="submit" value="Add student"/>
            </form>
        </div>
    )
}

export default StudentForm