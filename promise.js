"use strict";

// // with callback
function findPassword(wifiName, callback, catchCallback) {
  try {
    console.log(`Searching password of wifi(${wifiName})...`);

    setTimeout(() => {
      const wifiPassword = "xyz0000!!";
      callback(wifiPassword);
    }, 5000);
  } catch (err) {
    catchCallback(err);
  }
}

findPassword(
  "DreamNetwork",
  (password) => {
    console.log(`enter password(${password}) your phone`);
    console.log("Watching video on youtube.com");
  },
  (err) => {}
);

// with promise
function findPassword(wifiName) {
  return new Promise((resolve, reject) => {
    console.log(`Searching password of wifi(${wifiName})...`);
    const isFind = true;

    setTimeout(() => {
      if (isFind) {
        const myPassword = "xyz0000!!";
        resolve(myPassword);
      } else {
        reject(new Error(`Not found wifi(${wifiName}) password`));
      }
    }, 2000);
  });
}

findPassword("DreamNetwork")
  .then((password) => {
    console.log(`enter password(${password}) your phone`);
    const internetIsEnabled = false;
    return internetIsEnabled;
  })
  .then((isEnabled) => {
    if (isEnabled) console.log("Watching video on youtube.com");
    else console.log("Playing football...");
  })
  .catch((err) => {
    console.error(err.message);
    console.log("Playing football...");
  });
