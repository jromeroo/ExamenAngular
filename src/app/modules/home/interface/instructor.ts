export interface IInstructor {
    id: number;
    name: string;
    lastNam: string;
    educationTitle: string;
    image: string;
}

export interface ILogin {
    username: string;
    password: string;
}
export interface ICurso {
    id: number;
    name: string;
    feature: boolean;
    image: string;
    language: string;
    price: number;
    duration: number;
    lessons: number;
    deadline: string;
    students: number;
    summary: string;
    instructor: number;
    category: number;
}
