	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     

   var form=document.getElementById('form')
   form.addEventListener('submit',function(event){
    event.preventDefault()
    alert('Submitted')

    var name=document.getElementById('username').value
    console.log(name)
    var email=document.getElementById('mail').value
    console.log(email)
    var message=document.getElementById('msg').value
    console.log(message)
   })


    // $(function() {
    
    //     var $meters = $(".meter > span");
    //     var $section = $('skills');
    //     var $queue = $({});
        
    //     function loadDaBars() {
    //                 $(".meter > span").each(function() {
    //                     $(this)
    //                         .data("origWidth", $(this).width())
    //                         .width(0)
    //                         .animate({
    //                             width: $(this).data("origWidth")
    //                         }, 1200);
    //                 });
    //     }
        
    //     $(document).bind('scroll', function(ev) {
    //         var scrollOffset = $(document).scrollTop();
    //         var containerOffset = $section.offset().top - window.innerHeight;
    //         if (scrollOffset > containerOffset) {
    //             loadDaBars();
    //             // unbind event not to load scrolsl again
    //             $(document).unbind('scroll');
    //         }
    //     });
        
    // });



