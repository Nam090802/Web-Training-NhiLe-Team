const avatarImage = document.querySelector(".main .avatar img")
const submitBtn = document.querySelector(".contact .btn input")
const formContact = document.querySelector("#contact")
const email = formContact.elements["email"]
const phoneNumber = formContact.elements["phone-number"]

avatarImage.addEventListener("click",() => {
    alert("Bạn đã nhấp vào ảnh đại diện")
} )

submitBtn.addEventListener("click", () => {
    let emailValue = email.value
    let phoneNumberValue = phoneNumber.value
    
    alert(
        `
            Email: ${emailValue}
            Phone Number: ${phoneNumberValue}
        `
    )
})
