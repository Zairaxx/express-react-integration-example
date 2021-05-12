import React,{useState, useEffect} from 'react'
import axios from 'axios'

const Students = () => {
    const [students, setStudents] = useState();

    useEffect(() => {
        console.log("Students-component mounted!");
        axios.get("/api/students").
        then(res => setStudents(res.data));
    }, [])

    return(
    <div>
        <h2>Students</h2>
        <ul>
        {students && students.map(student =>
        { return <li key={student.id}> Namn:{student.name} Klass:{student.class}</li>
    }
        )}
        </ul>
    </div>)
}

export default Students