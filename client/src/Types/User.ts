export interface User {
  redirect: boolean;
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
    image?: string;
    emailVerified: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export interface UserData {
  message: string;
  user: {
    name: string;
    email: string;
    emailVerified: boolean;
    image?: string;
    createdAt: Date;
    updatedAt: Date;
    id: string;
  };
}
