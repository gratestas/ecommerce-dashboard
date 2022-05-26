const baseUrl = "http://localhost:5000";

export const signUp = async (formData) => {
  const res = await fetch(`${baseUrl}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const data = await res.json();
  console.log("from signup api", data);
  return data; //data = { newUser, token}
};

export const signIn = async (formData) => {};
