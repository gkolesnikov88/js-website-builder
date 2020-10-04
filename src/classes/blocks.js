import {createColumn, createRow, cssFromJsObject} from "../utils";

class Block {
  constructor(value, options) {
    this.value = value;
    this.options = options;
  }

  toHtml() {
    throw new Error('Method toHtml must be implemented');
  }
}

export class TitleBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {tag = 'h1', styles} = this.options;
    return createRow(createColumn(`<${tag}>${this.value}</${tag}>`), cssFromJsObject(styles));
  }
}

export class ImageBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {styles, imageStyles: imgSt, alt} = this.options;
    return createRow(`<img src="${this.value}" alt="${alt}" style="${cssFromJsObject(imgSt)}"/>`, cssFromJsObject(styles));
  }
}

export class ColumnsBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {styles} = this.options;
    const innerHtml = this.value
      .map(column => { return createColumn(`<p>${column}</p>`)})
      .join('');
    return createRow(innerHtml, cssFromJsObject(styles));
  }
}

export class TextBlock extends Block {
  constructor(value, options) {
    super(value, options);
  }

  toHtml() {
    const {styles} = this.options;
    return createRow(createColumn(`<p>${this.value}</p>`), cssFromJsObject(styles));
  }
}
