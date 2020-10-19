function slide() {
    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";
    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    var i = 0;
    links[0].onclick = function(e) {
        if (i == 0) {
            moveElement("preview", i - 2040, 0, 10);
            i -= 2040;
            e.preventDefault();
        } else {
            moveElement("preview", i + 680, 0, 10);
            i += 680;
            e.preventDefault();
        }
    }
    links[1].onclick = function(e) {
        if (i / 2040 == 1 || i / 2040 == -1) {
            moveElement("preview", i + 2040, 0, 10);
            i += 2040;
            e.preventDefault();
        } else {
            moveElement("preview", i - 680, 0, 10);
            i -= 680;
            e.preventDefault();
        }
    }
}

addLoadEvent(slide);