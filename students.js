 const fs = require('fs')
 const addDate = (name, comment, degree, id) => {
         const data = loadData();

         //////////using find
         const duplicatedid = data.find((e) => {
             return (e.id === id)
                 //undefined
                 //1===1 true//{ "name": "asmaa", "comment": "hello asmaa", "degree": ["[30,40]"], "id": 1 }
                 //1===2 false not happen 
         });

         if (!duplicatedid) {
             data.push({
                 name,
                 comment,
                 degree,
                 id,
                 totaldegree: totaldeg(degree)
             })
         } else {
             console.log("id repeated")
         }
         console.log(data)



         saveDate(data)
     }
     ///// sum of degree
 const totaldeg = (degree) => {
         let sum = 0
         degree.forEach(d => {
             console.log(d)
             sum += d
         });
         return sum
     }
     ///////////////////delete
 const removeData = (id) => {
         const data = loadData();

         const delete_id = data.filter((e) => {
             return e.id !== id
                 //1!==2t//{"name":"asmaa","comment":"hello asmaa","degree":["30,40"],"id":2}
                 //2!==2f

         });

         console.log(data)
         saveDate(data)
         if (data.length !== delete_id.length) {
             //[1]===[1,9]f

             saveDate(delete_id)
             console.log("removed")
             console.log(delete_id)
         } else {
             console.log("not found ")

         }


     }
     /////////////////////////////read
 const readdata = (name, comment, degree, id) => {
     const data = loadData();
     const readbyid = data.find((e) => {
             return e.id === id
         })
         //console.log(readbyid)
         //console.log(data);
     if (readbyid) {

         // console.log(typeof readbyid)
         // console.log(readbyid)
         console.log(readbyid.name, readbyid.degree)

     } else {
         console.log("not found")
     }

 }
 const listdata = () => {
         const data = loadData();
         data.forEach((e) => {
             console.log(e.name);

         })

     }
     ////////////////////////////////////
 const loadData = () => {
     try {
         const datat = fs.readFileSync("student.json").toString()

         return JSON.parse(datat)
     } catch (e) {
         return []
     }
 }
 const saveDate = (data) => {
     //const rdata = JSON.stringify(data);
     fs.writeFileSync("student.json", JSON.stringify(data))
 }


 module.exports = {
         addDate,
         removeData,
         readdata,
         listdata
     }
     /////////////using filter
     //  const idstudent = data.filter((e) => {
     //      return (e.id === id)
     //          //[]
     //          //1===1 true//{ "name": "asmaa", "comment": "hello asmaa", "degree": ["[30,40]"], "id": 1 }
     //          //1===2 false not happen 
     //  })

 //  if (idstudent.length === 0) {
 //      data.push({
 //          name,
 //          comment,
 //          degree,
 //          id
 //      })
 //      saveDate(data)
 //  }