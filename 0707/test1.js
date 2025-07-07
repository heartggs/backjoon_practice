// N과 M (1) [15649번]
const fs = require("fs");
const [N, M] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const result = []; // 현재 수열 저장
const visited = Array(N + 1).fill(false); // 숫자 사용여부

function 백트래킹(depth) {
  // 종료 : 수열길이가 M이면 출력
  if (depth === M) {
    console.log(result.join(" "));
    return;
  }

  // 1부터 N까지 숫자 하나씩 시도
  for (let i = 1; i < N + 1; i++) {
    if (!visited[i]) {
      visited[i] = true; // 선택표시
      result.push(i); // 결과표시

      백트래킹(depth + 1);

      // 백트래킹: 돌아올 때 상태 원복
      result.pop();
      visited[i] = false;

      // 예시: N=4, M=2
      //
      // 1) depth=0
      //    i=1 -> visited[1]=true, result=[1]
      //       depth=1
      //       i=1 -> 이미 선택됨, skip
      //       i=2 -> visited[2]=true, result=[1,2] => 출력
      //       pop -> result=[1], visited[2]=false
      //       i=3 -> visited[3]=true, result=[1,3] => 출력
      //       pop -> result=[1], visited[3]=false
      //       i=4 -> visited[4]=true, result=[1,4] => 출력
      //       pop -> result=[1], visited[4]=false
      //    pop -> result=[], visited[1]=false
      //
      // 2) i=2 -> visited[2]=true, result=[2]
      //       depth=1
      //       i=1 -> visited[1]=true, result=[2,1] => 출력
      //       i=3 -> visited[3]=true, result=[2,3] => 출력
      //       i=4 -> visited[4]=true, result=[2,4] => 출력
      //    pop -> result=[], visited[2]=false
      //
      // 3) i=3 -> visited[3]=true, result=[3]
      //       depth=1
      //       i=1 -> visited[1]=true, result=[3,1] => 출력
      //       i=2 -> visited[2]=true, result=[3,2] => 출력
      //       i=4 -> visited[4]=true, result=[3,4] => 출력
      //    pop -> result=[], visited[3]=false
      //
      // 4) i=4 -> visited[4]=true, result=[4]
      //       depth=1
      //       i=1 -> visited[1]=true, result=[4,1] => 출력
      //       i=2 -> visited[2]=true, result=[4,2] => 출력
      //       i=3 -> visited[3]=true, result=[4,3] => 출력
      //    pop -> result=[], visited[4]=false
    }
  }
}

// depth=0(아직 아무것도 고르지 않은 상태에서 시작)
백트래킹(0);

/*
───────────────────────────────
백트래킹이란?

- 모든 경우를 재귀적으로 탐색(완전탐색)하면서,
- 조건에 맞지 않는 경로는 더 이상 진행하지 않고 즉시 되돌아가는(Backtrack) 방식.

이 문제는:
1. 수열을 하나씩 추가하며 (depth 증가)
2. 길이가 M이 되면 출력하고
3. 다시 상태를 되돌려서(pop, visited=false)
4. 다음 숫자를 시도.

이 과정을 통해 
"1~N 까지의 숫자 중에서 중복 없이 M개를 고르는 모든 순열"을 구함.

즉,
- 선택하고,
- 깊게 들어가서,
- 다했으면 되돌아와서
- 다시 다른 선택을 해보는 것이 백트래킹의 핵심.

───────────────────────────────
*/
