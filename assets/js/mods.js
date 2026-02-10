fetch("https://api.modrinth.com/v2/search?facets=[[\"project_type:mod\"]]&limit=30")
.then(r=>r.json())
.then(data=>{
  const box=document.getElementById("mods");
  data.hits.forEach(m=>{
    box.innerHTML+=`
    <div class="card">
      <img src="${m.icon_url}">
      <h3>${m.title}</h3>
      <p>${m.description}</p>
      <span>⬇ ${m.downloads}</span><br>
      <a href="mod.html?id=${m.project_id}">عرض</a>
    </div>`;
  });
});
