
exports.min = function min (array) {
    if (array == undefined || array.length == 0) return 0;
    let resMin = array[0];
    for (let i = 1; i < array.length; i++) {
        if (resMin > array[i]) resMin = array[i];
    }
    return resMin;
}

exports.max = function max (array) {
    if (array == undefined || array.length == 0) return 0;
  let resMax = array[0];
  for (let i = 1; i < array.length; i++) {
      if (resMax < array[i]) resMax = array[i];
  }
  return resMax;
}

exports.avg = function avg (array) {
    if (array == undefined || array.length == 0) return 0;
    return array.reduce((a, b) => (a + b)) / array.length;
}


