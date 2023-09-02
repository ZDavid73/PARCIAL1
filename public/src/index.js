import data from "./data.js";
import * as comp from "./comp/index.js"
class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }


    render() {
        const harrydata = data.map(
            (harrydata) =>
              `<app-person name="${harrydata.name}" species="${harrydata.species}" gender="${harrydata.gender}" house="${harrydata.house}" dateOfBirth="${harrydata.dateOfBirth}" yearOfBirth="${harrydata.yearOfBirth}" img="${harrydata.image}"></app-person>`
          );
          const harryjoin = harrydata.join("");
          this.shadowRoot.innerHTML = `${harryjoin}`;
        }
        
        }


customElements.define("app-container", AppContainer);