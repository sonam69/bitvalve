var timeout;
var body = $('body');
var content = $('#content');

$('.burger').on('click', function() {
    body.toggleClass('expanded-menu');
    content.toggleClass('overflow-hidden');
})

$('.overlay-main').on('click', function() {
    body.removeClass('expanded-menu');
    content.removeClass('overflow-hidden');
})

$( window ).on( "load", function() {
    $('.seeMore').each(function() {
        new SeeMore(this);
    }) 
});

var payment_methods = {
    placeholder: 'Choose method',
    placeholder_search: 'Search...',
    options: [
        {
            id: 'any',
            text: 'Any Payment method',
            title: 'Any Payment method'
        }, 
        {
            id: 'paypal',
            text: '<i class="pay-icon icon icon-btc"></i>Paypal',
            title: 'paypal'
        }, 
        {
            id: 'Litecoin',
            text: '<i class="pay-icon icon icon-ltc"></i>Litecoin',
            title: 'Litecoin'
        }, 
        {
            id: 'Litecoin',
            text: '<i class="pay-icon icon icon-ltc"></i>Litecoin',
            title: 'Litecoin'
        }, 
        {
            id: 'Litecoin',
            text: '<i class="pay-icon icon icon-ltc"></i>Litecoin',
            title: 'Litecoin'
        }, 
        {
            id: 'Litecoin',
            text: '<i class="pay-icon icon icon-ltc"></i>Litecoin',
            title: 'Litecoin'
        }, 
        {
            id: 'Litecoin',
            text: '<i class="pay-icon icon icon-ltc"></i>Litecoin',
            title: 'Litecoin'
        }
    ]
};

var currency = {
    placeholder: 'Choose currency',
    placeholder_search: 'Search...',
    options: [
        {
            id: 'any',
            text: 'Any Currency',
            title: 'Any Currency'
        },
        {
            id: 'paypal',
            text: '<i class="pay-icon icon icon-btc"></i>Paypal',
            title: 'paypal'
        }, 
        {
            id: 'Litecoin',
            text: '<i class="pay-icon icon icon-ltc"></i>Litecoin',
            title: 'Litecoin'
        }, 
        {
            id: 'Litecoin',
            text: '<i class="pay-icon icon icon-ltc"></i>Litecoin',
            title: 'Litecoin'
        }, 
        {
            id: 'Litecoin',
            text: '<i class="pay-icon icon icon-ltc"></i>Litecoin',
            title: 'Litecoin'
        }, 
        {
            id: 'Litecoin',
            text: '<i class="pay-icon icon icon-ltc"></i>Litecoin',
            title: 'Litecoin'
        }, 
        {
            id: 'Litecoin',
            text: '<i class="pay-icon icon icon-ltc"></i>Litecoin',
            title: 'Litecoin'
        }
    ]
};

$('#payment_method .select2').select2({
    data: payment_methods.options,
    placeholder: payment_methods.placeholder,
    allowClear: true,
    searchInputPlaceholder: payment_methods.placeholder_search,
    escapeMarkup: function(markup) {
      return markup;
    }
});
$('#payment_method .select2').val('any').trigger('change');
$('#currency .select2').select2({
    data: currency.options,
    placeholder: currency.placeholder,
    allowClear: true,
    searchInputPlaceholder: currency.placeholder_search,
    escapeMarkup: function(markup) {
      return markup;
    }
});
$('#currency .select2').val('any').trigger('change');


