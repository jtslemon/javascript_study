let title = document.title;
let url = document.URL;
document.write(`<p class="p01">현재 문서의 제목은 ${title}이며, 문서가 위치한 주소는 ${url}입니다.</p>`);

let num = 0;
function bgMode(){
    if(num == 0){
        num = 1;
        document.bgColor='#000'
        document.fgColor='#fff'
    }
    else{
        num = 0;
        document.bgColor='#fff'
        document.fgColor='#000'
    }
}

const d_btn = document.querySelector('#bgmd_btn');
d_btn.addEventListener('click', function(){
    bgMode();
})