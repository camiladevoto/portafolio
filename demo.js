// Fictional jobs only; no network calls, tracking, or real candidate data.
const examples=[
{en:'Customer Operations Associate',es:'Especialista junior de operaciones de clientes',company:'Example Customer Co',remote:true,score:85,contact:'Published application email',contactEs:'Correo publicado para candidaturas'},
{en:'Operations Reporting Assistant',es:'Asistente de reporting operativo',company:'Example Operations Co',remote:true,score:85,contact:'Careers page',contactEs:'Página de empleo'},
{en:'Clinical Research Manager',es:'Responsable de investigación clínica',company:'Example Medical Co',remote:true,score:0,contact:'General contact',contactEs:'Contacto general'},
{en:'Junior Finance Assistant',es:'Asistente junior de finanzas',company:'Example Finance Co',remote:false,score:85,contact:'Careers page',contactEs:'Página de empleo'},
{en:'Sales Operations Coordinator',es:'Coordinación de operaciones comerciales',company:'Example SaaS Co',remote:true,score:85,contact:'General contact',contactEs:'Contacto general'}];
const es=document.documentElement.lang==='es';
const slider=document.getElementById('minscore'),remote=document.getElementById('remoteOnly'),out=document.getElementById('jobs');
function render(){const min=Number(slider.value);document.getElementById('score').textContent=min;out.replaceChildren();let n=0;
for(const j of examples){if(j.score<min||(remote.checked&&!j.remote))continue;n++;const tr=document.createElement('tr');
for(const value of [es?j.es:j.en,j.company,j.remote?(es?'Sí':'Yes'):'No',j.score+'/100',es?j.contactEs:j.contact]){const td=document.createElement('td');td.textContent=value;tr.appendChild(td)}
out.appendChild(tr)}
document.getElementById('count').textContent=es?`${n} resultados ficticios`:`${n} fictional results`;}
slider.addEventListener('input',render);remote.addEventListener('change',render);render();
