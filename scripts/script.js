const header = document.querySelector(".header");
const yellowBlock = document.querySelector(".yellow");
const greenBlock = document.querySelector(".green");
const form = document.querySelector(".form");
const output = document.querySelector(".output");
const formData = {};
const url = "../handler.php";

/* -----------------------FOR index.html----------------------- */

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

const formSubmit = async () => {
  form.querySelectorAll("select, input").forEach((el) => {
    formData[el.name] = el.value;
  });
  output.innerText = JSON.stringify(formData, null, 2);

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch");
    }

    const responseData = await response.text();
    alert("Response from server: " + responseData);
  } catch (error) {
    console.error("Error:", error);
  }
};

// async function submitForm() {
//   const formData = new FormData(document.querySelector(".form"));
//   const jsonData = JSON.stringify(Object.fromEntries(formData));

//   // const url = `handler.php?dropdown1=${dropdown1}&dropdown2=${dropdown2}&dropdown3=${dropdown3}&dropdown4=${dropdown4}&dropdown5=${dropdown5}&input1=${input1}&input2=${input2}`;

//   try {
//     const response = await fetch('../handler.php', {
//       method: "GET",
//     });
//     if (!response.ok) {
//       throw new Error("Ошибка HTTP: " + response.status);
//     }
//     alert("Данные дошли успешно");
//   } catch (error) {
//     console.error("Ошибка:", error);
//   }
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
