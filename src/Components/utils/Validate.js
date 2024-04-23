export const checkValidate = (email, password) => {
  // const nameValidate = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)
  const emailValidate = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const passwordValidate =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  //    if(!nameValidate) return "Name Not Valid"
  if (!emailValidate) return "Email Not Vaild";
  if (!passwordValidate) return "PassWord Not Valid";

  return null;
};
