import { IClassroomDB } from "../../models/Classroom"
import { IHobbiesDB, IStudentDB, IStudentsHobbiesDB } from "../../models/Student"

export const classrooms: IClassroomDB[] = [
    {
        id: "101",
        name: "Vaughan",
        module: "5"
    },
    {
        id: "102",
        name: "Hamilton",
        module: "0"
    },
    {
        id: "103",
        name: "Johnson",
        module: "2"
    },
    {
        id:"104",
        name: "Lovelace",
        module: "3"
    }
]

export const students: IStudentDB[] = [
    {
        id: "201",
        name: "Dorothy",
        email: "dorothy@nasa.com",
        birthdate: new Date("1910/09/10"),
        classroom_id: "101"
    },
    {
        id: "202",
        name: "Margaret",
        email: "margaret@mit.com",
        birthdate: new Date("1936/08/17"),
        classroom_id: "102"
    },
    {
        id: "203",
        name: "Katherine",
        email: "katherine@nasa.com",
        birthdate: new Date("1918/08/26"),
        classroom_id: "103"
    },
    {
        id: "204",
        name: "Ada",
        email: "ada@countess.com",
        birthdate: new Date("1815/12/10"),
        classroom_id: "104"
    },
    {
        id: "205",
        name: "Zoey Clarke",
        email: "zoey@sprqpoint.com",
        birthdate: new Date("1985/03/01"),
        classroom_id: "101"
    },
    {
        id: "206",
        name: "Alice",
        email: "alice@wonderland.com",
        birthdate: new Date("1995/09/12"),
        classroom_id: null
    },
    {
        id: "207",
        name: "Daisy",
        email: "daisy@thesix.com",
        birthdate: new Date("2001/12/25"),
        classroom_id: "102"
    },
    {
        id: "208",
        name: "Lizzie Bennet",
        email: "lizzie@pemberley.com",
        birthdate: new Date("1982/11/11"),
        classroom_id: "103"
    },
    {
        id: "209",
        name: "Amy Dunne",
        email: "perfectamy@gone.com",
        birthdate: new Date("1984/06/15"),
        classroom_id: "104"
    },
    {
        id: "210",
        name: "Jane",
        email: "eyre@rochester.com",
        birthdate: new Date("1980/11/01"),
        classroom_id: "101"
    },

    {
        id: "211",
        name: "Eloise",
        email: "fifth@bridgerton.com",
        birthdate: new Date("1980/11/01"),
        classroom_id: "102"
    },

    {
        id: "212",
        name: "Lucy",
        email: "pevensie@narnia.com",
        birthdate: new Date("1953/11/23"),
        classroom_id: "103"
    },

    {
        id: "213",
        name: "Mina",
        email: "murray@draculasucks.com",
        birthdate: new Date("1980/11/01"),
        classroom_id: "104"
    },

]

export const hobbies: IHobbiesDB[] = [
    {
        id: "301",
        title: "Andar de bicicleta"
    },
    {
        id: "302",
        title: "Assistir filmes e séries"
    },
    {
        id: "303",
        title: "Codar"
    },
    {
        id: "304",
        title: "Academia"
    },
    {
        id: "305",
        title: "Correr"
    },
    {
        id: "306",
        title: "Cinema"
    },
    {
        id: "307",
        title: "Games"
    },
    {
        id: "308",
        title: "Cantar"
    },
    {
        id: "309",
        title: "Esportes"
    },
    {
        id: "310",
        title: "Praia"
    }
]

export const studentsHobbies: IStudentsHobbiesDB[] = [
    {
        student_id: "201",
        hobby_id: "301"
    },
    {
        student_id: "202",
        hobby_id: "302"
    },
    {
        student_id: "203",
        hobby_id: "303"
    },
    {
        student_id: "204",
        hobby_id: "304"
    },
    {
        student_id: "205",
        hobby_id: "305"
    },
    {
        student_id: "206",
        hobby_id: "306"
    },
    {
        student_id: "207",
        hobby_id: "307"
    },
    {
        student_id: "208",
        hobby_id: "308"
    },
    {
        student_id: "209",
        hobby_id: "309"
    },
    {
        student_id: "210",
        hobby_id: "310"
    }
]