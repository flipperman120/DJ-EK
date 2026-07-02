// Small JS for nav toggle and keyboard accessibility
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');
  if(!btn || !nav) return;
  btn.addEventListener('click', ()=>{
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.setAttribute('aria-hidden', String(expanded));
  });
  // close on escape
  document.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
      btn.setAttribute('aria-expanded','false');
      nav.setAttribute('aria-hidden','true');
      btn.focus();
    }
  });
});
