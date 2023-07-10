const pwdInput = document.querySelector("#password");
const pwdConfirm = document.querySelector("#conf-password");

const pwdRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

const invalidPwdText = document.createElement('p');
invalidPwdText.textContent = "At least 8 characters, 1 UpperCase and 1 Number."
invalidPwdText.style.cssText = `color: red; font-size: 0.9rem; position: absolute; bottom: -1.5rem`;

const invalidConfirm = document.createElement('p');
invalidConfirm.textContent = "Password doesn't match.";
invalidConfirm.style.cssText = `color: red; font-size: 0.9rem; position: absolute; bottom: -1.5rem`;

pwdInput.addEventListener('change', isValid);

pwdConfirm.addEventListener('change', isValidConfirm)

function isValid() {
    if(!pwdRegex.test(this.value)) {
        this.classList.add('invalid');
        this.after(invalidPwdText);
    }
    else {
        this.classList.remove('invalid');
        this.classList.add('valid');
        invalidPwdText.remove();
    }
}

function isValidConfirm() {
    if(!(pwdInput.value == pwdConfirm.value)) {
        this.classList.add('invalid');
        this.after(invalidConfirm);
        this.setCustomValidity("Doesn't match password.")
    }
    else {
        this.classList.remove('invalid');
        this.classList.add('valid');
        invalidConfirm.remove();
        this.setCustomValidity("");
    }
}