const id=new URLSearchParams(location.search).get("id");
fetch(`https://api.modrinth.com/v2/project/${id}`)
.then(r=>r.json())
.then(m=>{
  document.getElementById("mod").innerHTML=`
  <h2>${m.title}</h2>
  <img src="${m.icon_url}" width="120">
  <p>${m.description}</p>`;
});

fetch(`https://api.modrinth.com/v2/project/${id}/version`)
.then(r=>r.json())
.then(vs=>{
  const list=document.getElementById("versions");
  vs.forEach(v=>{
    list.innerHTML+=`<li>${v.game_versions.join(", ")} | ${v.loaders.join(", ")} <a href="${v.files[0].url}">تحميل</a></li>`;
  });
});
