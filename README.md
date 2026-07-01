<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<title>Timeline Player</title>

<style>
body{
    margin:0;
    background:#f2f2f2;
    font-family:Arial;
}

.player{
    width:90%;
    max-width:1300px;
    margin:80px auto;
    background:white;
    border-radius:20px;
    padding:40px;
    box-shadow:0 10px 30px rgba(0,0,0,.08);
}

.time{
    text-align:center;
}

.current{
    font-size:40px;
    font-weight:bold;
}

.total{
    color:#999;
    margin-top:5px;
}

.timeline{
    position:relative;
    height:70px;
    margin-top:50px;
}

.line{
    position:absolute;
    top:30px;
    left:0;
    right:0;
    height:2px;
    background:#ddd;
}

.tick{
    position:absolute;
    width:2px;
    height:12px;
    background:#cfcfcf;
    top:25px;
}

.big{
    height:24px;
    top:19px;
}

.marker{
    position:absolute;
    width:4px;
    height:42px;
    border-radius:4px;
    top:10px;
}

.orange{
    background:#ff9800;
}

.red{
    background:#ff2d2d;
}

.dot{
    position:absolute;
    width:10px;
    height:10px;
    border-radius:50%;
    top:-6px;
    left:-3px;
    background:inherit;
}

.controls{
    margin-top:40px;
    display:flex;
    justify-content:center;
    gap:30px;
}

button{
    border:none;
    background:none;
    font-size:32px;
    cursor:pointer;
}
</style>

</head>
<body>

<div class="player">

    <div class="time">
        <div class="current">00:23:18</div>
        <div class="total">01:20:05</div>
    </div>

    <div class="timeline">

        <div class="line"></div>

    </div>

    <div class="controls">
        <button>⟲</button>
        <button>▶</button>
        <button>⟳</button>
    </div>

</div>

<script>

const timeline=document.querySelector(".timeline");

//Marcações da régua
for(let i=0;i<=100;i++){

    const tick=document.createElement("div");
    tick.className="tick";

    if(i%5==0)
        tick.classList.add("big");

    tick.style.left=i+"%";

    timeline.appendChild(tick);
}

//Marcadores coloridos
const markers=[
    {x:18,color:"orange"},
    {x:32,color:"red"},
    {x:56,color:"orange"},
    {x:77,color:"orange"}
];

markers.forEach(m=>{

    const div=document.createElement("div");
    div.className="marker "+m.color;
    div.style.left=m.x+"%";

    const dot=document.createElement("div");
    dot.className="dot";

    div.appendChild(dot);

    timeline.appendChild(div);

});

</script>

</body>
</html>
