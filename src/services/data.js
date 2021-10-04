export const userRegister = (formValues) => {
  return fetch('https://lab-api-bq.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formValues.username,
      email: formValues.email,
      password: formValues.password,
      role: formValues.role,
      restaurant: 'B&B',
    })
  });
};



export const userLogin = (formValues) => {
  console.log(formValues)
  return fetch("https://lab-api-bq.herokuapp.com/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "email": formValues.email,
      "password": formValues.password
    }),
  });
};

export const userId = (userName, id) => {
  return fetch (`https://lab-api-bq.herokuapp.com/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify ({
      "name": userName
    })
  })
}

export const getProducts = async () => {
  return await fetch (`https://lab-api-bq.herokuapp.com/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:`${localStorage.getItem("token")}`
    }
  })
}

