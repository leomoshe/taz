export class User {
    public id: number;
    public username: string;
    public password: string;
    public firstname: string;
    public lastname: string;
    public role: User.Role;
}

export namespace User {
    export enum Role {
        Admin,
        User
    }
}