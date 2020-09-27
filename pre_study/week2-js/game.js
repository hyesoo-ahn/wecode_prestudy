

var imagePosition = 0;
var RSP = {
    '바위': '0',
    '가위': '-142px',
    '보': '-284px'
};
// 가위, 바위, 보가 한번에 있는 그림을 짤라서 각각 가위, 바위, 보만 보여지게 한다.


// Object.entries() --> 주어진 객체의 키/값을 각각의 2차원 배열로 바꿔준다.
// Object.entries()를 이용해서 컴퓨터가 받아들이는 좌표값을 가위, 바위, 보로 바꾼다.
// find: 배열에서 안에 있는 것을 찾아주는 메서드
function comSelect(imagePosition) {
    return Object.entries(RSP).find(function (v) {
        return v[1] === imagePosition;
        // 
    })[0];
}
// index값에서 find이용해서 가위, 바위, 보 중에 찾고자하는거 찾는 함수 !
// 컴퓨터가 셀렉한 값을 문자로 추출하는 함수

// console.log(Object.entries(RSP)); 
// var 찾기=Object.entries(RSP).find(function(v){
//     return v[0]=='가위';
// });
// console.log(찾기);


var interval = setInterval(function () {
    if (imagePosition === RSP.바위) {
        imagePosition = RSP.가위;
        // 바위-0, 가위--142, 보--284
    } else if (imagePosition === RSP.가위) {
        imagePosition = RSP.보;
    } else {
        imagePosition = RSP.바위;
    }
    document.querySelector('#computer').style.background =
        'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imagePosition + ' 0';
}, 100);
// querySelector: html의 엘리먼트를 가져와 html태그를 컨트롤 할 수 있게 한다.
// 1000 --> 약 1초


document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
        // addEventListener: 
        clearInterval(interval);
        // 인터벌 중지하는 함수
        setTimeout(function () {
            interval = setInterval(function () {
                if (imagePosition === RSP.바위) {
                    imagePosition = RSP.가위;
                    // 바위-0, 가위--142, 보--284
                } else if (imagePosition === RSP.가위) {
                    imagePosition = RSP.보;
                } else {
                    imagePosition = RSP.바위;
                }
                document.querySelector('#computer').style.background =
                    'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imagePosition + ' 0';
            }, 100);
        }, 1000);
        // 인터벌 다시 시작하는 함수

        var myselect = this.textContent;
        console.log(myselect, comSelect(imagePosition));
        if (myselect === "가위") {
            if (comSelect(imagePosition) === "가위") {
                alert("비겼습니다.");
            } else if (comSelect(imagePosition) === "바위") {
                alert("졌습니다. ㅠㅠ")
            } else {
                alert("이겼습니다!")
            }
        } else if (myselect === "바위") {
            if (comSelect(imagePosition) === "바위") {
                alert("비겼습니다.");
            } else if (comSelect(imagePosition) === "보") {
                alert("졌습니다. ㅠㅠ")
            } else {
                alert("이겼습니다!")
            }
        } else if (myselect === "보") {
            if (comSelect(imagePosition) === "보") {
                alert("비겼습니다.");
            } else if (comSelect(imagePosition) === "가위") {
                alert("졌습니다. ㅠㅠ")
            } else {
                alert("이겼습니다!")
            }
        }
    });

});

