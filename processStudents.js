function processStudents(students) {
    const filteredStudents = students.filter(student => student.marks > 60);
  
    const sortedStudents = filteredStudents.sort((a, b) => b.marks - a.marks);
  
    const studentNames = sortedStudents.map(student => student.name);
  
    return studentNames;
  }
  
  const students = [
    { name: "Alice", marks: 58 },
    { name: "Bob", marks: 85 },
    { name: "Charlie", marks: 92 },
    { name: "David", marks: 45 }
  ];
  
  console.log(processStudents(students));
  