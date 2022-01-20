const token = localStorage.getItem('token');
const divData = document.querySelector("#data-div")
const logOut = document.querySelector("#log-out")

if(!token){
    window.location = '../index.html';
}

const getUserData = async function(){
    const getRequest = await fetch('https://loginbackend-rg.herokuapp.com/account',{
        method: 'GET',
        headers: new Headers({
            'Authorization': `Bearer ${token}`
        })
    })
    const getData = await getRequest.json()
    console.log(getData)
    divData.insertAdjacentHTML("beforeend", `
    <table>
        <tr>
            <th></th>
            <th>Email</th>
            <th>Username</th>
            <th>Number</th>
        </tr>
        <tr>
            <td>Jusu dati</td>
            <td>${getData.email}</td>
            <td>${getData.username}</td>
            <td>${getData.number}</td>
        </tr>
    </table>
    `)
}
getUserData()

logOut.addEventListener("click", function(){
    localStorage.removeItem('token');
})