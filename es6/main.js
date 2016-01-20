import {Point} from 'Color';
import {Integer} from 'Number';


var body = document.querySelector('body');

body.innerHTML = 'Good point:  ' + new Point(new Integer(1), new Integer(23)) +
        `<br/>
        You can use the expression in console as well.

        "new zul.number.Integer(3).equals(new zul.number.Integer(3))"
        `
