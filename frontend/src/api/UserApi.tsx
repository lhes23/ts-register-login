const url = "http://localhost:5000/api/users";

type IUser = {
  username: string;
  password: string;
};

type IUserRegister = IUser & {
  email: string;
};

export const AddNewUser = async ({
  username,
  email,
  password,
}: IUserRegister) => {
  const res = await fetch(url + "/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  return res;
};

export const loginUser = async ({ username, password }: IUser) => {
  const res = await fetch(url + "/login", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ username, password }),
  });

  return res;
};
