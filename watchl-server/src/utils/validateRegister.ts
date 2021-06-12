import { UsernamePassword } from "./usernamePassword";

export const validateRegister = (options: UsernamePassword) => {
  if (!options.email) {
    return [
      {
        field: "email",
        message: "Invalid email format!",
      },
    ];
  }
  if (!options.email.includes("@")) {
    return [
      {
        field: "email",
        message: "Invalid email format!",
      },
    ];
  }
  if (options.username.length <= 2) {
    return [
      {
        field: "username",
        message:
          "Invalid format, username length must be greater than 2 characters!",
      },
    ];
  }
  if (options.username.includes("@")) {
    return [
      {
        field: "username",
        message: "Username cannot include special characters!",
      },
    ];
  }
  if (options.password.length <= 6) {
    return [
      {
        field: "password",
        message:
          "Invalid format, password length must be greater than 6 characters!",
      },
    ];
  }
  return null;
};
