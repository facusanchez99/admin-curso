import { Student } from './Student'
import { Teacher } from './Teacher';

export interface Course {
    id: number;
    course: string;
    teachers: Teacher[]
    students: Student[];

    // constructor(id: number,course: string,teachers: Teacher[],students: Student[]) {
    //     this.id = id;
    //     this.course = course;
    //     this.teachers = teachers;
    //     this.students = students;
    // }



}