if !window.in8 {
    window.in8 = {}
}
window.in8.slideshow = function (element) {
    var this.element = element;
    var this.current = 1;
}

window.in8.slideshow.prototype.goTo = function (index) {
    this.element.on( "goTo", function() {
        this.element.children().eq(this.current).fadeOut("slow");
        this.current = index;
        this.element.children().eq(this.current).fadeIn("slow")
    })
}

window.in8.slideshow.prototype.next = function () {
    this.element.on( "next", function() {
        this.element.children().eq(this.current).fadeOut("slow");
        this.current += 1;
        this.element.children().eq(this.current).fadeIn("slow")
    })
}

window.in8.slideshow.prototype.previous = function () {
    this.element.on( "previous", function() {
        this.element.children().eq(this.current).fadeOut("slow");
        this.current -= 1;
        this.element.children().eq(this.current).fadeIn("slow")
    })
}


window.in8.button = function (element) {
    this.element = element;
    this.next = this.element.last();
    this.previous = this.element.first();
}

window.in8.button.prototype.click = function() {
    this.next.focus(function() {
        this.next.trigger("next");
    });

    this.previous.focus(function() {
        this.previous.trigger("previous");
    });

    this.
}

