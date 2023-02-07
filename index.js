let sortName = [];
let sortAverage = [];
function getSort() {
  for (let i = 0; i < 5; i++) {
    let student = prompt("نام دانشجو");
    let Math = +prompt("نمره ریاضی");
    let farsi = +prompt("نمره فارسی");
    let obj = {
      fullName: student,
      Math: Math,
      farsi: farsi,
      Average: (farsi + Math) / 2,
    };
    sortName.push(obj);
    sortAverage.push(obj);
  }

  sortName.sort((r1, r2) => (r1.fullName > r2.fullName ? 1 : r1.fullName < r2.fullName ? -1 : 0));
  sortAverage.sort((r1, r2) => (r1.Average < r2.Average ? 1 : r1.Average > r2.Average ? -1 : 0));
  console.log(sortName);
  console.log(sortAverage);
}
getSort();
function writeResult() {
  //sortName
  for (let i = 0; i < sortName.length; i++) {
    document.getElementById("name").innerHTML += `<div> ${i + 1}  :  ${sortName[i].fullName} </div>`;
  }
  //sortAverage
  for (let i = 0; i < sortAverage.length; i++) {
    document.getElementById("average").innerHTML += `<div> ${i + 1}  :  ${sortAverage[i].fullName}  =  ${sortAverage[i].Average} </div>`;
  }
}
writeResult();
