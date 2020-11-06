type LoginBody =
  | {
      email: string;
      password: string;
    }
  | {
      username: string;
      password: string;
    };

export default LoginBody;
