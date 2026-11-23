const toggle=document.querySelector('.menu-toggle');
const links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'×':'☰'});links.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));}
const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(element=>revealObserver.observe(element));
const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-window.innerHeight;if(progress)progress.style.width=(max>0?window.scrollY/max*100:0)+'%'},{passive:true});
document.querySelectorAll('.filter-button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter-button').forEach(item=>item.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>{card.classList.toggle('hidden',filter!=='all'&&card.dataset.category!==filter)});}));
