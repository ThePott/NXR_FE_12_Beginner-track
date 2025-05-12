// 안내
// <--작성부--> : 옆의 모양과 동일한 화살괄호를 모두 지우고 작성하시면 됩니다

//아래의 주석들을 참고하고 코드를 작성해볼까요?
// <--여기를 채우세요--> // 플레이어 1의 숫자값을 담을 변수를 만드세요
// <--여기를 채우세요--> // 플레이어 2의 숫자값을 담을 변수를 만드세요
const player1Number = Math.floor(Math.random() * 100)
const player2Number = Math.floor(Math.random() * 100)

console.log("🎮 숫자 대결 게임! 🎮"); //console.log를 통해 게임제목을 출력합니다.

//완성된 모습을 확인하고 console.log안에 문자열로 이루어진 "플레이어1 : " 와 플레이어 1의 변수값을 출력합니다.
console.log(`플레이어 1: ${player1Number}점`); 
//완성된 모습을 확인하고 console.log안에 문자열로 이루어진 "플레이어2 : " 와 플레이어 2의 변수값을 출력합니다.
console.log(`플레이어 2: ${player2Number}점`);


if (player1Number > player2Number) {   //<--괄호의 문장을 코드로 수정하세요.
  console.log("🏆 플레이어 1이 승리했습니다! 🎉");
} else if (player1Number < player2Number) {   //<--괄호의 문장을 코드로 수정하세요.
  console.log("🏆 플레이어 2가 승리했습니다! 🎉");
} else {
  console.log("🤝 무승부! 두 플레이어가 같은 점수입니다.");
}