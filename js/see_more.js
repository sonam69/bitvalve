var timeout;

function SeeMore(element) {
    var that = this;
    if(!element)
        return;
    this.isOpen = false;
    this.see_more = $(element);
    this.item_wrapper = this.see_more.find('.seeMore_wrapper');
    this.item_wrapper_height;
    this.see_more_indicator = this.see_more.find('.seeMore_indicator');
    this.see_more_indicator.on('click', function() {
        that.showHidden();
    })
    this.children = this.see_more.find('.seeMore_item');
    this.countHidden();
    this.calculateHeight();
    $(window).on('resize rotate', function(e) {
        that.countHidden();
        that.calculateHeight();
        if (that.isOpen)
            that.item_wrapper.css('height', that.item_wrapper_height + 'px');
    });
}

SeeMore.prototype.calculateHeight = function() {
    this.see_more.css('overflow', 'hidden');
    this.item_wrapper.css('height', 'auto');
    this.item_wrapper_height = this.item_wrapper.outerHeight();
    this.item_wrapper.css('height', '');
    this.see_more.css('overflow', '');
}

SeeMore.prototype.countHidden = function() {
    var visible_elements = 0;
    var topLevel = this.children[0].getBoundingClientRect().top;
    this.children.each(function() {
        if (this.getBoundingClientRect().top != topLevel)
            return false;
        else
            visible_elements++;
    });
    this.see_more_indicator.attr('data-hiddenItems', this.children.length - visible_elements);
}

SeeMore.prototype.showHidden = function() {
    if (this.isOpen) {
        this.item_wrapper.css('height', '');
        this.item_wrapper.removeClass('is-open');
        this.isOpen = false;
    }
    else {
        this.item_wrapper.css('height', this.item_wrapper_height + 'px');
        this.item_wrapper.addClass('is-open');
        this.isOpen = true;
    }
}