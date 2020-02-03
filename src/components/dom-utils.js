export function getInput(parentElement, name, defaultValue = '') {
    return parentElement.getAttribute(name) || defaultValue;
}


export function getChild(parentElement, tagName, optional = false, multiple = false) {
    let childElements;
    if (multiple) {
        childElements = parentElement.querySelectorAll(tagName);
    } else {
        childElements = parentElement.querySelector(tagName);
    }

    console.log('childElements', childElements);

    if (!childElements) {
        if (!optional) {
            console.error('Child tag or tags not found: ' + tagName, parentElement);
        }
        return null;
    }
    return childElements;
}


export function getChildText(parentElement, tagName, optional = false) {
    const childElement = getChild(parentElement, tagName, optional);

    if (!parentElement) {
        return '';
    }
    return parentElement.textContent;
}