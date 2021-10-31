//การตั้งชื่อ ขึ้นเอง ในการ Dev ต้องเป็นไปตามกฎ ของภาษาโปรแกรมนั้นๆ

//function
//คือการทำงานหนึ่งๆ
//จะไม่ทำงานหากไม่มีการเรียกใช้ call function
//จะเรียกใช้ให้ทำงานตอนไหน ที่ไหน กี่ครั้ง ก็ได้

//พารามิเตอร์ คือ ตัวแปรประเภทหนึ่ง
//console.log('Good Moring')

//ฟังก์ชั่นจะมีอยู่ 4 ลักษณะ
//1 ทำงานเสร็จในตัวเอง (คือไม่ส่งค่ากลับ ไม่มี return) และไม่มีพารามิเตอร์
function iotFunc1() {
    console.log('Hello...')
}

//2 ทำงานเสร็จในตัวเอง (คือไม่ส่งค่ากลับ ไม่มี return) และมีพารามิเตอร์
function iotFunc2(a, num) {
    console.log('Hi...')
    console.log(a + num)
}

//3 ทำงานเสร็จแล้วมีการส่งค่ากลับ (มี return) และไม่มีพารามิเตอร์
//*** ควรจะนำค่าที่ส่งกลับไปใช้งานเสมอ
function iotFunc3() {
    console.log('Hey...')
    return 999;
}

//4 ทำงานเสร็จแล้วมีการส่งค่ากลับ (มี return) และมีพารามิเตอร์
//*** ควรจะนำค่าที่ส่งกลับไปใช้งานเสมอ
function iotFunc4(b, z) {
    console.log('Hoo...')
    return 'สวัสดีชาวโลก';
}

iotFunc1()
iotFunc2(50, 100)

console.log(iotFunc3())

let sau = iotFunc4(555, 'Wow')
console.log(sau)

function iotFunc5(a, b = 20) {
    console.log(a)
    console.log(b)
    console.log(a + b)
}

iotFunc5(1, 5)
iotFunc5(100)

//่javascript มีฟังก์ชั่นแบบไม่มีชื่อ
let mod = function () {
    console.log('Wow Wow Wow')
}

let med = () => {
    console.log('Wee Wee Wee')
}

mod()
med()

function bangkok(a, b) {
    console.log(a)
    b()
}

bangkok(20, ()=>{
    console.log('Sippawit')
} )