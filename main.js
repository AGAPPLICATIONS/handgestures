//https://teachablemachine.withgoogle.com/models/Wijq1fI0x///
Webcam.set({
    height:500,
    width:800,
    image_format:"png",
    png_quality:90
});
camera= document.getElementById("livecamera");
Webcam.attach("#livecamera");
function takepic(){
    Webcam.snap(function(data_uri){
        document.getElementById('imagecaptured').innerHTML= '<img id="imagesnapped" src="'+data_uri+'">'
    });
    //done by putting function with datauri parameter inside snap//

}
console.log("ML5 verion:",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Wijq1fI0x/model.json",modelloaded);
function modelloaded(){
    console.log("model is loaded");
}