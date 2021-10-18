export const userRegister = (formValues) => {
  return fetch('https://lab-api-bq.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: formValues.name,
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

export const userId = (name, role, id) => {
  return fetch(`https://lab-api-bq.herokuapp.com/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "role": role
    })
  });
};

export const getProducts = async () => {
  return await fetch(`https://lab-api-bq.herokuapp.com/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`
    }
  });
};


export const setOrder = (objctOrder) => fetch("https://lab-api-bq.herokuapp.com/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `${localStorage.getItem("token")}`,
    "accept": "application/json"
  },
  body: JSON.stringify(objctOrder)
});

export const getAllOrders = async () => {
  return await fetch(`https://lab-api-bq.herokuapp.com/orders`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  });
};

export const getOrderStatus = async (id, status) => {
  return await fetch(`https://lab-api-bq.herokuapp.com/orders/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(
      { status: status }
    )
  })
};