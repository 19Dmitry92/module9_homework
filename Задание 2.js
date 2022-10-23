// JSON, который мы будем парсить:
const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const list = JSON.parse(jsonString);  // получаем данные в константу list
console.log(list); 
