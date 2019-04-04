var dato = {
    "gamesSep": [
    {
        "september": "9/01",
        "teams1": "U1 and U4",
        "location1": "AJ Katzenmaier",
        "times1": "9:30 a.m.",
        "teams2": "U3 and U2",
        "location2": "Greenbay",
        "times2": "1:00 p.m."
    },
    {
        "september": "9/08",
        "teams1": "U5 and U6",
        "location1": "Howard A Yeager",
        "times1": "9:30 a.m.",
        "teams2": "U6 and U1",
        "location2": "Marjorie P Hart",
        "times2": "1:00 p.m."
    },
    {
        "september": "9/15",
        "teams1": "U2 and U4",
        "location1": "North",
        "times1": "9:30 a.m.",
        "teams2": "U3 and U5",
        "location2": "AJ Katzenmaier",
        "times2": "1:00 p.m."
    },
    {
        "september": "9/22",
        "teams1": "U1 and U3",
        "location1": "South",
        "times1": "9:30 a.m.",
        "teams2": "U2 and U6",
        "location2": "Howard A Yeager",
        "time2": "1:00 p.m."
    },
    {
        "september": "9/29",
        "teams1": "U4 and U5",
        "location1": "Greenbay",
        "times1": "9:30 a.m."
    }],
    
    "gamesOct": [
    {
        "octover": "10/06",
        "teams1": "U2 and U5",
        "location1": "Marjorie P Hart",
        "times1": "9:30 a.m.",
        "teams2": "U1 and U6",
        "location2": "South",
        "times2": "1:00 p.m."
    },
    {
        "octover": "10/08",
        "teams1": "U3 and U4",
        "location1": "Howard A Yeager",
        "times1": "9:30 a.m.",
        "teams2": "U5 and U1",
        "location": "Greenbay",
        "times2": "1:00 p.m."
    },
    {
        "octover": "10/20",
        "teams1": "U6 and U3",
        "location1": "North",
        "times1": "9:30 a.m.",
        "teams2": "U2 and U4",
        "location2": "Marjorie P Hart",
        "times2": "1:00 p.m."
    },
    {
        "octover": "10/27",
        "teams1": "U3 and U1",
        "location1": "AJ Katzenmaier",
        "times1": "9:30 a.m.",
        "teams2": "U5 and U6",
        "location2": "Howard A Yeager",
        "times2": "1:00 p.m."
    }],
    "locations": [
    {
        "place": "AJ Katzenmaier",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.7810520615835!2d-87.86492878454477!3d42.32586847918918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sA+J+Katzenmaier+Elementary+School!5e0!3m2!1ses!2ses!4v1554297168754!5m2!1ses!2ses"
    },
    {
        "place": "North",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94408.47167658563!2d-87.92392148038375!3d42.31555182011494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfe6df83b0f197ed6!2sNorth+Elementary+School!5e0!3m2!1ses!2ses!4v1549234878874"
    },
    {
        "place": "Greenbay",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2845.7224532899713!2d-88.06135088417606!3d44.500353541089375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb435f5184dfbb1ae!2sGreen+Bay+Packers%2C+Inc.!5e0!3m2!1ses!2ses!4v1549233698962"
    },
    {
        "place": "Howard A Yeager",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.2698766737826!2d-87.85606978504094!3d42.31544224591159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac26b07c5%3A0x8b51fa5d6efe771a!2sHoward+A.+Yeager+School+(PREK-K)!5e0!3m2!1ses!2ses!4v1549234552564"
    },
    {
        "place": "Marjorie P Hart",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.7201256054186!2d-87.84787868504053!3d42.327167845171644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fecd0628e1bb5%3A0x9a4d5f9aafd42e02!2sMarjorie+P+Hart+Elementary+School!5e0!3m2!1ses!2ses!4v1549233553586"
    },
    {
        "place": "South",
        "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d377632.25222332426!2d-88.13407293480608!3d42.31582420698433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ce88e90b96bbec1!2sSouth+Elementary+School!5e0!3m2!1ses!2ses!4v1549234989113"
    }],
}


var maps;

function filter(){
    for(i=0; i<dato.locations.length; i++){
        if(document.getElementById('selection').value == dato.locations[i].place){
            maps = `<tr><td class="col-12"><iframe class="col-12" src="${dato.locations[i].map}" width="400" height="300" frameborder="0" style="border:0" allowfullscreen></iframe><td><tr>`
        }
    }
    // return maps;
    return document.getElementById("tmaps").innerHTML = maps;
}
filter()