export interface RegUser {
  username: string;
  email: string;
  password: string;
}

export interface loginUser {
  username: string;
  password: string;
}

export interface messageObj {
  username: string;
  message: string;
  avatar?: string;
}

export interface createPost {
  title: string;
  content: string;
}
