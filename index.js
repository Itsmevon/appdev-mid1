 
 
const card = $('.card');
const container = $('.container');
 


 
// 2nd step - Moving animation event
 
 
container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
});
 
// 4th step - Adding animation in
container.mouseenter(function(e) {
    card.css('transform', 'none');
 
    // 
  
 
    $('.photo img').css('transform', 'translateZ(50px)');
    $('.title').css('transform', 'translateZ(50px)');
    $('.social').css('transform', 'translateZ(50px)');
    $('.info h4').css('transform', 'translateZ(50px)');
    $('.profile').css('transform', 'translateZ(50px)');
  });
 
// 3rd step - Removing animation in
 
 
container.on('mouseleave', e => {
    card.css('transform', "all 0.5s ease");
    card.css('transform', `rotateY(0deg) rotateX(0deg)`);
});



