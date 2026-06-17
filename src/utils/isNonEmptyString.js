/**
 * 값이 공백을 제외하고 내용이 있는 문자열인지 확인한다.
 * @param {unknown} value - 검사할 값
 * @returns {boolean} 비어 있지 않은 문자열이면 true, 아니면 false
 */
export function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}
