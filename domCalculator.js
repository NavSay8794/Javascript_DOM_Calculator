var divC = document.createElement('div')
divC.setAttribute('class' , 'container')
document.body.appendChild(divC)

var formDiv = document.createElement('div')
formDiv.setAttribute('class', 'forms')
document.querySelector('.container').appendChild(formDiv)

var numbersDiv = document.createElement('div')
numbersDiv.setAttribute('class', 'numbersDiv')
document.querySelector('.container').appendChild(numbersDiv)

// form field

var forms = document.createElement('form')
forms.setAttribute('id', 'formClass')
forms.setAttribute('name','form')
document.querySelector('.forms').appendChild(forms)
var inputField = document.createElement('input')
inputField.setAttribute('class', 'text')
inputField.setAttribute('type' , 'text')
inputField.setAttribute('name' , 'text')
document.querySelector('#formClass').appendChild(inputField)


//table field

var tableSec= document.createElement('table')
tableSec.setAttribute('id', 'tableId')
document.querySelector('.numbersDiv').appendChild(tableSec)

//c Ac row
var tr1 = document.createElement('tr')
tr1.setAttribute('class', 'tableRow')
tr1.setAttribute('id', 'tr1')
document.getElementById('tableId').appendChild(tr1)

//c < / * buttons

var tr1td1 = document.createElement('td')
tr1td1.setAttribute('class', 'tableCell')
tr1td1.setAttribute('id' , 'tableC11')
document.querySelector('#tr1').appendChild(tr1td1)
var cButton = document.createElement('button')
cButton.setAttribute('class' , 'buttonProps')
cButton.setAttribute('id' , 'cButton')
cButton.setAttribute('onclick', 'allInOne(this.id)')
// cButton.setAttribute('type' , 'button')
// cbutton.setAttribute('value' , 'C')
document.getElementById('tableC11').appendChild(cButton)
var cbutton = document.querySelector('#cButton')
cbutton.innerText = 'C'

var tr1td2 = document.createElement('td')
tr1td2.setAttribute('class', 'tableCell')
tr1td2.setAttribute('id' , 'tableC12')
document.querySelector('#tr1').appendChild(tr1td2)
var clearButton = document.createElement('button')
clearButton.setAttribute('class' , 'buttonProps')
clearButton.setAttribute('id' , 'clearButton')
clearButton.setAttribute('onclick', 'allInOne(this.id)')
document.getElementById('tableC12').appendChild(clearButton)
var clearbutton = document.querySelector('#clearButton')
clearbutton.innerText = '<'

var tr1td3 = document.createElement('td')
tr1td3.setAttribute('class', 'tableCell')
tr1td3.setAttribute('id' , 'tableC13')
document.querySelector('#tr1').appendChild(tr1td3)
var divide = document.createElement('button')
divide.setAttribute('class' , 'buttonProps')
divide.setAttribute('id' , 'divide')
divide.setAttribute('onclick', 'allInOne(this.id,"/")')
document.getElementById('tableC13').appendChild(divide)
var dbutton = document.querySelector('#divide')
dbutton.innerText = '/'


var tr1td4 = document.createElement('td')
tr1td4.setAttribute('class', 'tableCell')
tr1td4.setAttribute('id' , 'tableC14')
document.querySelector('#tr1').appendChild(tr1td4)
var multiply = document.createElement('button')
multiply.setAttribute('class' , 'buttonProps')
multiply.setAttribute('id' , 'multiply')
multiply.setAttribute('onclick', 'allInOne(this.id,"*")')
document.getElementById('tableC14').appendChild(multiply)
var mbutton = document.querySelector('#multiply')
mbutton.innerText = 'X'



//789 row
var tr2 = document.createElement('tr')
tr2.setAttribute('class', 'tableRow')
tr2.setAttribute('id', 'tr2')
document.getElementById('tableId').appendChild(tr2)

//7 8 9 - buttons

var tr2td1 = document.createElement('td')
tr2td1.setAttribute('class', 'tableCell')
tr2td1.setAttribute('id' , 'tableC21')
document.querySelector('#tr2').appendChild(tr2td1)
var seven = document.createElement('button')
seven.setAttribute('class' , 'buttonProps')
seven.setAttribute('id' , 'seven')
seven.setAttribute('onclick', 'allInOne(this.id,7)')
document.getElementById('tableC21').appendChild(seven)
var sevenButton = document.querySelector('#seven')
sevenButton.innerText = '7'

