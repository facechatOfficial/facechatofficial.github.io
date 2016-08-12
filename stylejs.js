/*
Tootlib Code By : www.ghalebgraph.ir
Designer: www.ghalebgraph.ir
Coding: www.ghalebgraph.ir
*/
var tootlipTag = "a,label,input,img,textarea";
var tootlipX = 0;
var tootlipY = 10;

tooltip = {
    name: "tootlip",
    offsetX: tootlipX,
    offsetY: tootlipY,
    tip: null
}

tooltip.init = function () {
    var tipNameSpaceURI = "http://www.w3.org/1999/xhtml";
    if (!tipContainerID) { var tipContainerID = "tootlip"; }
    var tipContainer = document.getElementById(tipContainerID);

    if (!tipContainer) {
        tipContainer = document.createElementNS ? document.createElementNS(tipNameSpaceURI, "div") : document.createElement("div");
        tipContainer.setAttribute("id", tipContainerID);
        document.getElementsByTagName("body").item(0).appendChild(tipContainer);
    }

    if (!document.getElementById) return;
    this.tip = document.getElementById(this.name);
    if (this.tip) document.onmousemove = function (evt) { tooltip.move(evt) };

    var a, sTitle, elements;

    var elementList = tootlipTag.split(",");
    for (var j = 0; j < elementList.length; j++) {
        elements = document.getElementsByTagName(elementList[j]);
        if (elements) {
            for (var i = 0; i < elements.length; i++) {
                a = elements[i];
                sTitle = a.getAttribute("title");
                if (sTitle) {
                    a.setAttribute("tiptitle", sTitle);
                    a.removeAttribute("title");
                    a.removeAttribute("alt");
                    a.onmouseover = function () { tooltip.show(this.getAttribute('tiptitle')) };
                    a.onmouseout = function () { tooltip.hide() };
                }
            }
        }
    }
}

tooltip.move = function (evt) {
    var x = 0, y = 0;
    if (document.all) {//IE
        x = (document.documentElement && document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : document.body.scrollLeft;
        y = (document.documentElement && document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
        x += window.event.clientX;
        y += window.event.clientY;

    } else {//Good Browsers
        x = evt.pageX;
        y = evt.pageY;
    }
    this.tip.style.left = (x + this.offsetX) + "px";
    this.tip.style.top = (y + this.offsetY) + "px";
}

tooltip.show = function (text) {
    if (!this.tip) return;
    this.tip.innerHTML = text;
    this.tip.style.display = "block";
}

tooltip.hide = function () {
    if (!this.tip) return;
    this.tip.innerHTML = "";
    this.tip.style.display = "none";
}

window.onmousemove = function () {
    tooltip.init();
}
/*Tootlib*/
