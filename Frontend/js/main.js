
function updateCameraStatus(){
    const totalOnline=cameraStatus.reduce((sum,region) => sum+region.online, 0);
    const totalOffline=cameraStatus.reduce((sum,region) => sum+region.offline, 0);
 
    document.getElementById("online-count").textContent='Total Online Cameras: ${totalOnline}';
    document.getElementById("offline-count").textContent='Total Offline Cameras: ${totalOffline}';
}
 
function navigateToRegion(regionPage){
    window.location.href=regionPage;
}
function navigateTo(Page){
    window.location.href=Page;
}
document.addEventListener("DOMContentLoaded", updateCameraStatus);



const cameraStatus=[
    {region:"APAC" ,online:5,offline:5},
    {region:"EMEA" ,online:5,offline:5},
    {region:"LACA" ,online:5,offline:5},
    {region:"NAMER" ,online:5,offline:5},
];

function showOnlineCameras(){
    alert("Navigate to Online Cameras...");
    window.Location.href="online.html";
}
function showOfflineCameras(){
    alert("Navigate to Offline Cameras...");
    window.Location.href="Offline.html";
}

function showOnlineArchivers(){
    alert("Navigate to Online Archivers...");
    window.Location.href="archiver1.html";
}
function showOfflineArchivers(){
    alert("Navigate to Offline Archivers...");
    window.Location.href="online.html";
}

function showOnlineControllers(){
    alert("Navigate to Online Controllers...");
    window.Location.href="online.html";
}
function showOfflineControllers(){
    alert("Navigate to Offline Controllers...");
    window.Location.href="online.html";
}


