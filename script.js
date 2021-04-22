const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const nameInput = document.getElementById('name')
const insInput = document.getElementById('ins')
const downloadBtn = document.getElementById('download-btn')
const imgInput = document.getElementById('img')
let button=document.getElementById('button')

button.addEventListener('change',function(){
    console.log(this.files[0].name)
    imgInput.src=URL.createObjectURL(this.files[0])
}) 

const image = new Image()
image.src = '2.png'
image.onload = function(){
  drawImage()
}
  
function drawImage(){
    ctx.drawImage(imgInput, 328, 57, 430, 430)
    ctx.drawImage(image, 0, 0,canvas.width,canvas.height);
    ctx.strokeStyle = "blue";
    ctx.moveTo(530, 600);
    ctx.lineTo(530, 600);
    ctx.stroke();
    
    ctx.font = "45px bahnschrift";
    ctx.fillStyle='#000000'
    ctx.textAlign = "center"; 
    ctx.fillText(nameInput.value, 530, 600)
    ctx.moveTo(530, 650);
    ctx.lineTo(530, 650);
    ctx.stroke();
    ctx.font = "30px bahnschrift"
    ctx.fillText(insInput.value, 530, 650)
}

nameInput.addEventListener('input',function(){
    drawImage()
})
insInput.addEventListener('input',function(){
    drawImage()
})
imgInput.addEventListener('load',function(){
    drawImage()
})


downloadBtn.addEventListener('click', function(){
    try {
        drawImage()

        downloadBtn.download = "poster.png"
        downloadBtn.href = canvas.toDataURL()    
    } catch (e) {
        alert(e);
    }
})
