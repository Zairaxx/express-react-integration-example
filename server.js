import express from 'express'

const app = express();

const PORT = 5000;

const students = [
    {id:1, name:"Musse Pigg", class:"9D"},
    {id:2, name:"Pluto", class:"6A"},
    {id:3, name:"Mimmi Mus", class:"8B"}
]

app.use(express.json())


app.get("/", (req,res) => {
    res.end("Startpage")
})

app.get("/api/students", (req,res) => {
    console.log(students);
    res.json(students);
})

app.post("/api/addStudent", (req,res) => {
    let student = req.body;
    console.log(req.body);
    students.push(student);
    res.end();
})


app.listen(PORT, () => {console.log("Server is running on port: " + PORT)})