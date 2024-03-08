https://teachablemachine.withgoogle.com/models/pAXP8TQHp/model.json

Webcam.set({
    height:250,
    width:250,
    image_Format:"png",
    png_quality:100
})

camera=document.getElementById("camera")
Webcam.attach("#camera")

function capture(){
    Webcam.snap(function (data_uri){
        document.getElementById("Capture").innerHTML='<img id="handimg" src="'+data_uri+'"/>'
    })
}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pAXP8TQHp/model.json",modelLoaded)
function modelLoaded(){
    console.log("modelLoaded successfully")
}

function prediction(){
    img=document.getElementById("handimg")
    classifier.classify(img,gotResult)
}
function gotResult(error,result){
    if (error){
        console.error(error)
    }else{
        console.log(result)
        document.getElementById("emoji1").innerHTML=result[0].label
        predict=result[0].label
        if (predict=="V"){
            document.getElementById("hand1").innerHTML="✌"
        }else if(predict=="Good"){
            document.getElementById("hand1").innerHTML="👍"
        }else if(predict=="Bad"){
            document.getElementById("hand1").innerHTML="👎"
        } else{
            document.getElementById("hand1").innerHTML="👌"
        }
    }
}