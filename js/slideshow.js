if (!window.Slideshow ) {
    window.Slideshow  = {}
}

window.Slideshow.Picture = function (element) {
    this.$element = element;
    this.slides = this.$element.children()
    this.current = 0;
    this.nbimg = this.slides.length;
    var _this = this;
    $(this.slides[this.current]).siblings().hide()

    this.$element.on( "goTo", function(e, data) {
        _this.goTo(data);
    });
    this.$element.on("next", function() {
        _this.next();
    });
    this.$element.on("previous", function() {
        _this.previous();
    });
    return this
}

window.Slideshow.Picture.prototype.goTo = function (index) {
    this.slides.stop()
    this.slides.eq(this.current)
        .fadeOut("slow")
        .siblings()
        .hide();
    this.current = index;
    this.slides.eq(this.current).fadeIn("slow");
    return this
}

window.Slideshow.Picture.prototype.next = function () {
    if(this.current < this.nbimg-1) {
        this.slides.eq(this.current).fadeOut("slow");
        this.current ++;
        this.slides.eq(this.current).fadeIn("slow");
    }
}

window.Slideshow.Picture.prototype.previous = function () {
    if(this.current > 0) {
        this.slides.eq(this.current).fadeOut("slow");
        this.current --;
        this.slides.eq(this.current).fadeIn("slow");
    }
}

window.Slideshow.Button = function (element, picture) {
    this.$element = element;
    this.picture = picture;
}

window.Slideshow.Button.prototype.select = function() {
    var picture = this.picture;
    $(".bimg").click(function() {
        picture.$element.trigger("goTo", [ $(this).attr('data-num') ]);
    });
    $(".next").click(function() {
        picture.$element.trigger("next");
    });

    $(".previous").click(function() {
        picture.$element.trigger("previous");
    });
}