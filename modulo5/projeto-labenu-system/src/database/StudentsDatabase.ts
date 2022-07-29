import { IStudentDB } from "../models/Student";
import { BaseDatabase } from "./BaseDatabase";

export class StudentsDatabase extends BaseDatabase {
  public static TABLE_STUDENTS = "Labe_Students";
  public static TABLE_HOBBIES = "Labe_Hobbies";
  public static TABLE_STUDENTS_HOBBIES = "Students_Hobbies";

  public async getAllStudents() {
    const result = await BaseDatabase.connection(StudentsDatabase.TABLE_STUDENTS)
    .select();

    return result;
  }

  public async createStudent(student: IStudentDB) {
    await BaseDatabase.connection(StudentsDatabase.TABLE_STUDENTS).insert({
      id: student.id,
      name: student.name,
      email: student.email,
      birthdate: student.birthdate,
      classroom_id: student.classroom_id,
    });
  }

  public async getStudentByName(name: string) {
    const result = await BaseDatabase.connection(
      StudentsDatabase.TABLE_STUDENTS
    )
      .select()
      .where("name", "LIKE", `%${name}%`);
    return result;
  }

  public async updateStudentClassroom(classroomId: string | null, id: string) {
    await BaseDatabase.connection(StudentsDatabase.TABLE_STUDENTS)
      .update({ classroom_id: classroomId })
      .where({ id: id });
  }

  public async getStudentByClassroom(classroom_id: string) {
    const result = await BaseDatabase.connection(
      StudentsDatabase.TABLE_STUDENTS
    )
      .select("id", "name", "email")
      .where("classroom_id", "=", `${classroom_id}`);
    return result;
  }
}
