export function loadImg(newImgURL, idx) {
  return new Promise((resolve, reject) => {
    console.log(`Start ${idx} img loader promise(p${idx})...`); // for logger

    const image = new Image(); // <img src="" alt="" />
    image.src = newImgURL; // loading... image from any paths

    image.addEventListener("load", () => {
      resolve(newImgURL);
      console.log(`Finished ${idx} img loader promise(p${idx})`); // for logger
    });
  });
}
