class GuaImage {
    constructor(game, name) {
        this.texture = game.textureByName(name)
        this.x = 0
        this.y = 0
        this.w = this.texture.width
        this.h = this.texture.height
    }
    static new(game, name) {
        var i = new this(game, name)
        return i
    }
    draw() {

    }
    update() {

    }
}

// 逻辑上不应该继承 GuaImage
// class Player extends GuaImage{
//     constructor(game, name) {
//         super(game, name)
//         this.texture = game.textureByName(name)
//         this.x = 0
//         this.y = 0
//         this.w = this.texture.width
//         this.h = this.texture.height
//     }
//     static new(game, name) {
//         var i = new this(game, name)
//         return i
//     }
//     draw() {
//
//     }
//     update() {
//
//     }
// }
