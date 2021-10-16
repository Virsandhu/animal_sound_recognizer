https://teachablemachine.withgoogle.com/models/8JnXaQIdq/

function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/8JnXaQIdq/model.json', modelready);
    }
    function modelready(){
        classifier.classify(gotResults);
        console.log("model is ready")
    }
    function gotResults(error,results){
        if (error){
            console.error(error)
        }else{
            console.log(results)

        r= Math.floor(Math.random()*255)+1;
        g= Math.floor(Math.random()*255)+1;
        b= Math.floor(Math.random()*255)+1;

        document.getElementById("result label").innerHTML='I can hear- '+results[0].label;
        document.getElementById("result confidence").innerHTML='Accuracy- '+(results[0].confidence*100).toFixed(2)+'%';

        document.getElementById("result label").style.color='rgb('+r+','+g+','+b+')';
        document.getElementById("result confidence").style.color='rgb('+r+','+g+','+b+')';

        img = document.getElementById("Sound");
        if (results[0].label == "barking"){
            img.src="dog.gif";
    } else if(results[0].label == "meowing "){
        img.src="cat.gif";
} else if (results[0].label == "neighing"){
img.src="horse.gif";
} else{
    img.src="gif.gif";
}
    }
}
