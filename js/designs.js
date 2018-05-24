const color = $('#colorPicker');
const height = $('#inputHeight');
const width = $('#inputWidth');
const submit = $("#submit");
const table = $('#pixelCanvas');

function makeGrid() {
  for(let h = 0; h < height.val(); h++) {
    table.append('<tr></tr>');
    for(let w = 0; w < width.val(); w++) {
      $('tr:last').append('<td></td>');
    };
  };
};

$(function() {
  submit.on('click', function(event) {
  table.children().remove();
  event.preventDefault();
  makeGrid();
  });

  table.on('click','td',function() {
    $(this).css('background-color', color.val());
  });
});
