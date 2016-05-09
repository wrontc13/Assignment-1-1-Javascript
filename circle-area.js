function circlearea(r) {
    return r * 3.14;
}

var div = document.getElementById('data')
var div1 = document.getElementById('data1')
var div2 = document.getElementById('data2')
div.textContent = circlearea(7)
div1.textContent = circlearea(1.5)
div2.textContent = circlearea(20)

