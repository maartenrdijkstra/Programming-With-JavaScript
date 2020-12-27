/*eslint-env browser*/

let evt = {
    attach: function (node, eventName, func) {
        if (node.addEventListener) {
            node.addEventListener(eventName, func);
        } else if (node.attachEvent) {
            node.attachEvent("on " + eventName, func)
        }
    }
}
