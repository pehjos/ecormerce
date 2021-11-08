// import {client,q} from '../db'



// export const getAllVideos=client
// .query(q.Paginate(q.Match(q.Ref('indexes/video'))))
// .then(response=>{
// const videoReff=response.data;
// const getAllVideosData=videoReff.map(video=>{
// return q.Get(video)
// })
// return client.query(getAllVideosData).then(data=>data)

// }).catch(error=>console.error("error",error.message))





//  export const fetchPosts5=client
// .query(q.Paginate(q.Match(q.Ref('indexes/video'))))
// .then(response=>{
// const videoReff=response.data;
// const getAllVideosData=videoReff.map(video=>{
// return q.Get(video)
// })
//  client.query(getAllVideosData).then(data=>data)

// }).catch(error=>console.error("error",error.message))

// export const getPosts = async ({ pageParam = 1}) => {
//    let allBlogs = await client.query( q.Map( q.Paginate(q.Documents(q.Collection("db"))),
//     q.Lambda("X", q.Get(q.Var("X"))) ) ) 
//     const results=allBlogs.data
//     return { results, nextPage: pageParam+1, totalPages: 100 };
//     // return allBlogs.data 
  
//   }
// // export const fetchPosts5 = async ({ pageParam = 1 }) => {
// //   const response = await fetch(
// //       `https://hookengine.herokuapp.com/posts?page=${pageParam}&limit=20`
// //   );
// //   const results = await response.json();
// //       return { results, nextPage: pageParam + 1, totalPages: 100 };
// //   }; 


// export const createVideo =videoName=>client.query(q.Create(
//   q.Collection('db') ,{
//       data:{videoName}
//   } 
//     )).then(ret=>ret)
//     .catch(error=>console.error("error",error.message))


//     export const deleteVideos= videoId=>client.query(q.Delete(
// q.Ref(q.Collection('db'),videoId)))
// .then(ret=>ret)
// .catch(error=>console.error("error",error.message))



  