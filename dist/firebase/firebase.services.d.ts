export declare class FirebaseService {
    private db;
    constructor();
    createUser(name: string): Promise<string>;
    getUsers(): Promise<any>;
    updateUser(key: string, name: string): Promise<string>;
    deleteUser(key: string): Promise<string>;
    getUserByName(name: string): Promise<any>;
}
