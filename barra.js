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
            this.bar.value = now
        } else if (name == 'max') {
            this.max = now;
        } else if (name == 'min') {
            this.min = now;
        }
    }

    set value(x) {
        this.bar.setAttribute('value', x)
        let percent = document.querySelector('span')
        percent.textContent = " " + x + "%"
    }

    changeValue(newValue) {
        this.bar.value = newValue
        
    }

}

customElements.define('progress-bar', ProgressBar);

let barra = document.querySelector('progress-bar');