var tr2td2 = document.createElement('td')
tr2td2.setAttribute('class', 'tableCell')
tr2td2.setAttribute('id' , 'tableC22')
document.querySelector('#tr2').appendChild(tr2td2)
var eight = document.createElement('button')
eight.setAttribute('class' , 'buttonProps')
eight.setAttribute('id' , 'eight')
eight.setAttribute('onclick', 'allInOne(this.id,8)')
document.getElementById('tableC22').appendChild(eight)
var eightButon = document.querySelector('#eight')
eightButon.innerText = '8'

var tr2td3 = document.createElement('td')
tr2td3.setAttribute('class', 'tableCell')
tr2td3.setAttribute('id' , 'tableC23')
document.querySelector('#tr2').appendChild(tr2td3)
var nine = document.createElement('button')
nine.setAttribute('class' , 'buttonProps')
nine.setAttribute('id' , 'nine')
nine.setAttribute('onclick', 'allInOne(this.id,9)')
document.getElementById('tableC23').appendChild(nine)
var nineButton = document.querySelector('#nine')
nineButton.innerText = '9'


var tr2td4 = document.createElement('td')
tr2td4.setAttribute('class', 'tableCell')
tr2td4.setAttribute('id' , 'tableC24')
document.querySelector('#tr2').appendChild(tr2td4)
var minus = document.createElement('button')
minus.setAttribute('class' , 'buttonProps')
minus.setAttribute('id' , 'minus')
minus.setAttribute('onclick', 'allInOne(this.id,"-")')
document.getElementById('tableC24').appendChild(minus)
var minusButton = document.querySelector('#minus')
minusButton.innerText = '-'






//456 row
var tr3 = document.createElement('tr')
tr3.setAttribute('class', 'tableRow')
tr3.setAttribute('id', 'tr3')
document.getElementById('tableId').appendChild(tr3)

//4 5 6 + buttons

var tr3td1 = document.createElement('td')
tr3td1.setAttribute('class', 'tableCell')
tr3td1.setAttribute('id' , 'tableC31')
document.querySelector('#tr3').appendChild(tr3td1)
var four = document.createElement('button')
four.setAttribute('class' , 'buttonProps')
four.setAttribute('id' , 'four')
four.setAttribute('onclick', 'allInOne(this.id,4)')
document.getElementById('tableC31').appendChild(four)
var fourButton = document.querySelector('#four')
fourButton.innerText = '4'

var tr3td2 = document.createElement('td')
tr3td2.setAttribute('class', 'tableCell')
tr3td2.setAttribute('id' , 'tableC32')
document.querySelector('#tr3').appendChild(tr3td2)
var five = document.createElement('button')
five.setAttribute('class' , 'buttonProps')
five.setAttribute('id' , 'five')
five.setAttribute('onclick', 'allInOne(this.id,5)')
document.getElementById('tableC32').appendChild(five)
var fiveButton = document.querySelector('#five')
fiveButton.innerText = '5'

var tr3td3 = document.createElement('td')
tr3td3.setAttribute('class', 'tableCell')
tr3td3.setAttribute('id' , 'tableC33')
document.querySelector('#tr3').appendChild(tr3td3)
var six = document.createElement('button')
six.setAttribute('class' , 'buttonProps')
six.setAttribute('id' , 'six')
six.setAttribute('onclick', 'allInOne(this.id,6)')
document.getElementById('tableC33').appendChild(six)
var sixButton = document.querySelector('#six')
sixButton.innerText = '6'


var tr3td4 = document.createElement('td')
tr3td4.setAttribute('class', 'tableCell')
tr3td4.setAttribute('id' , 'tableC34')
document.querySelector('#tr3').appendChild(tr3td4)
var plus = document.createElement('button')
plus.setAttribute('class' , 'buttonProps')
plus.setAttribute('id' , 'plus')
plus.setAttribute('onclick', 'allInOne(this.id,"+")')
document.getElementById('tableC34').appendChild(plus)
var plusButton = document.querySelector('#plus')
plusButton.innerText = '+'



