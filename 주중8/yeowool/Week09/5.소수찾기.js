// [PGS] 소수 찾기 / leve1
// 난이도 :  level 1
// 풀이시간 : 이해실패


/*
문제
문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.
입출력 예
n	result
10	4
5	3
입출력 예 설명
입출력 예 #1
1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

입출력 예 #2
1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
*/

/*
<의사코드>
전에 백준에서 공부했던 에라토스테네스의 체를 사용하면 답을 구할 수 있지 않을까 생각했는데
기억도 잘 안나고 그래서 다시 알아보았다

에라토스테네스의 체 알고리즘
1. 2부터 소수를 구하고자 하는 구간의 모든 수를 나열한다. 
   그림에서 회색 사각형으로 두른 수들이 여기에 해당한다.
2. 2는 소수이므로 오른쪽에 2를 쓴다. (빨간색)
3. 자기 자신을 제외한 2의 배수를 모두 지운다.
4. 남아있는 수 가운데 3은 소수이므로 오른쪽에 3을 쓴다. (초록색)
5. 자기 자신을 제외한 3의 배수를 모두 지운다.
6. 남아있는 수 가운데 5는 소수이므로 오른쪽에 5를 쓴다. (파란색)
7. 자기 자신을 제외한 5의 배수를 모두 지운다.
8. 남아있는 수 가운데 7은 소수이므로 오른쪽에 7을 쓴다. (노란색)
9. 자기 자신을 제외한 7의 배수를 모두 지운다.
10. 위의 과정을 반복하면 구하는 구간의 모든 소수가 남는다.

2357 배열을 만들어서 돌리면 어떨까
*/


function solution(n) {
    const arr = [...Array(n+1).keys()].slice(2); // 모든 구간의 수 나열
      
    for(let i = 1; i<arr.length; i++) {
        arr[i] % 2 === 0 && arr[i] % 3 === 0 && arr[i] % 5 === 0 && arr[i] % 7 === 0 ?
        arr.splice(i, 1) :
        null
    }
}

function solution(n) {
    const arr = [...Array(n+1).keys()].slice(2); // 모든 구간의 수 나열
    let setArr = []
    let newArr = [2,3,5,7]
    for(let i = 1; i<arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            setArr.push(arr[i])
            }
        }
    
   newArr[3] <= n ? setArr.push(...newArr) : null
    
}


/*
실패

*/

function solution(n) {
    let answer = 0;
    const arr = new Array(n+1).fill(true);
      
    for(let i = 2; i <= n; i++){
        // 이미 소수가 아닌 인덱스는 건너뛴다.
        if(arr[i] === false){
            continue; 
        }
        // 배수는 소수가 아니라 0으로 설정
        // 소수가 닐 경우 false로 값을 변경한다.
        // 이부분이 잘 이해가 안감
        for(let k = i * 2; k <= n; k += i){
            arr[k] = false;
        }
    }
    // 소수의 갯수를 구한다.
    for(let i = 2; i <= n; i++){
        if(arr[i] === true){
            answer++;
        }
    }
    return answer;
}


/*
테스트 1 〉	통과 (0.15ms, 29.8MB)
테스트 2 〉	통과 (0.07ms, 30.1MB)
테스트 3 〉	통과 (0.15ms, 30.1MB)
테스트 4 〉	통과 (0.12ms, 30MB)
테스트 5 〉	통과 (0.09ms, 30MB)
테스트 6 〉	통과 (0.08ms, 29.9MB)
테스트 7 〉	통과 (0.10ms, 30.1MB)
테스트 8 〉	통과 (0.10ms, 30.1MB)
테스트 9 〉	통과 (0.08ms, 29.9MB)
테스트 10 〉	통과 (0.11ms, 29.9MB)
테스트 11 〉	통과 (0.10ms, 30MB)
테스트 12 〉	통과 (0.10ms, 29.9MB)
테스트 13 〉	통과 (0.09ms, 29.9MB)
테스트 14 〉	통과 (0.09ms, 30MB)
테스트 15 〉	통과 (0.08ms, 30MB)
테스트 16 〉	통과 (0.09ms, 29.7MB)
*/