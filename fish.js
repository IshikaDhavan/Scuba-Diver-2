AFRAME.registerComponent("fish",{
    init:function(){
        for( var i=0; i<25 ; i++){
            var id = `fish${i}`
            var posx = (Math.random() * 3000 + (-1000))
            var posy = (Math.random() * 5 + (-1))
            var posz = (Math.random()* 3000 + (-1000))
            var position = {x: posx , y: posy , z: posz}
            this.spawnfish(id,position)
        }

    },
    spawnfish:function(id,position){
        var fishel = document.createElement("a-entity")
        fishel.setAttribute("gltf-model","assets/koi-fish/scene.gltf")
        fishel.setAttribute("animation-mixer",{})
        fishel.setAttribute("scale",{x:0.2 , y:0.2 , z:0.2})
        fishel.setAttribute("rotation",{x: 0, y:90, z:0})
        fishel.setAttribute("id",id)
        fishel.setAttribute("position", position)
        var islandel = document.querySelector("#island")
        islandel.appendChild(fishel)
    }
})