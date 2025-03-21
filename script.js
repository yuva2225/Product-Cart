let sum = 0;
let count = 0;

let a = document.querySelector('#add1')
let b = document.querySelector('#add2')
let c = document.querySelector('#add3')
let d = document.querySelector('#add4')
let e = document.querySelector('#add5')

let count1 = 0
let count2 = 0
let count3 = 0
let count4 = 0
let count5 = 0

let remove1
let remove2
let remove3
let remove4
let remove5

a.addEventListener('click',()=>{
    a.style.backgroundColor = 'lightgreen'
    sum =sum+20
    count++
    count1++;
    document.querySelector('#products').innerHTML = count
    document.querySelector('#total').innerHTML=sum
    document.querySelector('#count1').innerHTML = count1;
    remove1=count1
})

b.addEventListener('click',()=>{
    b.style.backgroundColor = 'lightgreen'
    sum = sum+30
    count++
    count2++
    document.querySelector('#products').innerHTML = count
    document.querySelector('#total').innerHTML = sum
    document.querySelector('#count2').innerHTML = count2
    remove2 = count2
})

c.addEventListener('click',()=>{
    c.style.backgroundColor = 'lightgreen'
    sum =sum+50
    count++;
    count3++
    document.querySelector('#products').innerHTML = count
    document.querySelector('#total').innerHTML=sum
    document.querySelector('#count3').innerHTML = count3
    remove3 = count3
})

d.addEventListener('click',()=>{
    d.style.backgroundColor = 'lightgreen'
    sum =sum+25
    count++;
    count4++
    document.querySelector('#products').innerHTML = count
    document.querySelector('#total').innerHTML = sum
    document.querySelector('#count4').innerHTML = count4
    remove4 = count4
})

e.addEventListener('click',()=>{
    e.style.backgroundColor = 'lightgreen'
    sum =sum+25
    count++;
    count5++
    document.querySelector('#products').innerHTML = count
    document.querySelector('#total').innerHTML=sum
    document.querySelector('#count5').innerHTML = count5
    remove5 = count5
})

document.querySelector('#remove1').addEventListener('click',()=>{
    if(remove1>0)
    {
        sum = sum-20
        count--
        document.querySelector('#products').innerHTML = count
        document.querySelector('#total').innerHTML = sum
        remove1--
        count1--
        document.querySelector('#count1').innerHTML = count1;
    }
    if(remove1==0)
    {
        a.style.backgroundColor = ''
    }
})

document.querySelector('#remove2').addEventListener('click',()=>{
    if(remove2>0)
    {
        sum = sum-30
        count--
        document.querySelector('#products').innerHTML = count
        document.querySelector('#total').innerHTML = sum 
        remove2--
        count2--
        document.querySelector('#count2').innerHTML = count2
        
    }
    if(remove2==0)
    {
        b.style.backgroundColor = ''
    }
})

document.querySelector('#remove3').addEventListener('click',()=>{
    if(remove3>0)
    {
        sum = sum-50
        count--
        document.querySelector('#products').innerHTML = count
        document.querySelector('#total').innerHTML = sum
        remove3--
        count3--
        document.querySelector('#count3').innerHTML = count3
    }
    if(remove3==0)
    {
        c.style.backgroundColor = ''
    }
})

document.querySelector('#remove4').addEventListener('click',()=>{
    if(remove4>0)
    {
        sum = sum-25
        count--
        document.querySelector('#products').innerHTML = count
        document.querySelector('#total').innerHTML = sum
        remove4--
        count4--
        document.querySelector('#count4').innerHTML = count4
    }
    if(remove4==0)
    {
        d.style.backgroundColor = ''
    }
})

document.querySelector('#remove5').addEventListener('click',()=>{
    if(remove5>0)
    {
        sum = sum-25
        count--
        document.querySelector('#products').innerHTML = count
        document.querySelector('#total').innerHTML = sum
        remove5--
        count5--
        document.querySelector('#count5').innerHTML = count5
    }
    if(remove5==0)
    {
        e.style.backgroundColor = ''
    }
})

document.querySelector('#submit').addEventListener('click',()=>{
    count = 0
    sum = 0
    document.querySelector('#count1').innerHTML = 0
    document.querySelector('#count2').innerHTML = 0
    document.querySelector('#count3').innerHTML = 0
    document.querySelector('#count4').innerHTML = 0
    document.querySelector('#count5').innerHTML = 0
    count1=0
    count2=0
    count3=0
    count4=0
    count5=0
    document.querySelector('#products').innerHTML = 0
    document.querySelector('#total').innerHTML = 0
    a.style.backgroundColor = ''
    b.style.backgroundColor = ''
    c.style.backgroundColor = ''
    d.style.backgroundColor = ''
    e.style.backgroundColor = ''
})

