// 완주하지 못한 선수 출력하기
var participant = ["qqq", "bbb", "ddd"];
var completion = ["ddd", "qqq"];

function solution(participant, completion) {
    var answer = '';

    participant.sort();
    completion.sort();

   for(var i = 0; i < participant.length; i++){
       if(participant[i] != completion[i]){
           answer = participant[i];
           break;
       }
   }
    return answer;
}
