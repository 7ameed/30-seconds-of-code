module.exports = off = (el, evt, fn, opts = false) => el.removeEventListener(evt, fn, opts);