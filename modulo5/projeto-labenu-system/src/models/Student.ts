export interface IStudentDB  {
    id: string,
    name:string,
    email: string, 
    birthdate: Date,
    classroomId: null | string,
}

export class Student {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private birthdate: Date,
        private classroomId: null | string,
        private hobbies: string[]
    ){
        this.id = id
        this.name = name
        this.email = email
        this.birthdate = birthdate
        this.classroomId = classroomId
        this.hobbies = hobbies
    }

    public getId(){
        return this.id
    }

    public getName(){
        return this.name
    }

    public getEmail(){
        return this.email
    }

    public getBirthdate(){
        return this.birthdate
    }

    public getClassroomId(){
        return this.classroomId
    }

    public getHobbies(){
        return this.hobbies
    }

    public setId(newId: string){
        this.id = newId
    }

    public setName(newName: string){
        this.name = newName
    }

    public setEmail(newEmail:string){
        this.email = newEmail
    }

    public setBirthdate(newBirthdate:Date){
        this.birthdate = newBirthdate
    }

    public setClassroomId(newClassroomId:null | string){
        this.classroomId = newClassroomId
    }

    public setHobbies(newHobbies: string[]){
        this.hobbies = newHobbies
    }
}