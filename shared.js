/* OpenClawGTA — shared JS for subpages */
function toggleFaq(btn){var item=btn.closest('.faq-item');var isOpen=item.classList.contains('open');document.querySelectorAll('.faq-item.open').forEach(function(i){i.classList.remove('open');});if(!isOpen)item.classList.add('open');}

function toggleMenu(btn){
  var menu=document.getElementById('mobile-menu');
  var isOpen=menu.classList.contains('open');
  if(isOpen){closeMobileMenu();}
  else{menu.classList.add('open');btn.classList.add('open');btn.setAttribute('aria-expanded','true');document.body.style.overflow='hidden';}
}
function closeMobileMenu(){
  var menu=document.getElementById('mobile-menu');
  var btn=document.querySelector('.hamburger');
  if(menu)menu.classList.remove('open');
  if(btn){btn.classList.remove('open');btn.setAttribute('aria-expanded','false');}
  document.body.style.overflow='';
}
document.addEventListener('click',function(e){
  var menu=document.getElementById('mobile-menu');
  var btn=document.querySelector('.hamburger');
  if(menu&&menu.classList.contains('open')&&!menu.contains(e.target)&&!btn.contains(e.target)){closeMobileMenu();}
});
