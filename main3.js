const form = document.getElementsByTagName('form')

let login = form[0].childNodes[1]
let pass = form[0].childNodes[3]
let isLogin
let isPass

login.addEventListener('keyup', () => {
    if (login.value.length >= 6) {
        isLogin = true
    } else if (login.value.length < 6) {
        isLogin = false
        send.disabled = true
    }
    if (isLogin && isPass) {
        send.disabled = false
    }
});

let send = form[0].childNodes[5]

pass.addEventListener('keyup', () => {
    isPass = pass.value.length >= 6 ? true : false
    console.log(isPass)
    if (!isPass) {
        send.disabled = true
    }
    if (isLogin && isPass) {
        send.disabled = false
    }
})

send.addEventListener('click', (e) => {
    e.preventDefault(send)
    alert(`${login.value + pass.value}`)
})

