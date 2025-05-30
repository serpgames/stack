export default class GameWrapper {
  constructor(container) {
    this.container = container;
    this.iframe = null;
  }
  
  start() {
    this.iframe = document.createElement('iframe');
    this.iframe.src = './game/index.html';
    this.iframe.style.width = '100%';
    this.iframe.style.height = '100%';
    this.iframe.style.border = 'none';
    this.iframe.setAttribute('allowfullscreen', 'true');
    
    this.container.innerHTML = '';
    this.container.appendChild(this.iframe);
  }
  
  stop() {
    if (this.iframe) {
      this.iframe.remove();
      this.iframe = null;
    }
    this.container.innerHTML = '';
  }
}
