$.getJSON('data.json', function(data){
    let saya = data;
    console.log(saya);
    $('#vr').append('<a-scene><a-entity text="value: '+ saya.nama +' ('+ saya.nim +'); color: #000000; wrapCount: 30;" position="-0.90631 1.05284 -3.08608" rotation="0 50 0"></a-entity><a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box></a-scene>')
});
