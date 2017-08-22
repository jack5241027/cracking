function helper(result, cur, sum, t) {
  const steps = [1, 3 ,5]
  for (let i = 0; i < 3; i++) {
    cur.push(steps[i])
    sum += steps[i]
    //too many steps
    if (sum > t) {
      cur = cur.slice(0, -1);
      return;
    }

    //found one match
    if (sum === t) {
      result.push(cur)
      cur = cur.slice(0, -1);
      return;
    }

    //haven't reached yet 判斷條件 ~~ 繼續執行的條件
    helper(result, cur, sum, t)
    cur = cur.slice(0, -1);
    sum -= steps[i]
  }
}

function go(N) {
  if (!N || N <= 0) return [];
  const result = []
  helper(result, [], 0, N)
  return reuslt;
}

// dfs(深度優先搜尋)(所有可能性)recursive - 先寫 helper func

/* backTracking

N = 5;
[1, 3, 5]

(1) => (1, 1) => (1, 1, 1) => (1, 1, 1, 1) => (1, 1, 1, 1, 1)

(1) => (1, 1) => (1, 1, 1) => (1, 1, 1, 3)

(1) => (1, 1) => (1, 1, 3)

(1) => (1, 3) => (1, 3, 1)

(1) => (1, 5)

(3) => (3, 1) => (3, 1, 1)

(3) => (3, 3)

(5)


          1
   1      3      5
 1 3 5  1 3 5  1 3 5

時間複雜度: 3^n
*/