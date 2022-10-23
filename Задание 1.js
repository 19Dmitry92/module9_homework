const parser = new DOMParser(); // Для парсинга
// XML, который мы будем парсить (не забыть кавычки)
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

// Парсинг XML
const xmlDOM = parser.parseFromString(xmlString, "text/xml"); 
// Получение всех DOM-нод
const listNode = xmlDOM.querySelector("list");              
const studentNode = listNode.querySelector("student");    //для первого по дереву (<student>...</student>)
const nameNode = listNode.querySelector("name");
const ageNode = listNode.querySelector("age");
const profNode = listNode.querySelector("prof");
const firstNode = listNode.querySelector("first");
const secondNode = listNode.querySelector("second");


const studentNode2 = listNode.lastElementChild;      //для второго по дереву (<student>...</student>)
const nameNode2 = studentNode2.querySelector("name");
const ageNode2 = studentNode2.querySelector("age");
const profNode2 = studentNode2.querySelector("prof");
const firstNode2 = nameNode2.querySelector("first");
const secondNode2 = nameNode2.querySelector("second");
// Получение данных из атрибутов, грубо говоря из знаков равенства
const langAttr = nameNode.getAttribute("lang");
const langAttr2 = nameNode2.getAttribute("lang");
//Прописываем через запятую объект включающий в себя данные обоих персон (<student>...</student>)
let prob = " ";
const result = {
 list: [{
  name: firstNode.textContent + prob + secondNode.textContent,
  age: Number(ageNode.textContent),
  prof: profNode.textContent,
  lang: langAttr,
}, 
        {
  name: firstNode2.textContent + prob + secondNode2.textContent,
  age: Number(ageNode2.textContent),
  prof: profNode2.textContent,
  lang: langAttr2,
}
       ]
};
console.log(result)
