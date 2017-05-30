
$(function () {
    $(window).load(function () {
        var $gal = $("#contain"),
            galW = $gal.outerWidth(true),
            galSW = $gal[0].scrollWidth,
            wDiff = (galSW / galW) - 1,
            mPadd = 10,
            damp = 20,
            mX = 0,
            mX2 = 0,
            posX = 0,
            mmAA = galW - (mPadd),
            mmAAr = (galW / mmAA);

        $gal.mousemove(function (e) {
            mX = e.pageX - $(this).parent().offset().left - this.offsetLeft;
            mX2 = Math.min(Math.max(0, mX - mPadd), mmAA) * mmAAr;
        });

        setInterval(function () {
            posX += (mX2 - posX) / damp;
            $gal.scrollLeft(posX * wDiff);
        }, 10);

    });
});
