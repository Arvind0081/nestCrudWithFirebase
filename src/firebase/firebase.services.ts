import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';


@Injectable()
export class FirebaseService {

  private db;
  constructor() {
    this.db= admin.database();
  }

  async createUser(name: string): Promise<string> {
    const userRef =this.db.ref('/userData');
    await userRef.push({ name }); 
    return 'User created successfully.';
  }

  // Get all users
  async getUsers(): Promise<any> {
    const snapshot = await this.db.ref('/userData').once('value');
    return snapshot.val();
  }

  // Update a user by key
  async updateUser(key: string, name: string): Promise<string> {
    const userRef = this.db.ref(`/userData/${key}`);
    await userRef.update({ name }); 
    return 'User updated successfully.';
  }

  // Delete a user by key
  async deleteUser(key: string): Promise<string> {
    const userRef = this.db.ref(`/userData/${key}`);
    await userRef.remove(); // Remove the user entry
    return 'User deleted successfully.';
  }
  async getUserByName(name: string): Promise<any> {
    const snapshot = await this.db.ref('/userData').once('value');
    const users = snapshot.val();
    const result = Object.entries(users)
      .filter(([key, user]:any) => user.name === name)
      .reduce((acc, [key, user]) => {
        acc[key] = user;
        return acc;
      }, {});
    return result;
  }
}
