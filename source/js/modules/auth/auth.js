const registrationButton = document.querySelector('.registration-button');
const registrationForm = document.querySelector('.registration-form');
const userProfite = document.querySelector('.user');
const imageUploadButton = registrationForm.querySelector('.img-upload__input');
const usersImagePreviews = registrationForm.querySelector('.upload-img');

function uploadImg () {
    const file = imageUploadButton.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', ()=> {
        usersImagePreviews.src = reader.result;
    })
    reader.readAsDataURL(file);
}

function onSubmitForm (evt) {
    evt.preventDefault();
    const userName = registrationForm.querySelector('.name-input').value;
    const userEmail = registrationForm.querySelector('.email-input').value;
    const userAvatarUrl = usersImagePreviews.src;
    const userProfile = {
        name: userName,
        email: userEmail,
        avatarUrl: userAvatarUrl
    }
    localStorage.setItem('userProfile', JSON.stringify(userProfile))
    checkLocalStorage();
}

function checkLocalStorage() {
    if(localStorage.getItem('userProfile') !== null) {
        registrationButton.classList.add('hidden');
        userProfite.classList.remove('hidden');
        const profile = localStorage.getItem('userProfile');
        const userProfile = JSON.parse(profile);
        userProfite.querySelector('.avatar-image').src = userProfile.avatarUrl;
        userProfite.querySelector('.user-name').textContent = userProfile.name;
    }
}

function onWindowLoad() {
    checkLocalStorage();
}

window.addEventListener('DOMContentLoaded', onWindowLoad);
registrationForm.querySelector('.img-upload__input').addEventListener('change', uploadImg);
registrationForm.addEventListener('submit', onSubmitForm);
