// SHUFFLE DIVS
var clicks = []


$(function () {
    var parent = $(".main");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});




$(".child").click(function(i,e,f){
    
    if(clicks.length<2){clicks.push($(this))}
    
    
    
    //console.log($(this).data("id"))
    if ($(this).children('p').length<=0){
        // do stuff, assign boolean if you want
        $(this).append(`<p>${$(this).data("id")}</p>`)
    }
    else return
    //console.log($(".child:has(p)").length)
    if($(clicks[0]).data("id")==$(clicks[1]).data("id")){
        console.log("match")
        $(clicks[0]).animate({opacity:0})
        $(clicks[1]).animate({opacity:0})
        clicks = []
    }
    else if($(clicks[0]).data("id")!=$(clicks[1]).data("id")){
        setTimeout(remove, 1000);
        
    }
})


function remove(){
    $(clicks[0]).children("p").remove()
    $(clicks[1]).children("p").remove()
    clicks = []
}