fetch("https://s3.amazonaws.com/kcm-alerts-realtime-prod/vehiclepositions_pb.json")
.then(function(result){
    return result.json();
})
.then(function(data){
    console.log(data)   
}).catch(err => {
    if (err) {
        alert("hey do better")
        throw err;
    }
})

// $.ajax({url: "https://s3.amazonaws.com/kcm-alerts-realtime-prod/vehiclepositions_pb.json", method: "GET", success: (responce)=> {
//     console.log(responce)
// }})

const asyncFn = async ()=>{
    try{
        const data = await fetch("https://s3.amazonaws.com/kcm-alerts-realtime-prod/vehiclepositions_pb.json");
    // const json = 
    console.log(data)
    } catch {
        alert("wrong address");
        
    }
}

asyncFn();


// fetch(`https://${hueIp}/api/PcjV-TyZqyQtTrCjnesAGcl4CMMUmxnBcJqZWxVM/lights/2`)
// .then(function(result){
//     return result.json()
// })
// .then(function(data){
//     console.log(data)   
// })