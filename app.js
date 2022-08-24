//ดึงข้อมูลโดยใช้ attribute ให้ชื่อภาพของแต่ละตัวสัมพันธ์กัน โดยจะใส่ชื่อภาพใหญ่ไว้ที่ alt(attribute) ใน html 
//event Click
const smallImg = document.querySelectorAll('.gallery img')
const fullImg = document.querySelector('.full-image') //มีการสร้างดิฟใหม่ เพื่อที่จะเอาภาพมาแสดง
const modal = document.querySelector('.modal')
//ต้องการทราบว่า image แต่ละตัวเก็บหมายเลขภาพใหญ่ว่าอะไรโดยทำการวนลูป
smallImg.forEach(img=>{ //ดึงภาพแต่ละตัวออกมา สร้างตัวแปร img เป็นตัวแทนของแท็ก img ใน html
    img.addEventListener("click",()=>{ //ดักจับอีเว้นคลิก
        const fullsize = img.getAttribute("alt") //ดึงเอา alt ของแต่ละภาพมาทำงานเก็บลง fullsize
        //alert(fullsize) //กดแล้วจะเตือนขึ้น
        //ดึงเอา path ของภาพใหญ่มา
        const path = `img/Full/${fullsize}.jpg`
        //alert(path) ทดสอบสามารถดึงมาได้แล้ว
        fullImg.src = path //เรากำหนดตัวเลขpathไว้แล้ว เราก็ดึงรูปใหญ่มาได้เลย แสดงผลในดิฟคลาส modal
        //แสดง Modal
        modal.classList.add('open')
    })
})
//ซ่อน Modal
modal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open")
    }
})


