/**
 * 判断是否为空
 */
export function validateNull(value) {
   if (typeof value === 'boolean') {
      return false;
   }

   if (typeof value === 'number') {
      return false;
   }

   if (value instanceof Array) {
      if (value.length === 0) return true;
   } else if (value instanceof Object) {
      if (JSON.stringify(value) === '{}') return true;
   } else if (value === 'null' ||
      value == null ||
      value === 'undefined' ||
      value === undefined ||
      value === '') {
      return true;
   }
   return false;
}

/**
 * [removeAllEmpty 去除所有空字符串]
 * @param  {[type]} value [字符串]
 * @return {[type]}       [返回新字符串]
 */
export function removeAllEmpty(value) {
   return value.replace(/\s/g, '');
}

/**
 * [isPhone 手机号校验]
 * @param  {[type]}  value [手机号码]
 * @return {Boolean}       [返回布尔值]
 */
export function isPhone(value) {
   value = String(value).trim();//去除首尾空格
   return value.length === 11 && /^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$/.test(value);
}

/**
 * [isTel 电话号码校验]
 * @param  {[type]}  value [电话]
 * @return {Boolean}       [返回布尔值]
 */
export function isTel(value) {
   value = value.toString().trim();
   return /(^[0-9]{3,4}\-[0-9]{7}$)|(^((13|14|15|16|17|18|19)[0-9]{1}\d{8})$)/.test(value);
}

/**
 * [isCarNo 车牌号校验]
 * @param  {[type]}  value [车牌号]
 * @return {Boolean}       [返回布尔值]
 */
export function isCarNo(value) {
   value = value.toUpperCase().trim();
   return value.length === 7 && /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/.test(value);
}

/**
 * [keywordFilter 只能输入汉字、字母、数字或下划线]
 * @param  {[String]} value [字符串]
 * @return {[type]}       [返回新的字符串]
 */
export function keywordFilter(value) {
   return /^[a-zA-Z0-9_\u4e00-\u9fa5]*$/.test(value);
}

/**
 * [isWebUrl 判断是否是链接地址]
 * @param  {[String]}  value [链接]
 * @return {Boolean}
 */
export function isWebUrl(value) {
   const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
   return urlregex.test(value);
}

/**
 * [isFloat 判断是否为浮点数]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
export function isFloat(value) {
   value = value.toString().trim();
   return /^(-?\d+)(\.\d+)?$/.test(value);
}

/**
 * [isFloat 判断是否为正浮点数]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
export function isPFloat(value) {
   value = value.toString().trim();
   return /^(\d+)(\.\d+)?$/.test(value);
}

/**
 * [isIntNum 只能正整数]
 * @param  {[String]} value [字符串]
 * @return {[type]}       [返回新的字符串]
 */
export function isIntNum(value) {
   return /^\+?[1-9][0-9]*$/.test(value);
}

/**
 * [isPositiveInteger 判断是否大于等于0的整数]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
export function isPositiveInteger(value) {
   value = value.toString().trim();
   return /^\d+$/.test(value);
}

/**
 * [isIe 判断浏览器是否是ie内核]
 * @return {Boolean} [description]
 */
export function isIe() {
   if (!!window.ActiveXObject || "ActiveXObject" in window) {
      return true;
   }
   return false;
}

/**
 * [isImage 判断是否是图片]
 * @param  {[type]}  name [图片地址]
 * @return {Boolean}      [description]
 */
export function isImage(name) {
   return /(jpe?g|png|gif|bmp)$/i.test(name);
}

/**
 * [isPsw 验证此站点密码的合法性-长度在6-18之间，只能包含字母、数字和下划线]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
export function isPsw(value) {
   return /^[a-zA-Z0-9_]{6,18}$/.test(value);
}

/**
 * [isUserName 用户名合法性判断-以字母开头，长度在4-32之间，只能包含字母、数字和下划线]
 * @param  {[type]}  value [description]
 * @return {Boolean}       [description]
 */
export function isUserName(value) {
   return /^[a-zA-Z][a-zA-Z0-9]{3,31}$/.test(value);
}

/**
 * 字符长度计算
 * @param char
 * @returns {number}
 */
export function getByteLength(char) {
   char = char.toString().trim();
   let char_len = 0;
   for (let i = 0, len = char.length; i < len; i++) {
      let code = char[i].charCodeAt();
      if (code >= 0 && code <= 128) {
         char_len += 1;
      } else {
         char_len += 2;
      }
   }
   return char_len;
}

/**
 * 只允许字母数字
 */
export function onlyNumberLetter(value) {
   return /^[A-Za-z0-9]+$/.test(value);
}

/**
 * [isNum 判断是否是数字]
 * @param  {[String]} value [字符串]
 * @return {Boolean} [返回布尔值]
 */
export function isNum(value) {
   value = String(value).trim();//去除首尾空格
   return /^[0-9]*$/.test(value);
}

/**
 * 身份证校验
 * 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
 * @param value
 * @returns {*|boolean}
 */
export function isCardNo(value) {
   return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
}


/**
 * [lngReg 经度判断](整数部分为0-180小数部分为0到6位)
 * @param  {[type]} lng [description]
 * @return {[type]}     [description]
 * @return {[type]}     [description]
 */
export function lngReg(lng) {
   lng = lng.toString().trim();
   return /^(\-|\+)?(((\d|[1-9]\d|1[0-7]\d|0{1,3})\.\d{0,6})|(\d|[1-9]\d|1[0-7]\d|0{1,3})|180\.0{0,6}|180)$/.test(lng);
}

/**
 * [latReg 纬度判断](整数部分为0-90小数部分为0到6位)
 * @param  {[type]} lat [description]
 * @return {[type]}     [description]
 */
export function latReg(lat) {
   lat = lat.toString().trim();
   return /^(\-|\+)?([0-8]?\d{1}\.\d{0,6}|90\.0{0,6}|[0-8]?\d{1}|90)$/.test(lat);
}

/**
 * 判断是否IPv4地址
 * @param value
 */
export function isIPv4(value) {
   return /^(25[0-5]|2[0-4]\d|[0-1]?\d?\d)(\.(25[0-5]|2[0-4]\d|[0-1]?\d?\d)){3}$/.test(value);
}

/**
 * 密码由数字、字母（区分大小写）组合，8-16位字符
 * @param value
 * @returns {*|boolean}
 */
export function isPassword(value) {
   return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(value);
}
