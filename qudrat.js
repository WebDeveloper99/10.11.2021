


// const myfunc =(a,b,c)=>{

//     var k = 0;
//     while (a >= c || b >=c) {
//         a -=c;
//         b -=c;
//         k++;
//     }

//     console.log(k*2);

// }

// myfunc(10,2,1)




// 1. Object kalitlari va qiymatlarini tengligini tekshirish
// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };

// const areEqual =() => {
//     (data.a === data2.a && data.b === data2.b) ? console.log('true') : console.log('false');
// }

// areEqual();






// 2. Object ichidagi Objectni qiymatlari mavjudligini tekshirish

// const data = { a: { b: undefined } };
// const data2 = { a: { b: 'it does exits' } };
// const data3 = { a: { b: 'it does exits', innerKey: null } };


// var myData = Object.values(data);

// myData.map((val)=>{
    
//     if(Object.values() == 'null'){
//         console.log('ddd');
//     }
// })

// nestedValueExists =(data) =>{
//    var asd = data.a;
   
// } 

// nestedValueExists();

// nestedValueExists(data2)  => true
// nestedValueExists(data3)  => false



// 3. Object qiymatlari va kalitlari bir xillari borligini tekshirish

// const data = { a: 1, b: 2 };
// const data2 = { c: 1, b: 2 };
// const data3 = { c: 3, b: 5 };

// checkSame( data, data2 )  => true
// checkSame( data2, data3 )  => false


// array = [1,2,3,4,5,6,7,8,9];
// arr = [...Array(9)];

// const myfunc =()=>{
//     arr.map((a)=>{
//         array.map((value)=>{
//             console.log(`${a} * ${value} = ${a*value}`);
//         })
//     })
// }


// myfunc();


// const carry =(a,b)=>{
//     for (let i = a; i <= b; i++) {
        
//         for (let j = a; j <= b; j++) {
            
//             console.log(`${i} * ${j} = ${i*j}`);
                        
//         }
//         console.log('=============================================');
        
//     }
// }


// carry(1,9);






