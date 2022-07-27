export interface IClassroomDB {
    id: string,
    name: string,
    module: number
}

export class Classroom {
    constructor(
        private id: string,
        private name: string,
        private students: string[],
        private module: number
    ){
        this.id = id
        this.name = name
        this.students = students
        this.module = module
    }

    public getId(){
        return this.id
    }

    public getName(){
        return this. name
    }

    public getStudents(){
        this.students
    }

    public getModule(){
        this.module
    }

    public setId(newId: string){
        this.id = newId
    }

    public setName(newName: string){
        this.name = newName
    }

    public setStudents(newStudents: string[]){
        this.students = newStudents
    }

    public setModules(newModule: number){
        this.module = newModule
    }
}