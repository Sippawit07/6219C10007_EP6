//operator ตัวดำเนินการ
// + - * / %  **

console.log(8 ** 3)
console.log(2 ** 4)

console.log(15 % 9)
console.log(50 % 999)

// > < >= <= == != === !==

console.log('5' == 5)
console.log('5' === 5)//เปรียบเทียบทั้งข้อมูล และชนิดของข้อมูล

console.log('5' != 5)
console.log('5' !== 5)//เปรียบเทียบทั้งข้อมูล และชนิดของข้อมูล

// ++ --

// += -= *= /= %=

let x = 20
x = x + 10
console.log(x)
x += 100 // x = x + 100
console.log(x)

//Ternary Operator
//เงื่อนไข ? สิ่งที่ทำเมื่อเงื่อนไขเป็นจริง : สิ่งที่ทำเมื่อเงื่อนไขเป็นเท็จ

let z = 25 % 3 > 100 ? 9 + 10 : 9 * 10

console.log(z)