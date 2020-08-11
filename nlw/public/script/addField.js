//Search button
document.querySelector("#add-time")
//When I click the button
.addEventListener("click", cloneField)
//Execute an action
function cloneField() {
    //Clone the fields
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);
    //Take the fields
    const fields = newFieldContainer.querySelectorAll('input');
    //Clean each field
    fields.forEach(function (field) {
        //Take the current field and clean it
        field.value = ""
    })
    //Show in the webpage
    document.querySelector('#schedule-item').appendChild(newFieldContainer)
}
