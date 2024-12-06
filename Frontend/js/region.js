document.addEventListener("DOMContentLoaded",() => {
    const archiverDetails=document.getElementById("archiverDetails");
    const controllerDetails=document.getElementById("controllerDetails");


    const archivers=[

        {name:"A1",IP:"10.199.9.8", status:"Online"},
        {name:"A2", status:"Offline"}
    ];

    const controllers=[
        {name:"C1",ip:"10.12.11",status:"Offline"},
        {name:"C2",ip:"10.12.11",status:"Online"}
    ];

    archivers.forEach(archivers=> {
        const div=document.createElement("div");
        div.textContent='${archiver.name} -${archiver.status}';
        archiverDetails.appendChild(div);
    });

    
    controllers.forEach(controllers=> {
        const div=document.createElement("div");
        div.textContent='${controller.name} -${controller.status}';
        archiverDetails.appendChild(div);
    });

});