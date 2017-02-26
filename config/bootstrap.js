import template from './../src/template.html';
import './../src/style.css';

class Bootstrap {
  constructor() {
    const templateWrapper = document.createElement('div');
    templateWrapper.innerHTML = template;

    const cardAnchor = document.getElementById('card-anchor');
    cardAnchor.append(templateWrapper);
  }
};

export default new Bootstrap();