var listings = {
    columns: [
        { title: "user" },
        { title: "cryptocurrency" },
        { title: "payment method" },
        { title: "rate" },
        { title: "limits" },
        { title: "action" }
    ],
    sorting: [
        'cryptocurrency', 'payment method', 'rate', 'limits'
    ],
    order: [ 1, 'asc' ],
    // priorities: [
    //     {responsivePriority: 1, targets: 0},
    //     {responsivePriority: 1, targets: 1},
    //     {responsivePriority: 1, targets: 2},
    //     {responsivePriority: 1, targets: 3},
    //     {responsivePriority: 1, targets: 5},
    // ],
    visibility: [
        {className: 'all th-mobile-hide th-tablet-hide td-mobile-absolute td-tablet-absolute', targets: 0},
        {className: 'all', targets: 1},
        {className: 'all', targets: 2},
        {className: 'all', targets: 3},
        {className: 'all th-mobile-hide th-tablet-hide th-desktop-hide', targets: 5},
    ],
    items: [
        [ "<div class='user'><div style='background-color: #ffa365'></div>BamzCB</div>", "<div class='iconText'><div style='background: #f7943d;'>B</div><span class='mobile-hide'>Bitcoin</span></div>", "<div class='iconText'><div style='background: #3db3f7;'>P</div><span class='mobile-hide'>Paypal</span></div>", "<div class='price'><span>$</span><div class='price_text'>10558.82 USD<small><strong>4%</strong> below market price</small></div></div>", "<div class='limits'>10.00 - 100.00 USD</div>", "<div><button class='btn'>Buy</button></div>" ],
        [ "<div class='user'><div style='background-color: #ffa365'></div>Arlond</div>", "<div class='iconText'><div style='background: #f7943d;'>B</div><span class='mobile-hide'>Bitcoin</span></div>", "<div class='iconText'><div style='background: #3db3f7;'>C</div><span class='mobile-hide'>Cash</span></div>", "<div class='price'><span>$</span><div class='price_text'>20558.82 USD<small><strong>4%</strong> below market price</small></div></div>", "<div class='limits'>200.00 - 300.00 USD</div>", "<div><button class='btn'>Buy</button></div>" ],
        [ "<div class='user'><div style='background-color: #ffa365'></div>BamzCB</div>", "<div class='iconText'><div style='background: #f7943d;'>B</div><span class='mobile-hide'>Algorand</span></div>", "<div class='iconText'><div style='background: #3db3f7;'>P</div><span class='mobile-hide'>Paypal</span></div>", "<div class='price'><span>$</span><div class='price_text'>30558.82 USD<small><strong>4%</strong> below market price</small></div></div>", "<div class='limits'>10.00 - 100.00 USD</div>", "<div><button class='btn'>Buy</button></div>" ],
        [ "<div class='user'><div style='background-color: #ffa365'></div>BamzCB</div>", "<div class='iconText'><div style='background: #f7943d;'>B</div><span class='mobile-hide'>Bitcoin</span></div>", "<div class='iconText'><div style='background: #3db3f7;'>P</div><span class='mobile-hide'>Paypal</span></div>", "<div class='price'><span>$</span><div class='price_text'>40558.82 USD<small><strong>4%</strong> below market price</small></div></div>", "<div class='limits'>10.00 - 100.00 USD</div>", "<div><button class='btn'>Buy</button></div>" ],
        [ "<div class='user'><div style='background-color: #ffa365'></div>BamzCB</div>", "<div class='iconText'><div style='background: #f7943d;'>B</div><span class='mobile-hide'>Bitcoin</span></div>", "<div class='iconText'><div style='background: #3db3f7;'>P</div><span class='mobile-hide'>Paypal</span></div>", "<div class='price'><span>$</span><div class='price_text'>50558.82 USD<small><strong>4%</strong> below market price</small></div></div>", "<div class='limits'>10.00 - 100.00 USD</div>", "<div><button class='btn'>Buy</button></div>" ],
        [ "<div class='user'><div style='background-color: #ffa365'></div>BamzCB</div>", "<div class='iconText'><div style='background: #f7943d;'>B</div><span class='mobile-hide'>Bitcoin</span></div>", "<div class='iconText'><div style='background: #3db3f7;'>P</div><span class='mobile-hide'>Paypal</span></div>", "<div class='price'><span>$</span><div class='price_text'>60558.82 USD<small><strong>4%</strong> below market price</small></div></div>", "<div class='limits'>10.00 - 100.00 USD</div>", "<div><button class='btn'>Buy</button></div>" ],
        [ "<div class='user'><div style='background-color: #ffa365'></div>BamzCB</div>", "<div class='iconText'><div style='background: #f7943d;'>B</div><span class='mobile-hide'>Bitcoin</span></div>", "<div class='iconText'><div style='background: #3db3f7;'>P</div><span class='mobile-hide'>Paypal</span></div>", "<div class='price'><span>$</span><div class='price_text'>20558.82 USD<small><strong>4%</strong> below market price</small></div></div>", "<div class='limits'>10.00 - 100.00 USD</div>", "<div><button class='btn'>Buy</button></div>" ],
        [ "<div class='user'><div style='background-color: #ffa365'></div>BamzCB</div>", "<div class='iconText'><div style='background: #f7943d;'>B</div><span class='mobile-hide'>Bitcoin</span></div>", "<div class='iconText'><div style='background: #3db3f7;'>P</div><span class='mobile-hide'>Paypal</span></div>", "<div class='price'><span>$</span><div class='price_text'>20558.82 USD<small><strong>4%</strong> below market price</small></div></div>", "<div class='limits'>10.00 - 100.00 USD</div>", "<div><button class='btn'>Buy</button></div>" ],
        [ "<div class='user'><div style='background-color: #ffa365'></div>BamzCB</div>", "<div class='iconText'><div style='background: #f7943d;'>B</div><span class='mobile-hide'>Bitcoin</span></div>", "<div class='iconText'><div style='background: #3db3f7;'>P</div><span class='mobile-hide'>Paypal</span></div>", "<div class='price'><span>$</span><div class='price_text'>20558.82 USD<small><strong>4%</strong> below market price</small></div></div>", "<div class='limits'>10.00 - 100.00 USD</div>", "<div><button class='btn'>Buy</button></div>" ]
    ]
}

var table = $('#table_trades').DataTable({
        // scroller: true,
        // scrollY: "100%",
        destroy: true,
        responsive: true,
        paginate: false,
        searching: false,
        lengthChange: false,
        info: false,
        data: listings.items,
        columns: listings.columns,
        columnDefs: listings.visibility,
        order: listings.order,
        "initComplete": function( settings, json ) {
            console.log("Table initialised");
          }
});

$.each(table.columns().header().toArray(), function(index) {
    if (listings.sorting.includes(this.innerText))
        $('#table_sorting select').append('<option class="sorting_options_item" value="' + index + '">' + this.innerText + '</option>')
});
$('.sorting_options_item').on('click', function() {
    table.order([$(this).attr('data-value'), 'asc']);
    table.draw();
});

$('#table_sorting .select2').select2({
    minimumResultsForSearch: -1,
    dropdownCssClass: "small left_sorting"
});

$('#table_sorting .select2').on('change', function() {
    table.order([this.value, 'asc']);
    table.draw();
})

function formatSelection(val) {return val.id;}
var languages = [
    {
        "id":"EN",
        "text":"English"
    },
    {
        "id":"GR",
        "text":"Greek"
    }
]

$('#lang .select2').select2({
    data: languages,
    minimumResultsForSearch: -1,
    dropdownCssClass: "small",
    templateSelection: formatSelection,
});