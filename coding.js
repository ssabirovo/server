// function strDist(str, sub) {
//   let strLen = str.length;
//   let subLen = sub.length;
//   if (strLen === 0) return 0;

//   if (str.substring(strLen - subLen) === sub) {
//     if (str.substring(0, subLen) === sub) return strLen;
//     return strDist(str.substring(1), sub);
//   } else {
//     return strDist(str.substring(0, strLen - 1), sub);
//   }
// }

/**
 * strDist('abccatcowcatcatxyz', 'cat') → 12
 *
 * str = "abccatcowcatcatxyz", sub = "cat" -> strLen = 18, subLen = 3 => strDist("abccatcowcatcatxy", "cat")
 * str = "abccatcowcatcatxy", sub = "cat" -> strLen = 17, subLen = 3 => strDist("abccatcowcatcatx", "cat")
 * str = "abccatcowcatcatx", sub = "cat" -> strLen = 16, subLen = 3 => strDist("abccatcowcatcat", "cat")
 * str = "abccatcowcatcat", sub = "cat" -> strLen = 15, subLen = 3 => strDist("bccatcowcatcat", "cat")
 * str = "bccatcowcatcat", sub = "cat" -> strLen = 14, subLen = 3 => strDist("ccatcowcatcat", "cat")
 * str = "ccatcowcatcat", sub = "cat" -> strLen = 13, subLen = 3 => strDist("catcowcatcat", "cat")
 * str = "catcowcatcat", sub = "cat" -> strLen = 12, subLen = 3 => strDist("catcowcatcat", "cat")
 */
