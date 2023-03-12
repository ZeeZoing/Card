var details = [
    {
        "img":"asset/image/nang.jpg","name":"Chin Kosal", "position":"Web Developer","sex":"Male","relation":"Single","skills":"JavaScript, CSS, HTML","contact":"https://youtu.be/peszIPmtrPI?t=4095"
    },
    {
        "img":"asset/image/net.jpg","name":"Proung Manet", "position":"Java Developer","sex":"Male","relation":"Single","skills":"Java, CSS, HTML","contact":"https://youtu.be/peszIPmtrPI?t=4095"
    },
    {
        "img":"asset/image/rong.jpg","name":"Seng Naren", "position":"Mobile Developer","sex":"Male","relation":"Single","skills":"C#, CSS, HTML","contact":"https://youtu.be/peszIPmtrPI?t=4095"
    },
    {
        "img":"asset/image/net.jpg","name":"Seng Thairong", "position":"Mobile Developer","sex":"Male","relation":"Single","skills":"C#, Java  , CSS, HTML","contact":"https://youtu.be/peszIPmtrPI?t=4095"
    },
    {
        "img":"asset/image/net.jpg","name":"Seng Toma", "position":"Java Developer","sex":"Male","relation":"Single","skills":"Java, CSS, HTML","contact":"https://youtu.be/peszIPmtrPI?t=4095"
    },
]
var Menu = [
    { 'menu' : "Home" },
    { 'menu' : "Contact" },
    { 'menu' : "Campus" },
    { 'menu' : "Location" },
    { 'menu' : "Feedback" },
] 
var add = ' ';
for (i in details){
    add +=
    `
    <div class="card">
                <div class="card-content">
                     <div class="image">
                         <img src="${ details[i].img}" alt="">
                     </div>
                     <div class="content">
                         <div class="name" id="name">
                             <h1>${details[i].name}</h1>
                         </div>
                         <div class="position">
                             <span>${details[i].position}</span>
                         </div>
                         <div class="details">
                             <table>
                                 <tr>
                                     <td class="left">Gender</td>
                                     <td width="30px"></td>
                                     <td class="right">${details[i].sex}</td>
                                 </tr>
                                 <tr>
                                     <td class="left">RelationShip</td>
                                     <td width="30px"></td>
                                     <td class="right">${details[i].relation}</td>
                                 </tr>
                                 <tr>
                                     <td class="left">Skills</td>
                                     <td width="30px"></td>
                                     <td class="right">${details[i].skills}</td>
                                 </tr>
                                 <tr>
                                     <td class="left">Contact</td>
                                     <td width="30px"></td>
                                     <td class="right"><a href="${details[i].contact}" target="_blank" rel="noopener noreferrer">FacebookLink</a></td>
                                 </tr>
                             </table>
                         </div>
                     </div>
                </div>
             </div>
    `;
} 
document.getElementById('demo').innerHTML = '<div class="card-block" id="demo"> ' + add +' </div>'

var addMenu = ' ';
for(i in Menu){
    addMenu +=
    `
    <a href="#">${Menu[i].menu}</a>
    `
}
document.getElementById('txtMenu').innerHTML = '<div class="navbar-menu" id="menu"> '+ addMenu +' </div>';

