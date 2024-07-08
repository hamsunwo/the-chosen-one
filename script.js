// 초기 친구 리스트
var friends = [];

// DOM 요소들 가져오기
var friendsList = document.getElementById('friendsList');
var friendInput = document.getElementById('friendInput');
var addButton = document.getElementById('addButton');
var pickButton = document.getElementById('pickButton');
var pickCountInput = document.getElementById('pickCount');
var resultText = document.getElementById('result');

// 추가 버튼 클릭 시 이벤트 처리
addButton.addEventListener('click', function() {
    var friendName = friendInput.value.trim();
    if (friendName !== '') {
        friends.push(friendName);
        renderFriends();
        friendInput.value = ''; // 입력 필드 초기화
        pickButton.disabled = false; // 뽑기 버튼 활성화
    }
});

// 뽑기 버튼 클릭 시 이벤트 처리
pickButton.addEventListener('click', function() {
    var count = parseInt(pickCountInput.value);
    if (friends.length > 0 && count > 0) {
        var pickedIndexes = [];
        var pickedFriends = [];

        // 중복되지 않는 랜덤 인덱스 선택
        while (pickedIndexes.length < count && pickedIndexes.length < friends.length) {
            var randomIndex = Math.floor(Math.random() * friends.length);
            if (!pickedIndexes.includes(randomIndex)) {
                pickedIndexes.push(randomIndex);
                pickedFriends.push(friends[randomIndex]);
            }
        }

        resultText.textContent = '벌칙을 받을 인원: ' + pickedFriends.join(', ') + '님에게 벌칙을 내려주세요!';
    } else {
        resultText.textContent = '친구 이름을 추가하고 벌칙 인원 수를 입력해주세요!';
    }
});

// 친구 리스트 화면에 렌더링하는 함수
function renderFriends() {
    friendsList.innerHTML = ''; // 리스트 초기화

    friends.forEach(function(friend) {
        var friendElement = document.createElement('div');
        friendElement.textContent = friend;
        friendsList.appendChild(friendElement);
    });
}
