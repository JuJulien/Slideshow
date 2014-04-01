(function() {
    $(document).ready(
        function () {
            var picture = new Slideshow.Picture($("#content"));
            var button = new Slideshow.Button($("#button"), picture);

            var cpt = picture.nbimg-1;
            while(cpt >= 0) {
                $('<button id=select class=bimg data-num='+cpt+'></button>').insertAfter("#p_n");
                cpt--;
            }
            button.select();
        });
})();