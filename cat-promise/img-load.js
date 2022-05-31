export function imgLoad(imgURL) {
  const image = new Image();
  image.src = imgURL;

  image.addEventListener("load", () => {
    console.log("image loaded...");
  });
}
