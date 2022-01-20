const form = document.querySelector('#register-form')
const email = document.querySelector('#register-email')
const pass = document.querySelector('#register-pass')
const pass2 = document.querySelector('#register-pass2')
const username = document.querySelector('#register-username')
const number = document.querySelector('#register-number')

form.addEventListener("submit", async (e)=>{
    e.preventDefault()
    if(pass.value!=pass2.value){
        alert("Paroles nesakriit")
        return
    }
    const request = await fetch(`https://loginbackend-rg.herokuapp.com/register`,{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {"email": email.value, 
            "password": pass.value,
            "username": username.value,
            "number": number.value
        })
    })
    const response = await request.json()
    console.log(response)
    if(response.message=="IN"){
        alert("Numurs ko jūs ievadījāt neatbilst prasībām")
        return
    }
    else if(response.message=="WE"){
        alert("Epasts ko jūs ievadījāt, jau eksistē datubāzē")
        return
    }
    else if(response.message=="WU"){
        alert("Lietotajvards ko jūs ievadijāt, jau eksistē datubāzē")
        return
    }
    else if(response.message=="WN"){
        alert("Numurs ko jūs ievadījāt, jau eksistē datubāzē")
        return
    }else{
        alert("Konts veiksmigi izveidots");
        window.location = '../login.html';
    }
})