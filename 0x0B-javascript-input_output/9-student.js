/**
 * Module: Student
 * Description: Represents a student with basic information.
 */

/**
 * Class name: Student
 * Description: A class representing a student with name and age.
 */
class Student {
  /**
   * Constructor name: Student
   * Description: Creates a new Student instance.
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {number} age - The age of the student.
   */
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
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
      age: this.age
    };
  }
}

// Example usage:
if (require.main === module) {
  const student = new Student("Elena", "Rodriguez", 20);
  console.log(`Student: ${student.firstName} ${student.lastName}, Age: ${student.age}`);
  console.log('Student object:', student.toObject());
}

module.exports = Student;
