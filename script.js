/* -----------------------FOR index.html----------------------- */
$(document).ready(function () {
    $(".btn-warning").click(function () {
      $("#block0").toggle();
    });
    let blockMoving = false;
    $(".btn-success").click(function () {
      const $block1 = $("#block1");
      const $block2 = $("#block2");
      if (!blockMoving) {
        $block1.insertAfter($block2);
        blockMoving = true;
      } else {
        $block1.insertBefore($block2);
        blockMoving = false;
      }
    });


    $('#exampleModal').modal('show');
  });
/* -----------------------FOR forma.html----------------------- */
$(document).ready(function () {
    $("#Form").submit(function (event) {

        event.preventDefault(); 
        let formData = new FormData(this);
        var jsonObject = {};
        formData.forEach(function (value, key) {
            jsonObject[key] = value;
        });


        $.ajax({
            url: "handler.php",
            type: "GET",
            data: jsonObject,
            success: function (response) {
                alert("Данные успешно дошли");
            },
            error: function (xhr, status, error) {
                console.error(status, error);
            }
        });

        $("#json-output").text(JSON.stringify(jsonObject, null, 2));

        $('#exampleModal').modal('show');
    });
});
