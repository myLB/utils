class Dom {
    constructor () {

    }
    hasClass (el, cls) {
        if (!el || !cls) return false;
        if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
        if (el.classList) {
            return el.classList.contains(cls);
        } else {
            return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
        }
    }
    cs () {
        console.log('hello, world!');
    }
}

export default new Dom()
