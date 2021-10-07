const faker = require('faker');

class PoductsService {
  constructor() {
    this.products = [];

    this.generate(); // Iniciamos nuestros servicios de usuarios
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  // Funciones para los servicios
  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id) {
    // Devolvemos un solo dato, para saber mas ir a manipulación de arrays
    return this.products.find((item) => item.id == id);
  }

  async update(id, changes) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new Error('Produc not found');
    }
    const product = this.products[index];
    this.products[index] = {
      ...product, //persiste los datos que no son modificados
      ...changes,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((item) => item.id == id);
    if (index === -1) {
      throw new Error('Produc not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = PoductsService;
