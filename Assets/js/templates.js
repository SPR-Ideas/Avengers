function charaterTemplate(name,url,story){
    let template= `
<div class="col s12 m6 l4">
  <div class="card ">
    <div class="card-image postergrad">
      <img class='avatar activator' src="${url}">
      <span class="card-title avatar-title">${name}</span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4 truncate">${name}<i class="material-icons right">close</i></span>
      <p>${story}</p>
    </div>

  </div>
</div>
`
return template;
}

function stoneTemplate(name,url,story){
  let template =`  <div class="z-depth-0  card col s12 m6 l4">
  <div class="card-content card-stone">
    <span class="card-title">${name.charAt(0).toUpperCase()}${name.slice(1)} Stone</span>
    <div class="card-container ">
        <img class="stone activator" src="${url}" >
    </div>
  </div>
  <div class="card-reveal blur">
    <span class="card-title grey-text text-darken-4"> <strong>${name.charAt(0).toUpperCase()}${name.slice(1)} Stone</strong><i class="material-icons right">close</i></span>
    <p>${story}</p>
  </div>
</div>
`
return template;
}