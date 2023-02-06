class ProgressBar extends HTMLElement
{
    constructor() {
        super();
        let max = this.getAttribute('max');
        let value = this.getAttribute('value');
        let  min = this.getAttribute('min');
        let bar = document.createElement('progress');
        let percent = document.createElement('span');
        bar.setAttribute('max', max);
        bar.setAttribute('value', value)
        percent.textContent = " " + value + '%'
        this.appendChild(bar)
        this.appendChild(percent)
        this.bar = bar
    }

    static get observedAttributes() {
        return ['value', 'max', 'min'];
    }

    attributeChangedCallback(name, old, now) {
        if (name == 'value') {
            console.log('cock')
        } else if (name == 'max') {
            this.max = now;
        } else if (name == 'min') {
            this.min = now;
        }
    }

    changeValue(newValue) {
        this.bar.value = newValue
        let percent = document.querySelector('span')
        percent.textContent = " " + newValue + "%"
    }

}

customElements.define('progress-bar', ProgressBar);

let barra = document.querySelector('progress-bar');