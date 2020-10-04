export function createRow(content, styles = '') {
  return `<div class="row" style="${styles}">${content}</div>`;
}

export function createColumn(content) {
  return `<div class="col-sm">${content}</div>`;
}

export function cssFromJsObject(styles = {}) {
  if (typeof styles === 'string') {
    return styles;
  }
  const toCssString = key => `${key}: ${styles[key]}`;
  return Object.keys(styles).map(toCssString).join(';');
}

export function block(type) {
  return `
    <form name="${type}">
      <h5>${type}</h5>
      <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
      </div>
      <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
      </div>
      <button type="submit" class="btn btn-primary btn-sm">Add</button>
    </form>
    <hr />
  `;
}
