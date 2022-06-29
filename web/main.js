"use strict";

const registerBtn = document.getElementById("register-btn");
const loginBtn = document.getElementById("login-btn");
const genresAllBtn = document.getElementById("genres-all-btn");
const moviesAllBtn = document.getElementById("movies-all-btn");
const genreOneBtn = document.getElementById("genre-one-btn");
const movieOneBtn = document.getElementById("movie-one-btn");
const createMovieBtn = document.getElementById("create-movie-btn");
const editGenreBtn = document.getElementById("edit-genre-btn");
const deleteGenreBtn = document.getElementById("delete-genre-btn");

const base = "http:10.10.1.48:8000/api";
const user = {
  name: "arslonbek",
  email: "c@domain.com",
  password: "123123",
};

let token = "";

function endPoint(suffix, method = "get") {
  return function (body = {}, headers = {}, subSuffix = "") {
    const args = {
      method,
      headers: { "Content-Type": "application/json", ...headers },
    };

    if (method.toLowerCase() === "post" || method.toLowerCase() === "put")
      args.body = JSON.stringify(body);

    return fetch(`${base}${suffix}${subSuffix}`, args);
  };
}

const login = endPoint("/auth", "post");
const register = endPoint("/users", "post");
const getAllGenres = endPoint("/genres");
const getOneGenre = endPoint(`/genres`);
const getAllMovies = endPoint("/movies");
const getOneMovie = endPoint("/movies");
const createMovie = endPoint("/movies", "post");
const editGenre = endPoint("/genres", "put");
const deleteGenre = endPoint("/genres", "delete");

const points = [
  {
    btn: registerBtn,
    request: register,
    body: user,
  },
  {
    btn: loginBtn,
    request: login,
    body: { email: user.email, password: user.password },
    callback: (data) => {
      token = data.token;
    },
  },
  {
    btn: genresAllBtn,
    request: getAllGenres,
  },
  {
    btn: genreOneBtn,
    request: getOneGenre,
    id: "/62ba803b61d650336da593c5",
  },
  {
    btn: moviesAllBtn,
    request: getAllMovies,
  },
  {
    btn: movieOneBtn,
    request: getOneMovie,
    id: "/62ba87de6247b7364123e3b7",
  },
  {
    btn: createMovieBtn,
    request: createMovie,
    body: {},
  },
  {
    btn: editGenreBtn,
    request: editGenre,
    body: {},
    id: "",
  },
  {
    btn: deleteGenreBtn,
    request: deleteGenre,
    id: "/62ba88116247b7364123e3db",
    headers: { "x-auth-token": token },
  },
];

for (let point of points) {
  const { btn, request, body, id, callback, headers } = point;
  btn.addEventListener("click", async () => {
    try {
      const res = await request(body, headers, id);
      if (!res.ok) throw new Error("Something error");
      const data = await res.json();
      if (callback) callback(data);
      console.log("data = ", data);
    } catch (err) {
      console.log("error = ", err.message);
    }
  });
}
