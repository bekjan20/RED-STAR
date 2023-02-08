

// // hide()  жоготот                   display-none
// // show()   корсотот                   display-block
// //fadeIn()    замедленно показывает    display-block
// //fadeOut()    медленно жоготот         display-none
// //slideDown()  жок кылат                          display-block 
// // slideUp()   бар кылат                         display-none
// //slideToggle()                         display == block =>display=none  display == nonne => display = block


// // $('.block').hide(5000)

// // $('.block').show(6000)

// // $('.block').fadeIn(2000)


// // $('.block').fadeOut(7000)


// // $('.block').slideDown(4000)


// // $('.block').slideUp(3000)


// // $('.block').slideToggle(3000)



// // $ ('.block1').hide(1000)
// // $ ('.block2').hide(2000)
// // $ ('.block3').hide(3000)  
// // $ ('.block4').hide(4000)
// // $ ('.block5').hide(5000)


// // $('.block1').show(6000)
// // $('.block2').show(7000)
// // $('.block3').show(8000)
// // $('.block4').show(9000)
// // $('.block5').show(10000)





// // $ ('.block1').fadeOut(1000)
// // $ ('.block2').fadeOut(2000)
// // $ ('.block3').fadeOut(3000)  
// // $ ('.block4').fadeOut(4000)
// // $ ('.block5').fadeOut(5000)





// //  $('.block1').fadeIn(6000)
// // $('.block2').fadeIn(7000)
// // $('.block3').fadeIn(8000)
// // $('.block4').fadeIn(9000)
// // $('.block5').fadeIn(10000)


// // $('#btn').click(() =>{
// //     $ ('.block1').slideUp(1000)
// //     $ ('.block2').slideUp(2000)
// //     $ ('.block3').slideUp(3000)  
// //     $ ('.block4').slideUp(4000)
// //     $ ('.block5').slideUp(5000)




// //      $('.block1').slideDown(6000)
// //     $('.block2').slideDown(7000)
// //     $('.block3').slideDown(8000)
// //     $('.block4').slideDown(9000)
// //     $('.block5').slideDown(10000)










// let box1 = document.querySelector('.box1')
// let box2 = document.querySelector('.box2')
// let box3 = document.querySelector('.box3')





//  function f(){
//      function  f1  (){
//     box1.style.background = "red"
//     box3.style.background = "gray"
//  }

// f1()



// function  f2  (){
//     box2.style.background = "yellow"
//     box1.style.background = "gray"
//  }

// setTimeout(f2  , 2000)

// function  f3  (){
//     box3.style.background = "green"
//     box2.style.background = "gray"


//  }

//  setTimeout(f3  , 4000)

//  }


// f()

// setInterval(f , 6000)


// // // function func (){
// // //     console.log("hello");
// // // }

// // // setTimeout(func , 40000)







// //     function f2 (){
// //         $('img').css({ "margin-top": "200px" , "transition" : "1s" , "margin-left": "200px" })
// //     }
// //     setTimeout( f2 , 700)



// //     function f3 (){
// //         $('img').css({ "margin-top": "100px" , "transition" : "1s" , "margin-left": "300px" })
// //     }
// //     setTimeout( f3, 1400)



// //     function f4 (){
// //         $('img').css({ "margin-top": "200px" , "transition" : "1s" , "margin-left": "400px" })
// //     }
// //     setTimeout( f4, 2100)


// //     function f5 (){
// //         $('img').css({ "margin-top": "100px" , "transition" : "1s" , "margin-left": "500px" })
// //     }
// //     setTimeout( f5, 2800)


// //     function f6 (){
// //         $('img').css({ "margin-top": "200px" , "transition" : "1s" , "margin-left": "600px" })
// //     }
// //     setTimeout( f6, 3500)




// //     function f7 (){
// //         $('img').css({ "margin-top": "100px" , "transition" : "1s" , "margin-left": " 800px" })
// //     }
// //     setTimeout( f7, 4200)

// // function F(){
// //     function f1(){
// //         $('img').css({ "margin-top": "100px" , "transition" : "1s" , "margin-left": "100px" })

// //     }
// //     f1()




function f (){

function f1() {
    $('.img1').css({ "opacity": "1" })
    $('.img7').css({ "opacity": "0" })
}


f1()




function f2() {
    $('.img2').css({ "opacity": "1" })
    $('.img1').css({ "opacity": "0" })
} 


setTimeout(f2,  2000)



function f3() {
    $('.img3').css({ "opacity": "1" })
    $('.img2').css({ "opacity": "0" })
}


setTimeout(f3, 4000)




function f4() {
    $('.img4').css({ "opacity": "1" })
    $('.img3').css({ "opacity": "0" })
}


setTimeout(f4, 6000)



function f5() {
    $('.img5').css({ "opacity": "1" })
    $('.img4').css({ "opacity": "0" })
}


setTimeout(f5, 8000)


function f6() {
    $('.img6').css({ "opacity": "1" })
    $('.img5').css({ "opacity": "0" })
}


setTimeout(f6, 10000)



function f7() {
    $('.img7').css({ "opacity": "1" })
    $('.img6').css({ "opacity": "0" })
}


setTimeout(f7, 12000)

}
f()
setInterval( f , 14000)




































































