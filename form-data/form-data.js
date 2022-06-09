"use strict";
const form = document.getElementById("form");

form.addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  const name = document.getElementById("name");
  const files = document.getElementById("files");

  const formData = new FormData(); // [[key,[value1,value2]],[key,value],[key,value]]
  formData.append("name", "Arslonbek");
  formData.append("name", "Boburbek");
  for (let i = 0; i < files.files.length; i++) {
    formData.append("files", files.files[i]);
  }

  formData.forEach((item) => {
    console.log(typeof item);
  });

  console.log(formData.get("name"));
  console.log(formData.getAll("name"));

  // fetch("http://localhost:3000/upload_files", {
  //   method: "POST",
  //   body: formData,
  // }).then((res) => {
  //   console.log(res);
  // });
  // .catch((err) => "Error occured");
}

function submitFormV2(e) {
  e.preventDefault();
  const name = document.getElementById("name");
  const _files = document.getElementById("files");

  for (let file of _files.files) {
    const imgURL = URL.createObjectURL(file);
    console.log("imgURL = ", imgURL);

    const img = document.createElement("img");
    img.width = 200;
    img.height = 200;
    img.src = imgURL;
    document.body.appendChild(img);
  }
}
