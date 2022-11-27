export {};

declare global {
  interface Window {
    crawlear: Crawlear;
  }

  interface User {
    photoURL: string,
    description: string,
    instagram: string,
    displayName: string,
    registrationDate: string,
    uid: string
  }

  interface Crawlear {
    fb: any,
    user: User
  }
}