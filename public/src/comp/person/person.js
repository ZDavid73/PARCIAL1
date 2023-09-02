class person extends HTMLElement {
  personharry = `${this.name}`


    static get observedAttributes() {
        return ["name", "species", "size", "gender", "house", "dateofbirth", "yearofbirth", " image"];
      }

      attributeChangedCallback(propName, _, newValue) {
        switch (propName) {
          case "name":
            this.name = newValue;
            break;
            case "species":
            this.species = newValue;
            break;
            case "size":
            this.size = newValue;
            break;
            case "gender":
            this.gender = newValue;
            break;
            case "house":
            this.house = newValue;
            break;
            case "dateofbirth":
            this.dateOfBirth = newValue;
            break;
            case "yearofbirth":
            this.yearOfBirth = newValue;
            break;
            case "image":
            this.image = newValue;
            break;
    
          default:
            break;
        }
      }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.mount();
    }

    mount() {
      this.render();
      const button = this.shadowRoot.querySelector("button");
      button.addEventListener("click", () => {
        if (this.personharry === JSON.stringify`${this.alternate_names}`) {
          this.personharry = `${this.name}`;
        } else {
          this.personharry = JSON.stringify`${this.alternate_names}`; 
        }
  
        this.mount();
      });
    } 

    
      render() {
        this.shadowRoot.innerHTML = `
        <section>
        <link rel="stylesheet" href="./public/src/comp/person/person.css">

            <h1>${this.personharry}</h1>
            <h2>name: ${this.name}</h2>
            <h3>species: ${this.species}</h3>
            <h3>gender: ${this.gender}</h3>
            <h3>house: ${this.house}</h3>
            <h3>date of birth: ${this.dateOfBirth}</h3>
            <h3>year of birth: ${this.yearOfBirth}</h3>
            <img>image: ${this.image}</img>
            <button>harry fan?</button>
         </section>`;
      }
    }

customElements.define("app-person", person);
export default person