//123 row
var tr4 = document.createElement('tr')
tr4.setAttribute('class', 'tableRow')
tr4.setAttribute('id' ,'tr4')
document.getElementById('tableId').appendChild(tr4)

//1 2 3 % buttons

var tr4td1 = document.createElement('td')
tr4td1.setAttribute('class', 'tableCell')
tr4td1.setAttribute('id' , 'tableC41')
document.querySelector('#tr4').appendChild(tr4td1)
var one = document.createElement('button')
one.setAttribute('class' , 'buttonProps')
one.setAttribute('id' , 'one')
one.setAttribute('onclick', 'allInOne(this.id,1)')
document.getElementById('tableC41').appendChild(one)
var oneButton = document.querySelector('#one')
oneButton.innerText = '1'

var tr4td2 = document.createElement('td')
tr4td2.setAttribute('class', 'tableCell')
tr4td2.setAttribute('id' , 'tableC42')
document.querySelector('#tr4').appendChild(tr4td2)
var two = document.createElement('button')
two.setAttribute('class' , 'buttonProps')
two.setAttribute('id' , 'two')
two.setAttribute('onclick', 'allInOne(this.id,2)')
document.getElementById('tableC42').appendChild(two)
var twoButton = document.querySelector('#two')
twoButton.innerText = '2'

var tr4td3 = document.createElement('td')
tr4td3.setAttribute('class', 'tableCell')
tr4td3.setAttribute('id' , 'tableC43')
document.querySelector('#tr4').appendChild(tr4td3)
var three = document.createElement('button')
three.setAttribute('class' , 'buttonProps')
three.setAttribute('id' , 'three')
three.setAttribute('onclick', 'allInOne(this.id,3)')
document.getElementById('tableC43').appendChild(three)
var threeButton = document.querySelector('#three')
threeButton.innerText = '3'

var tr4td4 = document.createElement('td')
tr4td4.setAttribute('class', 'tableCell')
tr4td4.setAttribute('id' , 'tableC44')
document.querySelector('#tr4').appendChild(tr4td4)
var dot = document.createElement('button')
dot.setAttribute('class' , 'buttonProps')
dot.setAttribute('id' , 'dot')
dot.setAttribute('onclick', 'allInOne(this.id,".")')
document.getElementById('tableC44').appendChild(dot)
var dotButton = document.querySelector('#dot')
dotButton.innerText = '.'

//0.= row
var tr5 = document.createElement('tr')
tr5.setAttribute('class', 'tableRow')
tr5.setAttribute('id' , 'tr5')
document.getElementById('tableId').appendChild(tr5)

//0 . = button

var tr5td1 = document.createElement('td')
tr5td1.setAttribute('class', 'tableCell')
tr5td1.setAttribute('id' , 'tableC51')
document.querySelector('#tr5').appendChild(tr5td1)
var zero = document.createElement('button')
zero.setAttribute('class' , 'buttonProps')
zero.setAttribute('id' , 'zero')
zero.setAttribute('onclick', 'allInOne(this.id,0)')
document.getElementById('tableC51').appendChild(zero)
var zeroButton = document.querySelector('#zero')
zeroButton.innerText = '0'

var tr5td2 = document.createElement('td')
tr5td2.setAttribute('class', 'tableCell')
tr5td2.setAttribute('id' , 'tableC52')
document.querySelector('#tr5').appendChild(tr5td2)
var equals = document.createElement('button')
equals.setAttribute('class' , 'buttonProps')
equals.setAttribute('id' , 'equals')
equals.setAttribute('onclick', 'allInOne(this.id)')
document.getElementById('tableC52').appendChild(equals)
var equalsButton = document.querySelector('#equals')
equalsButton.innerText = '='




//operations
let allInOne =(operation, operand) =>{
    switch(operation){
        case 'cButton':
            document.form.text.value = ""
            break;
        case 'clearButton':
            var elem = document.form.text.value;
            document.form.text.value = elem.substring(0,elem.length-1)
            break;
        case 'divide':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'multiply':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'seven':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'eight':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'nine':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'minus':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'four':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'five':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'six':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'plus':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'one':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'two':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'three':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'dot':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'zero':
            document.form.text.value = document.form.text.value + operand
            break;
        case 'equals':
            var equals = document.form.text.value
            if(equals){
                document.form.text.value = eval(equals)
            }
            break;
    }
}
