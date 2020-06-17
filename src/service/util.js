/**
 * [deepClone 数组/对象深度拷贝]
 * @param  {[type]} source [数组/对象]
 * @return {[type]}        [description]
 */
export function deepClone(source) {
   if (!source && typeof source !== 'object') {
      throw new Error('error arguments', 'shallowClone');
   }
   const targetObj = source.constructor === Array ? [] : {};
   for (const keys in source) {
      if (source.hasOwnProperty(keys)) {
         if (source[keys] && typeof source[keys] === 'object') {
            targetObj[keys] = source[keys].constructor === Array ? [] : {};
            targetObj[keys] = deepClone(source[keys]);
         } else {
            targetObj[keys] = source[keys];
         }
      }
   }
   return targetObj;
};
