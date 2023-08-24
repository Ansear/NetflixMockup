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
    
}
obtener("config");



