let obtener = async()=>{
    let peticion = await fetch("config.json");
    let res = await peticion.json();
    //Header
    let header = document.querySelector("#myHead");
    header.insertAdjacentHTML("beforeend",/*html*/`
        <a href="#" class="d-flex align-items-center link-body-emphasis text-decoration-none">
            <img src=${res.header.logo} alt="LogoNetflix">
        </a>
        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <a class="py-2 link-body-emphasis text-decoration-none" href="#">${res.header.texto}</a>
        </nav>
    `);

    //Seccion 1
    let selecion1 = document.querySelector("#myJsonSection")
    selecion1.insertAdjacentHTML("beforeend",/*html*/`
        <h1 class="display-4 fs-1  text-body-emphasis">${res.section1.titulo}</h1>
        <p class="fs-5 text-body-secondary">
            ${res.section1.parrafo.map((value)=> /*html*/`
                <img src=${value.imagen}
                    alt="" 
                    width="24" 
                    height="34">
                    ${value.texto}<br>`).join(" ")}
            </p>
    `);   

    //section 2 
    let section2 = document.querySelector("#mySection2");
    section2.insertAdjacentHTML("beforebegin",/*html */`
        ${res.section2.map((val)=>/*html */`
        <div class="card mb-4 rounded-0  ">
            <div class="card-header py-3 rounded-0">
                <h4 class="my-0 fw-normal text-white">${val.title}</h4>
            </div>
            <div class="card-body">
                <h1 class="card-title pricing-card-title">${val.price}<small class="text-body-secondary fw-light">${val.time}</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                    ${val.texto.map((valu)=>/*html*/`
                    <li>${valu}</li>
                    `).join(" ")}
                </ul>
                <button type="button" class="w-100 btn btn-lg btn-outline-primary text-white">${val.button}</button>
            </div>
        </div>
        `).join(" ")}
    `);
}
obtener("config");


