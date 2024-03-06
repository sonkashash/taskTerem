const form = document.querySelector(".form");
const output = document.querySelector(".output");
const formData = {};
const url = "../php/handler.php";

const jsonPrint = () => {
    form.querySelectorAll("select, input").forEach((el) => {
      formData[el.name] = el.value;
    });
    output.innerText = JSON.stringify(formData, null, 2);
  };
  
  const getRequest = async () => {
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
  
  const formSubmit = () => {
    jsonPrint();
    getRequest();
  };
  