/* -----------------------FOR index.html----------------------- */
const header = document.querySelector(".header");
const yellowBlock = document.querySelector(".yellow");
const greenBlock = document.querySelector(".green");

const blockDelete = (el) => {
  el.classList.toggle("blockVisibility");
};

const blockChange = (el1, el2) => {
  el1.classList.toggle("yellow");
  el1.classList.toggle("green");
  el2.classList.toggle("yellow");
  el2.classList.toggle("green");
};

/* -----------------------FOR forma.html----------------------- */
// $(document).ready(function () {
//   $("#Form").submit(function (event) {
//     event.preventDefault();
//     let formData = new FormData(this);
//     var jsonObject = {};
//     formData.forEach(function (value, key) {
//       jsonObject[key] = value;
//     });

//     $.ajax({
//       url: "handler.php",
//       type: "GET",
//       data: jsonObject,
//       success: function (response) {
//         alert("Данные успешно дошли");
//       },
//       error: function (xhr, status, error) {
//         console.error(status, error);
//       },
//     });

//     $("#json-output").text(JSON.stringify(jsonObject, null, 2));

//   });
// });
