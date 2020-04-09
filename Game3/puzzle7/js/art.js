function Art(canvas, cellWidth, cellPadding) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.cellWidth = cellWidth;
    this.cellPadding = cellPadding;
}

Art.prototype.clear = function() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

Art.prototype.drawCell = function(i, j, state) {
    this.drawSquare(
        (this.cellWidth + this.cellPadding) * i + this.cellPadding,
        (this.cellWidth + this.cellPadding) * j + this.cellPadding,
        this.cellWidth,
        this.cellWidth,
        (state) ? '#00ff00' : 'black');
}

Art.prototype.drawSquare = function(x, y, w, h, color) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
}