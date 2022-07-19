import { Student } from './Student'
import { Teacher } from './Teacher';

export interface Course {
    id?: number;
    course: string;
    teachers: Teacher[]
    students: Student[];

}