// Наследование ES6

// Класс UserES6
class UserES6 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// Класс CustomerES6
class CustomerES6 extends UserES6 {
  constructor(firstName, lastName, membership) {
    super(firstName, lastName);
    this.membership = membership;
  }

  // Если в родительском классе есть метод с таким же именем как и дочернем, то он будет заменён. Если мы всё же хотим использовать метод родительского класса с таким же названием то super.getFullName();
  getFullName() {
    const parentRes = super.getFullName();
    return `${parentRes}, membership: ${this.membership}`;
  }
}

const customerEs = new CustomerES6("Victor", "Polozov", "basic");
