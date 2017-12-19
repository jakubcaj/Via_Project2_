function validateContactPage() {
    var name = $("#inputName");
    var email = $("#inputEmail");
    var body = $("#inputBody");

    name.css("border-color", "");
    email.css("border-color", "");
    body.css("border-color", "");


    var validated = true;

    if (isEmpty(name.val())) {
        validated = false;
        name.css("border-color", "red");
        toastr.error("Name field must not be empty");
    }

    if (isEmpty(email.val())) {
        validated = false;
        email.css("border-color", "red");
        toastr.error("Email field must not be empty");
    } else {
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.val()))
        {
            validated = false;
            email.css("border-color", "red");
            toastr.error("Email is in incorrect format");
        }
    }

    if (isEmpty(body.val())) {
        validated = false;
        body.css("border-color", "red");
        toastr.error("Body field must not be empty");
    }

    return validated;
}

function isEmpty(value) {
    return value === null || value.length === 0 || value == "";
}