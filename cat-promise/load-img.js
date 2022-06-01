export function loadImg(imgURL, idx) {
  return new Promise((resolve, reject) => {
    console.log(`Start ${idx} img loader promise(p${idx})...`); // for logger

    const image = new Image(); // <img src="" alt="" />
    image.src = imgURL; // loading... image from any paths

    image.addEventListener("load", () => { // loaded image file
      resolve(imgURL);
      console.log(`Finished ${idx} img loader promise(p${idx})`); // for logger
    });
  });
}
