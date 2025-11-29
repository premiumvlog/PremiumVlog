// Small helper script
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });
});
