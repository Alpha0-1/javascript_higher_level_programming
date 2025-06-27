/**
 * Module: StudentWithFiltering
 * Description: Represents a student with additional filtering capabilities.
 */

const Student = require('./9-student');

/**
 * Class name: StudentWithFiltering
 * Description: Extends the Student class with filtering capabilities.
 */
class StudentWithFiltering extends Student {
  /**
   * Constructor name: StudentWithFiltering
   * Description: Creates a new StudentWithFiltering instance.
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {number} age - The age of the student.
   * @param {string} location - The location of the student.
   */
  constructor(firstName, lastName, age, location) {
    super(firstName, lastName, age);
    this.location = location;
  }

  /**
   * Method name: toObject
   * Description: Converts the student instance to a plain object.
   * @returns {Object} A plain object with student properties.
   */
  toObject() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      age: this.age,
      location: this.location
    };
  }

  /**
   * Method name: filterByLocation
   * Description: Static method to filter students by location.
   * @param {Array<StudentWithFiltering>} students - Array of students to filter.
   * @param {string} location - Location to filter by.
   * @returns {Array<StudentWithFiltering>} Students at the specified location.
   */
  static filterByLocation(students, location) {
    return students.filter(student => student.location === location);
  }
}

// Example usage:
if (require.main === module) {
  const student1 = new StudentWithFiltering("Frank", "Johnson", 23, "New York");
  const student2 = new StudentWithFiltering("Grace", "Chen", 19, "California");
  const student3 = new StudentWithFiltering("Henry", "Williams", 21, "New York");

  const allStudents = [student1, student2, student3];
  const newYorkStudents = StudentWithFiltering.filterByLocation(allStudents, "New York");

  console.log(`Students in New York:`);
  newYorkStudents.forEach(student => {
    console.log(`${student.firstName} ${student.lastName}, Age: ${student.age}`);
  });
}

module.exports = StudentWithFiltering;
