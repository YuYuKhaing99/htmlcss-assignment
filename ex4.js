const student_array = [
  {
    Name: "John",
    credits: 120 ,
    hasLeft: function () {
    return 240 - this.credits;
  },
  },

  {
    Name: "Tim",
    credits: 150 ,
    hasLeft: function () {
    return 240 - this.credits;
  },
  },

  {
    Name: "Dior",
    credits: 170 ,
    hasLeft: function () {
    return 240 - this.credits;
  },
  } 
];


for (const student of student_array) {
    console.log(
    student.Name + "- " +
    " credit left: " +
    student.hasLeft() +
    " credits.",
);
}
