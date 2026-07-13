// 분리배출 정보를 저장하는 객체
const recycleData = {
    "페트병": {
        category: "플라스틱",
        method: [
            "내용물을 모두 비워 주세요.",
            "물로 깨끗하게 헹궈 주세요.",
            "라벨을 제거해 주세요.",
            "압착한 후 배출해 주세요."
        ]
    },

    "플라스틱 컵": {
        category: "플라스틱",
        method: [
            "내용물을 비워 주세요.",
            "물로 헹궈 주세요.",
            "일반 플라스틱으로 배출하세요."
        ]
    },

    "신문지": {
        category: "종이",
        method: [
            "물기에 젖지 않게 묶어서 배출하세요."
        ]
    },

    "샴푸통": {
        category: "플라스틱",
        method: [
            "내용물을 비운다.",
            "물로 헹군다.",
            "플라스틱으로 배출한다."
        ]
    },

    "요구르트병": {
        category: "플라스틱",
        method: [
            "깨끗이 씻은 후 플라스틱으로 배출한다."
        ]
    },

    "우유팩": {
        category: "종이",
        method: [
            "물로 헹군 후 말려서 전용 수거함에 배출한다."
        ]
    },

    "택배상자": {
        category: "종이",
        method: [
            "테이프를 제거한 뒤 접어서 배출한다."
        ]
    },

    "음료수 캔": {
        category: "캔",
        method: [
            "내용물을 비우고 헹군 후 배출한다."
        ]
    },

    "참치캔": {
        category: "캔",
        method: [
            "내용물을 제거하고 헹군 후 배출한다."
        ]
    },

    "소주병": {
        category: "유리",
        method: [
            "병뚜껑을 제거하고 배출한다."
        ]
    },

    "맥주병": {
        category: "유리",
        method: [
            "빈 병은 병류로 배출한다."
        ]
    },

    "비닐봉투": {
        category: "비닐",
        method: [
            "이물질을 제거한 후 배출한다."
        ]
    },

    "과자봉지": {
        category: "비닐",
        method: [
            "내용물을 비우고 깨끗하면 비닐로 배출한다."
        ]
    },

    "휴지": {
        category: "일반쓰레기",
        method: [
            "재활용이 불가능하므로 일반쓰레기로 버린다."
        ]
    },

    "영수증": {
        category: "일반쓰레기",
        method: [
            "감열지는 일반쓰레기로 배출한다."
        ]
    }
};

// =====================
// 환경 퀴즈 데이터
// =====================

const quizData = [

    {
        question: "페트병은 플라스틱으로 분리배출한다.",
        answer: true,
        explanation: "정답! 깨끗이 씻고 라벨을 제거한 후 플라스틱으로 배출합니다."
    },

    {
        question: "영수증은 종이류로 분리배출한다.",
        answer: false,
        explanation: "정답! 영수증은 감열지이므로 일반쓰레기입니다."
    },

    {
        question: "우유팩은 일반 종이와 함께 버린다.",
        answer: false,
        explanation: "정답! 우유팩은 전용 수거함에 배출해야 합니다."
    },

    {
        question: "내용물이 남은 캔은 바로 분리배출해도 된다.",
        answer: false,
        explanation: "정답! 내용물을 비우고 헹군 후 배출해야 합니다."
    }

];

const quizQuestion = document.getElementById("quizQuestion");
const quizResult = document.getElementById("quizResult");

const trueBtn = document.getElementById("trueBtn");
const falseBtn = document.getElementById("falseBtn");
const nextQuizBtn = document.getElementById("nextQuizBtn");
let currentQuiz = 0;
function showQuiz(){

    quizQuestion.textContent =
    quizData[currentQuiz].question;

    quizResult.textContent = "";

}

function checkAnswer(userAnswer){

    if(userAnswer === quizData[currentQuiz].answer){

        quizResult.innerHTML =
        "✅ " + quizData[currentQuiz].explanation;

    }

    else{

        quizResult.innerHTML =
        "❌ 틀렸습니다.<br>" +
        quizData[currentQuiz].explanation;

    }

}

trueBtn.addEventListener("click",function(){

    checkAnswer(true);

});

falseBtn.addEventListener("click",function(){

    checkAnswer(false);

});

nextQuizBtn.addEventListener("click",function(){

    currentQuiz++;

    if(currentQuiz >= quizData.length){

        currentQuiz = 0;

    }

    showQuiz();

});
showQuiz();

// =======================================
// HTML에서 사용할 요소 가져오기
// =======================================

// 검색창
const searchInput = document.getElementById("searchInput");

// 검색 버튼
const searchBtn = document.getElementById("searchBtn");

// 결과 출력 영역
const resultBox = document.getElementById("resultBox");

// ==========================
// 상세 정보를 출력하는 함수
// ==========================

function showItem(item){

    const info = recycleData[item];

    let html = `
        <h3>♻ ${item}</h3>

        <p><strong>분류 :</strong> ${info.category}</p>

        <ul>
    `;

    info.method.forEach(function(step){

        html += `<li>${step}</li>`;

    });

    html += "</ul>";

    resultBox.innerHTML = html;

}

// =======================================
// 검색 버튼을 눌렀을 때 실행
// =======================================

searchBtn.addEventListener("click", function () {

    // 입력한 글자를 가져오고 앞뒤 공백 제거
    const item = searchInput.value.trim();

    // 데이터에 존재하는지 확인
    // 입력값 가져오기
const keyword = searchInput.value.trim();

let html = "";

// 검색 결과가 있는지 확인하는 변수
let found = false;

// 모든 품목 검사
for (const item in recycleData) {

    // 입력한 글자가 품목 이름에 포함되어 있다면
    if (item.includes(keyword)) {

        found = true;

        html += `
        <div style="margin-bottom:20px;">
            <h3>${item}</h3>
            <p><strong>분류 :</strong> ${recycleData[item].category}</p>

            <ul>
        `;

        recycleData[item].method.forEach(function(step){

            html += `<li>${step}</li>`;

        });

        html += `
            </ul>
        </div>
        `;

    }

}

// 검색 결과가 있다면 출력
if(found){

    resultBox.innerHTML = html;

}

// 없다면
else{

    resultBox.innerHTML = `
    <h3>검색 결과가 없습니다.</h3>
    <p>다른 이름으로 검색해 보세요.</p>
    `;

}

});

// ================================
// 카테고리 버튼 기능
// ================================

// 모든 카테고리 버튼 가져오기
const categoryButtons = document.querySelectorAll(".category-btn");

// 버튼마다 클릭 이벤트 추가
categoryButtons.forEach(function(button){

    button.addEventListener("click", function(){

        // 버튼에 적혀 있는 글자 가져오기
        const category = button.textContent;

        let html = `<h3>${category}</h3><ul>`;

        // 모든 품목 검사
        for(const item in recycleData){

            if(recycleData[item].category === category){

                html += `
                <button class="item-btn"
                data-item="${item}">
                ${item}
                </button>
                `;

            }

        }

        html += "</ul>";

        resultBox.innerHTML = html;
        // 생성된 품목 버튼 가져오기
        const itemButtons =
        document.querySelectorAll(".item-btn");

        // 각각 클릭 이벤트 추가
        itemButtons.forEach(function(btn){

            btn.addEventListener("click",function(){

                const item =
                btn.dataset.item;

                showItem(item);

            });

        });

    });

});

// 엔터를 눌러도 검색
searchInput.addEventListener("keydown", function(event){

    if(event.key === "Enter"){

        searchBtn.click();

    }

});