// fetch data from this API: https://jsonplaceholder.typicode.com/users parsed it that each object have only four props like id, name, username and email and write this array into users.json
const fs = require("fs/promises");
// const foo = async () => {
//     try {
//         const APIKEY = "https://jsonplaceholder.typicode.com/users"
//         const rawData = await fetch(APIKEY)
//         const data = await rawData.json()
//         const resultArr = []
//         data.forEach(item => {
//             const user = {
//                 id:item.id,
//                 name:item.name,
//                 username:item.username,
//                 phone:item.phone

//             }
//             resultArr.push(user)
//         })
//         await fs.writeFile("users.json",JSON.stringify(resultArr))
//         console.log("user added")

//     } catch (error) {
//         console.log(error)
//     }

// }
// foo()

// write a random text in file then read this data and count how many words are there

// const foo = async () => {
//     try {
//         const num = (await fs.readFile("randomTxt.txt","utf-8")).split(" ").length
//         console.log(num)
//     } catch (error) {
//         console.log(error)
//     }
// }
// foo()

// read users json data then filter them older than 18 years and rewrite this data

// const foo = async () => {
//   try {
//     const rawData = await fs.readFile("data.json", "utf-8")
//     const data = JSON.parse(rawData)
//     const resultData = data.filter(item => item.age > 18)
//     await fs.writeFile(
//       "data.json",
//       JSON.stringify(resultData)
//     )
//     console.log("users updated");
//   } catch (error) {
//     console.log(error);
//   }
// };
// foo();
