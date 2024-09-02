// const a = 1;
// const b = 2;
// const c = 3;

// console.log(a);
// setTimeout(() => console.log(b), 1000);
// console.log(c);

// let janji = new Promise((resolve, reject) => {
//   //executor
//   setTimeout(() => resolve("Done"), 1000);
//   //   setTimeout(() => reject("Error"), 1000);
// });

// janji
//   .then((hasil) => {
//     console.log("INI HASIL", hasil);
//   })
//   .catch((error) => {
//     console.log("INI ERROR", error);
//   })
//   .finally(() => {
//     console.log("[INI RESOLVE], Resolve maupun Reject tetap dijalankan");
//   });

function fetchDatJoke() {
  fetch("https://icanhadadjoke.com/", {
    headers: { Accept: "application/json" },
  }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTp error! Status: ${response.status}`);
    }
    return response.json();
  });
}
