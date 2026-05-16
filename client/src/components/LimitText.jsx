export default function limitHtmlText(html, maxLength = 120) {

    const div = document.createElement('div');
    div.innerHTML = html;

    const text = div.textContent || div.innerText || '';

    return text.length > maxLength
        ? text.slice(0, maxLength) + '...'
        : text;
};