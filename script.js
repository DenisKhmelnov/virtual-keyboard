const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capsLock: false,
  },

  init() {
    //Create main object
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    //Setup main element
    this.elements.main.classList.add("keyboard");
    this.elements.keysContainer.classList.add("keyboard_keys");

    //Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  },

  _createKeys() {},

  _triggerEvent(handlerName) {},

  _toggleCapsLock() {},

  open() {},

  close() {},
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
