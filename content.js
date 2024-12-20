(() => {
    const details = {
        //Please Modify the details accordingly
        name: "FSMM",
        email: "jo@example.com",
        phone: "1234567890",
        address: "123 Main Street, Anytown, NA",
        TRN: "TRN12345678"
    }
})

const fields = [
    { selector: "input[name=`name`]", value: details.name },
    { selector: "input[name=`email`]", value: details.email },
    { selector: "input[name=`address`]", value: details.address },
    { selector: "input[name=`phone`]", value: details.phone },
    { selector: "input[name=`TRN`]", value: details.TRN }
]

fields.forEach(field => {
    const element = document.querySelector(field.selector);
    if (element) {
        element.value = field.value;
        element.dispatchEvent(new Event("input", { bubbles: true }))
    }
})

alert("form filled successfully!")
