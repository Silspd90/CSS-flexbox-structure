var oldcp = 'column1';
var oldcc = 'id1';
var temp = 'null';
var temp1 = 'null';

function columnclick(clickedcolumn)
{
    var cp = clickedcolumn;
    document.getElementById(oldcp).classList.remove('focus2');
    document.getElementById(cp).classList.add('focus2');
    temp = cp;
    cp = oldcp;
    oldcp = temp;
}

function clickeditem(clickeditem)
{
    var cc = clickeditem;
    document.getElementById(oldcc).classList.remove('focus1');
    document.getElementById(cc).classList.add('focus1');

    temp1 = cc;
    cc = oldcc;
    oldcc = temp1;
}