
    //! navbar js toggle script  start
    document.addEventListener('DOMContentLoaded', () => 
    {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
        });

    });
      //! navbar js toggle script end


//navbar Modal


      //* start of Tabs navbar script
function openTab(evt, tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("content-tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " is-active";
}
      // * End of Tabs navbar script


      // ! start of clock in card
function showTime()
{
    'use strict';

    var now = new Date(),

        hours = now.getHours(),

        minutes = now.getMinutes(),

        seconds =now.getSeconds();

        if(hours < 10)
        {  hours = '0' + hours; }
        
        if(minutes < 10)
        {  minutes = '0' + minutes; }
        
        if(seconds < 10)
        {  seconds = '0' + seconds; }

    document.getElementById('hours').textContent =  hours + ' ';
    document.getElementById('minutes').textContent = minutes +' ';
    document.getElementById('seconds').textContent = seconds ;
}

window.onload = function()
{
  'use strict';

  setInterval(showTime, 500);  //function It works every half a second
}
//  This is Show in Inspect console
// console.log(now);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
      // ! end of clock in card



