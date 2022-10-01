const log = (str) => { document.getElementById("log").innerHTML += str + "\n"; }
		

function vcmp(ver1, ver2) {
			
  let start1 = ver1.search(/\d/);
  let start2 = ver2.search(/\d/);
			
  if(start1 == -1) return false;
  if(start2 == -1) return true;
			
  let num1 = ver1.substring(start1);
  num1 = num1.substring(0, num1.search(/[^\d\.]/) - 1);
  let num2 = ver2.substring(start2);
	num2 = num2.substring(0, num2.search(/[^\d\.]/) - 1);
			
  let i1 = num1.substring(0, num1.search(".") + 1);
  let i2 = num2.substring(0, num2.search(".") + 1);
			
  if(parseInt(i1) > parseInt(i2)) return false;
  if(parseInt(i1) < parseInt(i2)) return true;
			
  num1 = num1.substring(num1.search(".") + 2);
  num2 = num2.substring(num2.search(".") + 2);

  return parseInt(num1) < parseInt(num2);

}


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
