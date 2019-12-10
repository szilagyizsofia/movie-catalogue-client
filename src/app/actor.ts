export class Actor {
    id: number;
    version: number;
    name: string;
    

    constructor(name, id, version){
        this.name = name;
        this.id = id;
        this.version = version;
    }
}
