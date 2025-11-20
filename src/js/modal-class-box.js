import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export class ModalBox {
  #closeKey = 'Escape';

  options = {
    onShow: instance => {
      instance.element().querySelector(this.closeSelector).onclick =
        instance.close;
      document.addEventListener('keydown', this.handleCloseModalKeyDownBound);
      document.body.style.overflow = 'hidden';
    },
    onClose: () => {
      document.removeEventListener(
        'keydown',
        this.handleCloseModalKeyDownBound
      );
      document.body.style.overflow = 'auto';
    },
  };

  constructor(markup, closeSelector, responceData) {
    this.markup = markup;
    this.closeSelector = closeSelector;
    this.responceData = responceData;
    this.handleCloseModalKeyDownBound = this.handleCloseModalKeyDown.bind(this);
    this.build();
  }

  build() {
    this.instance = basicLightbox.create(
      this.markup(this.responceData),
      this.options
    );
  }

  open() {
    this.instance.show();
  }

  handleCloseModalKeyDown(event) {
    if (event.code === this.#closeKey) {
      this.instance.close();
    }
  }

  get closeKey() {
    return this.#closeKey;
  }

  set closeKey(newCloseKey) {
    this.#closeKey = newCloseKey;
  }
}
