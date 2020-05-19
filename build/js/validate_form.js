$(function () {
    $.validator.addMethod("userName", function (value, element) {
        return this.optional(element) ||/^([ a-zA-ZА-Яа-я._-]+$)/i.test(value);
    }, "Enter correct Name");

    $('#form').validate({
        rules: {
            userName: {
                required: true,
                userName: true,
            },
            formSelect: {
                required: true,
            },
            email: {
                required: true,
            },
            checkbox: {
                required: true,
            },
        },
        messages: {
            userName: {
                required: "Enter correct Name",
            },
            email: {
                required: "Enter correct Email",
                email: "Enter correct Email" 
            },
            formSelect: {
                required: "Choise country",
            },
            checkbox: {
                required: "Choise",
            },
        },

    });
    });
