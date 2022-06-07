const price = ["2000", "1000", "3000", "5000", "4000"];

function getWonPrice(priceList, orderType) {
  let temp = [];
  for (let i = 0; i < priceList.length; i++) {
    temp.push(priceList[i]);
  }
}

/* 아래 요구사항으로 리팩터링
 * 1. 원화표기
 * 2. 1000원 초과
 * 3. 가격 순 정렬
 *
 */

const suffixWon = (price) => price + "원";
const isOverOneThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice(priceList) {
  const isOverList = priceList.filter(isOverOneThousand);
  const sortList = isOverList.sort(ascendingList);

  return sortList.map(suffixWon);
}

// 메서드 체이닝
function getWonPrice(priceList) {
  return priceList.filter(isOverOneThousand).sort(ascendingList).map(suffixWon);
}
