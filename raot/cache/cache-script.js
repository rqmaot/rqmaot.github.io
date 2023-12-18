const log = (str) => { document.getElementById("log").innerHTML += str + "\n"; }
		
const filter = (arr, cond) => {
  let filtered = [];
  for(const item of arr) if(cond(item)) filtered.push(item);
  return filtered
}

const fold = (arr, base, f) => {
  let folded = base;
  for(const item of arr) folded = f(folded, item);
  return folded
}

const is_num_or_dot = char => 
	char === '.' || 
    char.charCodeAt(0) >= '0'.charCodeAt(0) && 
    char.charCodeAt(0) <= '9'.charCodeAt(0);

const get_ver = ver_str => fold(
  filter(ver_str, is_num_or_dot), 
  "", 
  (x, y) => x + y
)

const ver_arr = ver => {
  let arr = [];
  while(ver.length > 0) {
    let end = ver.indexOf(".");
    if(end == 0) {
      ver = ver.substring(1);
      continue;
    }
    if(end == -1) {
      arr.push(parseInt(ver));
      return arr;
    }
    arr.push(parseInt(ver.substring(0, end)));
    ver = ver.substring(end + 1);
  }
  return arr;
}

const get_ver_arr = ver_str => ver_arr(get_ver(ver_str));

const arr_cmp = (arr1, arr2) => {
  if(!arr1[0] && !arr2[0]) return 0;
  if(!arr1[0]) return -1;
  if(!arr2[0]) return 1;
  let diff = arr1[0] - arr2[0];
  if(diff < 0) return -1;
  if(diff > 0) return 1;
  return arr_cmp(arr1.subarray(1), arr2.subarray(1));
}

const ver_str_cmp = (v1, v2) => {
  let v_1 = get_ver_arr(v1);
  let v_2 = get_ver_arr(v2);
  return arr_cmp(v_1, v_2);
}

/*
function vcmp(ver1, ver2) {
			
  let start1 = ver1.search(/\d/);
  let start2 = ver2.search(/\d/);
			
  if(start1 == -1) return false;
  if(start2 == -1) return true;
			
  let num1 = ver1.substring(start1);
  let end1 = num1.search(/[^\d\.]/);
  if(end1 != -1) num1 = num1.substring(0, end1);
  let num2 = ver2.substring(start2);
  let end2 = num2.search(/[^\d\.]/);
  if(end2 != -1) num2 = num2.substring(0, end2);
			
  let i1 = num1.substring(0, num1.search(".") + 1);
  let i2 = num2.substring(0, num2.search(".") + 1);
			
  if(parseInt(i1) > parseInt(i2)) return false;
  if(parseInt(i1) < parseInt(i2)) return true;
			
  num1 = num1.substring(num1.search(".") + 2);
  num2 = num2.substring(num2.search(".") + 2);

  return parseInt(num1) < parseInt(num2);

}
*/

const vcmp = (v1, v2) => ver_str_cmp(v1, v2) < 0;

let platforms = [/win|raotlaunch/i, /lin/i, /mac|app/i, /dev|testinglaunch/i];
let drops = document.getElementsByClassName("dropdown");

for(let i = 0; i < drops.length; i++) {
  let links = [];
  for(let v = 0; v < vers.length; v++)
    if(vers[v][0].search(platforms[i]) != -1)
      links.push(vers[v]);
  let sorting = true;
  while(sorting) {
    sorting = false;
    for(let j = 0; j + 1 < links.length; j++)
    if(vcmp(links[j][0], links[j+1][0])) {
      sorting = true;
       let temp = links[j];
       links[j] = links[j+1];
        links[j+1] = temp;
      }
  }
  for(let j = 0; j < links.length; j++)
    drops[i].children[1].innerHTML += "<div class='link'><a href='" 
                                    + links[j][1] + "' download"
                                    + ">" + links[j][0] + "</a></div>";
}
