const form = document.querySelector("#input_form")
const inputEmail = document.querySelector("#input_email")
const submit = document.querySelector("#input_submit")
const inputPassword = document.querySelector("#input_password")

if(localStorage.getItem('token')!=null){
    window.location = '/account/account.html';
}

form.addEventListener("submit", function(e){
    e.preventDefault()
    loginFunction(inputEmail.value, inputPassword.value)
})


const loginFunction = async (eml, pass) => {
    if(eml.length>24) return
    const request = await fetch(`https://loginbackend-rg.herokuapp.com/login`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"email": eml, "password": pass})
    })
    const data = await request.json()
    if(!data.status==false){
        const token = data.token
        localStorage.setItem('token', token);
        window.location = '/account/account.html';
    }else{
        alert("Sads konts nepastav")
    }
}