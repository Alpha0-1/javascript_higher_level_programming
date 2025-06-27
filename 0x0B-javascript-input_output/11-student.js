/**
 * Module: StudentWithReload
 * Description: Represents a student that can be reloaded from a JSON file.
 */

const Student = require('./9-student');
const fs = require('fs');

/**
 * Class name: StudentWithReload
 * Description: Extends the Student class with reload capability from JSON file.
 */
class StudentWithReload extends Student {
  /**
   * Constructor name: StudentWithReload
   * Description: Creates a new StudentWithReload instance.
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {number} age - The age of the student.
   * @param {string} filePath - Path to the JSON file for reloading.
   */
  constructor(firstName, lastName, age, filePath) {
    super(firstName, lastName, age);
    this.filePath = filePath;
  }

  /**
   * Method name: save
   * Description: Saves the student data to the JSON file.
   */
  save() {
    try {
      const data = JSON.stringify(this.toObject(), null, 2);
      fs.writeFileSync(this.filePath, data);
      console.log(`Student saved to file: ${this.filePath}`);
    } catch (error) {
      throw new Error(`Error saving student to file: ${error.message}`);
    }
  }

  /**
   * Method name: reload
   * Description: Reloads the student data from the JSON file.
   * @returns {StudentWithReload} A new StudentWithReload instance with updated data.
   */
  reload() {
    try {
      const data = fs.readFileSync(this.filePath, 'utf8');
      const obj = JSON.parse(data);
      
      // Return a new instance with updated data
      return new StudentWithReload(
        obj.firstName,
        obj.lastName,
        obj.age,
        this.filePath
      );
    } catch (error) {
      throw new Error(`Error reloading student from file: ${error.message}`);
    }
  }
}

// Example usage:
if (require.main === module) {
  const filePath = 'student.json';
  
  // Create a new student and save it
  const student1 = new StudentWithReload("Isabel", "Martinez", 24, filePath);
  student1.save();
  
  // Modify the original instance (these changes won't be saved)
  student1.age = 25;
  student1.firstName = "Izzy";
  
  // Reload from file to get the original saved version
  try {
    const reloadedStudent = student1.reload();
    console.log('Reloaded student:', reloadedStudent.toObject());
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = StudentWithReload;
