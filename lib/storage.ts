import { db } from './firebase';
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
  orderBy,
  Timestamp
} from 'firebase/firestore';

export interface Project {
  id?: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  type: 'personal' | 'contributed';
  createdAt?: any;
  order?: number;
}

const COLLECTION_NAME = 'projects';

export const projectStorage = {
  // Get all projects
  getAll: async (): Promise<Project[]> => {
    try {
      const q = query(collection(db, COLLECTION_NAME), orderBy('createdAt', 'desc'));
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Project));
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [];
    }
  },

  // Get projects by type
  getByType: async (type: 'personal' | 'contributed'): Promise<Project[]> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('type', '==', type),
        orderBy('createdAt', 'desc')
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Project));
    } catch (error) {
      console.error(`Error fetching ${type} projects:`, error);
      return [];
    }
  },

  // Add new project
  add: async (project: Omit<Project, 'id'>): Promise<Project | null> => {
    try {
      const docRef = await addDoc(collection(db, COLLECTION_NAME), {
        ...project,
        createdAt: Timestamp.now()
      });
      return {
        id: docRef.id,
        ...project
      };
    } catch (error) {
      console.error('Error adding project:', error);
      return null;
    }
  },

  // Update existing project
  update: async (id: string, updates: Partial<Project>): Promise<boolean> => {
    try {
      const docRef = doc(db, COLLECTION_NAME, id);
      await updateDoc(docRef, updates);
      return true;
    } catch (error) {
      console.error('Error updating project:', error);
      return false;
    }
  },

  // Delete project
  delete: async (id: string): Promise<boolean> => {
    try {
      await deleteDoc(doc(db, COLLECTION_NAME, id));
      return true;
    } catch (error) {
      console.error('Error deleting project:', error);
      return false;
    }
  }
};
