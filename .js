class animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  display() {
    console.log(`Name: ${this.name}, Color: ${this.color}`);
  }

  updateColor(newColor) {
    this.color = newColor;
  }
}
// Example usage:
const animal = new animal('Lion', 'Yellow');
animal.display(); // Output: Name: Lion, Color: Yellow
animal.updateColor('Orange');
