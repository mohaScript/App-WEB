var tus = new Vue ({
    el: '#tab',
    data:{
            page: 0,
            rtrn: [],
            septiembre: [],
            octubre: []
    },
    method: {
        returner(rade){
           this.rtrn.push(rade);
        }
    }
})


var url = "https://api.myjson.com/bins/1d548q";

function traer(url){
    fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            tus.septiembre = myJson.gamesSep;
            tus.octubre = myJson.gamesOct;
        })
}
traer(url);