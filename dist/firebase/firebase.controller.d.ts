import { FirebaseService } from './firebase.services';
export declare class FirebaseController {
    private readonly firebaseService;
    constructor(firebaseService: FirebaseService);
    createName(name: string): Promise<string>;
    getName(name: string): Promise<any>;
    updateName(id: string, name: string): Promise<string>;
    deleteName(id: string): Promise<string>;
    getAllNames(): Promise<any>;
}
