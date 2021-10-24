//Control statement
//Selection
//if, if-else, if-else-if, switch

//if
let a = 10
if (a > 2 ** 3) {
    console.log('Hello...')
}

//if-else
let b = 999
if (b + 1 !== '1000') {
    console.log('Wow....')
} else {
    console.log('Woo.....')
}

//if-else-if
let c = 50
if (c > 80) {
    console.log('Hi 1')
} else if (c > 70) {
    console.log('Hi 2')
} else if (c > 50) {
    console.log('Hi 3')
} else if (c > 30) {
    console.log('Hi 4')
} else {
    console.log('Hi 5')
}

//switch
let d = 15
switch (d) {
    case 10: console.log('Iot 1')
        break
    case 15: console.log('Iot 2')
        break
    case 5: console.log('Iot 3')
        break
    case 100: console.log('Iot 4')
        break
    case 999: console.log('Iot 5')
        break
    default: console.log('Iot 6') //ไม่จำเป็นต้องมี
}

//Loop
//while, do-while, for, foreach, for-in, for-of

//while
let x = 1
while(x <= 5){
    console.log('SAU')
    x++
}

//do-while
let y = 1
do{
    console.log('IoT')
    y++
}while(y <= 5)

//for
for(let z = 1 ; z <= 5 ; z++){
    console.log('Wow')
}