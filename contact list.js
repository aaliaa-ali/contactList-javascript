var main = document.getElementById("main")
var user = document.getElementById("iNname")
var phone = document.getElementById("iNPhone")
var mail = document.getElementById("iNemail")
var form = document.getElementById("form")
var add = document.getElementById("add")
var submit = document.getElementById("submit")
var contacts = document.getElementById("contacts")
var action = document.getElementById("action")
var select = null

function onFormSubmit() {
    if (select == null)
        addnew();
    else
        update()
}
function addnew() {
    if (user.value == "")
        alert("please insert Contact name")
    else {
        let newContact = document.createElement("div")
        let newName = document.createElement("div")
        let newPhone = document.createElement("div")
        let newEmail = document.createElement("div")
        let newAction = document.createElement("div")
        let del = document.createElement("button")
        let edit = document.createElement("button")

        newContact.className = 'newContact'
        newName.className = 'iNname'
        newEmail.className = 'iNemail'
        newPhone.className = 'iNPhone'
        newAction.className = 'newAction'
        del.className = 'del'
        edit.className = 'edit'
        del.innerHTML = `<i class="fas fa-trash-alt"></i>`
        edit.innerHTML = `<i class="far fa-edit"></i>`

        newAction.appendChild(edit)
        newAction.appendChild(del)
        newContact.appendChild(newName)
        newContact.appendChild(newPhone)
        newContact.appendChild(newEmail)
        newContact.appendChild(newAction)

        main.appendChild(newContact)

        newName.innerHTML = user.value
        newPhone.innerHTML = phone.value
        newEmail.innerHTML = mail.value
        reset()
    }
}
function update(e) {

    select.childNodes[0].innerHTML = user.value
    select.childNodes[1].innerHTML = phone.value
    select.childNodes[2].innerHTML = mail.value
    reset()
}

document.addEventListener("click", editFn)
function editFn(e) {
    if (e.target.className == "edit") {
        select = e.target.parentNode.parentNode
        user.value = select.childNodes[0].innerHTML
        phone.value = select.childNodes[1].innerHTML
        mail.value = select.childNodes[2].innerHTML

    } else if (e.target.parentNode.className == "edit") {
        select = e.target.parentNode.parentNode.parentNode
        user.value = select.childNodes[0].innerHTML
        phone.value = select.childNodes[1].innerHTML
        mail.value = select.childNodes[2].innerHTML
    }
}
function reset() {
    user.value = null
    phone.value = null
    mail.value = null
    select = null
}
document.addEventListener("click", delFun)
function delFun(e) {
    if (e.target.className == "del" ) {

        if (confirm('Are you sure to delete this Contact ?')) {
            e.target.parentNode.parentNode.remove()
        }

    }
    else if ( e.target.parentNode.className == "del") {

        if (confirm('Are you sure to delete this Contact ?')) {
            e.target.parentNode.parentNode.parentNode.remove()
        }

    }
}
