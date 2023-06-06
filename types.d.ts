type StudentInformation = {
    id: number;
    first_name: string;
    last_name: string;
    gender: string;
    email: string;
    birth_date: Date;
    address: string;
    phone: string;
    enrollment_date: Date;
    department_name: string;
};

type StudentCourses = {
    id: number;
    course_code: string;
    course_name: string;
    course_description: string;
    course_credit: number;
    course_hours: number;
    department_name: string;
    semester: number;
    year: number;
};

type StudentGrades = {
    course_code: string;
    course_name: string;
    midterm_grade: number;
    final_grade: number;
    quiz: number;
    homework: number;
    average: number;
};

type Events = {
    id: number;
    title: string;
    description: string;
    event_date: Date;
    location: string;
};

type AllStudentsWithHours = {
    id: number;
    first_name: string;
    last_name: string;
    total_hours: number;
};

type AddInstructorData = {
    first_name: string;
    last_name: string;
    birth_date: Date;
    gender: string;
    email: string;
    phone: string;
    department_id: string;
};

type InstructorInformation = {
    id: number;
    first_name: string;
    last_name: string;
    birth_date: Date;
    gender: string;
    email: string;
    phone: string;
    department_name: string;
};

type InstructorCourses = {
    id: number;
    code: string;
    name: string;
    description: string;
    credit: number;
    hours: number;
    department_id: number;
    sub_course_id: number;
};

type CourseStudents = {
    student_id: number;
    first_name: string;
    last_name: string;
    gender: string;
    name: string;
};
