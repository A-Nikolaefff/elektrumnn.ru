// Появлению меню при скролле верх
window.addEventListener('scroll', function(e) {
    const
      oldScroll = this.oldScroll || 0,
      newScroll = this.scrollY,
      isScrollDown = newScroll > oldScroll;
  
    document.querySelector('.header').classList.toggle('scroll-down', isScrollDown);
  
    this.oldScroll = newScroll;
  });

// Счетчик
function scroll(val,el,timeout,step){
  var i=0;
  (function(){
  if(i<=val){
  setTimeout(arguments.callee,timeout);
  document.getElementById(el).innerHTML=i;
  i=i+step;
  }else{
  document.getElementById(el).innerHTML=val;
  }
  })();
  }

  
  

