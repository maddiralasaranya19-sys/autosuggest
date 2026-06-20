var users=[
    {
        "name":"John Doe",
        "gender":"Male",
        "image":"/images/john.png"
    },
    {
        "name":"Jane Doe",
        "gender":"Female",
        "image":"/images/image.png"
    }
]
var curId=0;
function toggle(){
    //togglee curId from 0->1&1->0
    curId=(curId+1)%2;
    //toggle the rendered user details

    //Image
    var user=users[curId];
    document.getElementById("user-img").src=users[curId].image;
    // to do:update for name and gender !
    // name
    document.getElementById("user-name").innerText=user.name;
    // gender
    document.getElementById("user-gender").innerText=user.gender;

}