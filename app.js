function makeGrid () {
    for (let gridCells = 0; gridCells < 64; ++gridCells) {
        $('.grid').append($('<div class="cell">'))
    };
}

makeGrid ();


function makePalette () {
    const PALETTE = [
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
    ];
    
    for (let i = 0; i < 7; ++i) {
        const nextColor = PALETTE[i]
        $('.palette').append($('<button>').css('background-color',nextColor))
    }
};

makePalette ();

function onPaletteClick () {
    $('.palette button').removeClass('active');
    $(this).addClass('active');
};

$('.palette button').click(onPaletteClick);

function onGridClick () {
    let newGridColor = $('.active').css('background-color');
    
    if ($(this).css('background-color') == $('.active').css('background-color')) {
        $(this).css('background-color', '');
    }
    else {
    $(this).css('background-color', newGridColor);
    }
};

$('.grid .cell').click(onGridClick);

function onClearClick () {
    $('.grid .cell').css('background-color','');
};

$('.controls .clear').click(onClearClick);

function onFillAllClick () {
    let newGridColor = $('.active').css('background-color');
    $('.grid .cell').css('background-color', newGridColor);
};

$('.controls .fill').click(onFillAllClick);

let newGridColor = $('.active').css('background-color');

let gridArray = $('.grid div');

function onFillEmptyClick () {
    for (let i = 0; i < gridArray.length; ++i) {
        if ($(gridArray[i]).css('background-color') == 'rgba(0, 0, 0, 0)'){
            let newGridColor = $('.active').css('background-color');
            $(gridArray[i]).css('background-color', newGridColor);
        }
    }
};

$('.controls .fill-empty').click(onFillEmptyClick);