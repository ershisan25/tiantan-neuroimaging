// nav toggle (mobile)
document.querySelectorAll('.menubtn').forEach(b=>b.addEventListener('click',()=>{
  document.querySelector('.navlinks').classList.toggle('open');
}));
// scroll reveal
const io=new IntersectionObserver((es)=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
