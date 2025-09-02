function isValidPassword(password) {
    const uppercaseCount = (password.match(/[A-Z]/g) || []).length;
    if (uppercaseCount < 3) return false;
    if (!/\d/.test(password)) return false;
    if (!/[_!?*]/.test(password)) return false;
    return true;
}
