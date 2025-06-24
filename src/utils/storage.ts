// نظام تخزين البيانات المحسن
export interface StorageItem {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface Student extends StorageItem {
  name: string;
  grade: string;
  class: string;
  gender: string;
  studentPhone: string;
  parentPhone: string;
  subject: string;
  status: 'active' | 'inactive';
  notes?: string;
}

export interface Appointment extends StorageItem {
  name: string;
  phone: string;
  date: string;
  time: string;
  subject: string;
  notes?: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
}

export interface TeacherApplication extends StorageItem {
  name: string;
  subject: string;
  phone: string;
  email?: string;
  experience?: string;
  qualifications?: string;
  status: 'pending' | 'approved' | 'rejected';
  notes?: string;
}

export interface ContactMessage extends StorageItem {
  name: string;
  email?: string;
  phone: string;
  subject: string;
  message: string;
  status: 'unread' | 'read' | 'replied';
}

export class DataStorage {
  private static readonly STUDENTS_KEY = 'kian_students';
  private static readonly APPOINTMENTS_KEY = 'kian_appointments';
  private static readonly TEACHERS_KEY = 'kian_teachers';
  private static readonly MESSAGES_KEY = 'kian_messages';

  // Students
  static getStudents(): Student[] {
    return this.getFromStorage<Student>(this.STUDENTS_KEY);
  }

  static addStudent(student: Omit<Student, 'id' | 'createdAt' | 'updatedAt'>): Student {
    const newStudent: Student = {
      ...student,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const students = this.getStudents();
    students.push(newStudent);
    this.saveToStorage(this.STUDENTS_KEY, students);
    
    return newStudent;
  }

  static updateStudent(id: string, updates: Partial<Student>): Student | null {
    const students = this.getStudents();
    const index = students.findIndex(s => s.id === id);
    
    if (index !== -1) {
      students[index] = {
        ...students[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      this.saveToStorage(this.STUDENTS_KEY, students);
      return students[index];
    }
    
    return null;
  }

  static deleteStudent(id: string): boolean {
    const students = this.getStudents();
    const filtered = students.filter(s => s.id !== id);
    
    if (filtered.length !== students.length) {
      this.saveToStorage(this.STUDENTS_KEY, filtered);
      return true;
    }
    
    return false;
  }

  // Appointments
  static getAppointments(): Appointment[] {
    return this.getFromStorage<Appointment>(this.APPOINTMENTS_KEY);
  }

  static addAppointment(appointment: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>): Appointment {
    const newAppointment: Appointment = {
      ...appointment,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const appointments = this.getAppointments();
    appointments.push(newAppointment);
    this.saveToStorage(this.APPOINTMENTS_KEY, appointments);
    
    return newAppointment;
  }

  static updateAppointment(id: string, updates: Partial<Appointment>): Appointment | null {
    const appointments = this.getAppointments();
    const index = appointments.findIndex(a => a.id === id);
    
    if (index !== -1) {
      appointments[index] = {
        ...appointments[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      this.saveToStorage(this.APPOINTMENTS_KEY, appointments);
      return appointments[index];
    }
    
    return null;
  }

  static deleteAppointment(id: string): boolean {
    const appointments = this.getAppointments();
    const filtered = appointments.filter(a => a.id !== id);
    
    if (filtered.length !== appointments.length) {
      this.saveToStorage(this.APPOINTMENTS_KEY, filtered);
      return true;
    }
    
    return false;
  }

  // Teacher Applications
  static getTeacherApplications(): TeacherApplication[] {
    return this.getFromStorage<TeacherApplication>(this.TEACHERS_KEY);
  }

  static addTeacherApplication(teacher: Omit<TeacherApplication, 'id' | 'createdAt' | 'updatedAt'>): TeacherApplication {
    const newTeacher: TeacherApplication = {
      ...teacher,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const teachers = this.getTeacherApplications();
    teachers.push(newTeacher);
    this.saveToStorage(this.TEACHERS_KEY, teachers);
    
    return newTeacher;
  }

  static updateTeacherApplication(id: string, updates: Partial<TeacherApplication>): TeacherApplication | null {
    const teachers = this.getTeacherApplications();
    const index = teachers.findIndex(t => t.id === id);
    
    if (index !== -1) {
      teachers[index] = {
        ...teachers[index],
        ...updates,
        updatedAt: new Date().toISOString()
      };
      this.saveToStorage(this.TEACHERS_KEY, teachers);
      return teachers[index];
    }
    
    return null;
  }

  // Contact Messages
  static getContactMessages(): ContactMessage[] {
    return this.getFromStorage<ContactMessage>(this.MESSAGES_KEY);
  }

  static addContactMessage(message: Omit<ContactMessage, 'id' | 'createdAt' | 'updatedAt'>): ContactMessage {
    const newMessage: ContactMessage = {
      ...message,
      id: this.generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    const messages = this.getContactMessages();
    messages.push(newMessage);
    this.saveToStorage(this.MESSAGES_KEY, messages);
    
    return newMessage;
  }

  // Helper methods
  private static getFromStorage<T extends StorageItem>(key: string): T[] {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  }

  private static saveToStorage<T>(key: string, data: T[]): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error('Error saving to storage:', error);
    }
  }

  private static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  // Export/Import functionality
  static exportData(): string {
    const data = {
      students: this.getStudents(),
      appointments: this.getAppointments(),
      teachers: this.getTeacherApplications(),
      messages: this.getContactMessages(),
      exportDate: new Date().toISOString()
    };
    
    return JSON.stringify(data, null, 2);
  }

  static importData(jsonData: string): boolean {
    try {
      const data = JSON.parse(jsonData);
      
      if (data.students) this.saveToStorage(this.STUDENTS_KEY, data.students);
      if (data.appointments) this.saveToStorage(this.APPOINTMENTS_KEY, data.appointments);
      if (data.teachers) this.saveToStorage(this.TEACHERS_KEY, data.teachers);
      if (data.messages) this.saveToStorage(this.MESSAGES_KEY, data.messages);
      
      return true;
    } catch {
      return false;
    }
  }

  // Statistics
  static getStatistics() {
    const students = this.getStudents();
    const appointments = this.getAppointments();
    const teachers = this.getTeacherApplications();
    const messages = this.getContactMessages();

    return {
      totalStudents: students.length,
      activeStudents: students.filter(s => s.status === 'active').length,
      totalAppointments: appointments.length,
      pendingAppointments: appointments.filter(a => a.status === 'pending').length,
      confirmedAppointments: appointments.filter(a => a.status === 'confirmed').length,
      totalTeacherApplications: teachers.length,
      pendingTeacherApplications: teachers.filter(t => t.status === 'pending').length,
      totalMessages: messages.length,
      unreadMessages: messages.filter(m => m.status === 'unread').length
    };
  }
}