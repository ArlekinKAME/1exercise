const cart = {
  items: [],

  add(name, price, qty = 1) {
    if (price <= 0) throw new Error('Цена должна быть положительной');
    const item = this.items.find(i => i.name === name && i.price === price);
    if (item) item.qty += qty;
    else this.items.push({ name, price, qty });
  },

  count() {
    return this.items.reduce((sum, item) => sum + item.qty, 0);
  },

  total() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  },

  clear() {
    this.items = [];
  }
};