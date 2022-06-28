"use strict";

const base = "http:10.10.1.48:8000/api";

const register = (name, email, password) => {
  fetch(`/users`, {
    method: "post",
    body: JSON.,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err.message);
    });
};



