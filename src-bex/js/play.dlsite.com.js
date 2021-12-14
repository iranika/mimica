
console.log("Hi! running mimi-xp!") //runnnign checker.

class DLsitePlayPicker {
    GetProductInfo(){
        return document.querySelectorAll("#app > div > div > div > div > div.swipe-item.scroll > div.content > div > ol > li > div.work-name")
    }
}

let dlsp = new DLsitePlayPicker()
window.onload = function(){
    window.setTimeout(function(){
        console.log("GetProductInfo",dlsp.GetProductInfo())
    },1000 * 3)
}
