function Rectangle(width, height) {
    var _width = width;
    var _height = height;
  
    this.getArea = function() {
      return _width * _height;
    };
  }
  
  var rect = new Rectangle(5, 10);
  console.log(rect._width);  // Output: undefined (private field)
  console.log(rect.getArea());  //