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
                <h1 class="card-title pricing-card-title">${val.price}<small class="text-body-secondary fw-light">/mo</small></h1>
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

    //Section 3
    let TitleS3   = document.querySelector("#plans")
    let TableHs3  = document.querySelector("#tableHead")
    let TableB1s3 = document.querySelector("#tableBody1")
    let TableB2s3 = document.querySelector("#tableBody2")
    TitleS3.insertAdjacentText("beforeend",res.section3.title)

    TableHs3.insertAdjacentHTML("beforeend",
        res.section3.plans.map((plan) => /*html*/`
        <th style="width: 22%;">${plan.name}</th>
        `).join(" ")
    );
    TableB1s3.insertAdjacentHTML("beforeend",/*html*/`
        <th class="text-start"style="width: 22%;">${res.section3.items[0]}</th>
        ${res.section3.plans.map((plan) => /*html*/`
        <td style="width: 22%;">${plan.quality}</td>
        `).join(" ")}
    `);

    TableB2s3.insertAdjacentHTML("beforeend",/*html */`
        <tr>
            <th scope="row" class="text-start">${res.section3.items[1]}</th>
            ${res.section3.plans.map((plan) => /*html*/`
                <td style="width: 22%;">${plan.resolution}</td>
                `).join(" ")}
        </tr>
        <tr>
            <th scope="row" class="text-start">${res.section3.items[2]}</th>
            ${res.section3.plans.map((plan) => /*html*/`
            <td style="width: 22%;">${plan.status}</td>
            `).join(" ")}
        </tr>
    `);

    //Section 4
    let parrafo = document.querySelector("#section4");
    let butonS4 = document.querySelector("#section4Btn")
    
    parrafo.insertAdjacentHTML("beforebegin",   
    res.section4.parrafos.map((value)=> /*html*/` <p>${value}</p>`).join(" "));

    butonS4.insertAdjacentHTML("beforeend",/*html*/`
        <div class="col text-center">
            <button type="button" class="w-50 btn btn-lg btn-outline-primary text-center">${res.section4.boton}</button>
        </div>
    `);

    //Footer
    let footer = document.querySelector("#footer");
    footer.insertAdjacentHTML("beforeend",/*html*/`
    ${res.footer.map((value)=> /*html */ `
        <div class="col-6 col-md">
            <ul class="list-unstyled text-small">
                ${value.map((item)=> /*html*/ `
                <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${item}</a></li>
                `).join(" ")}
            </ul>
        </div>
    `).join(" ")}
    `);
}
obtener("config");



/*html*/`
<div class="col-6 col-md">
    <ul class="list-unstyled text-small">
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Frequent questions</a></li>
        <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">Privacy</a></li>
    </ul>
</div>
`