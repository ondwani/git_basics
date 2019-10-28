function remove (str) {
    let str_arr = str.split('');
    return  str_arr.filter ((e,i) => !((i===0 || i=== str_arr.length- 1))).join('');
    }
