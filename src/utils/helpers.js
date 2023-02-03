export function validateEmail(email) {
    let regex = '/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/';
    return regex.test(String(email));
}