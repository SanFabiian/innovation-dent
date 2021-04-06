const fetch = require('node-fetch')
const fs = require('fs')
let postsObj = require('../routes/blog/_posts.json')
require('dotenv').config()

const API = process.env.GHOST_API

const writeFile = (obj)=> {
    const parseData = JSON.stringify(obj)
    fs.writeFileSync('./src/routes/blog/_posts.json', parseData)
    console.log('🧡 Datos Guardados')
}
const fetchData = async () => {
    const response = await fetch(API)
    const data = await response.json()
    const posts = await data.posts.map(post => {
        return {
            "title": post.title,
            "html": post.html,
            "slug": post.slug,
            "id": post.id,
            "desc": post.meta_description,
            "tag": post.tags,
            "image": post.feature_image,
            "createdAt": post.created_at,
        }
    })
    console.log(posts)
    if(postsObj.length > 15) {
        if(posts[0].title === postsObj[0].title) {
            postsObj.shift()
            postsObj.unshift(posts[0])
            writeFile(postsObj)
        }else {
            postsObj.unshift(posts[0])
            writeFile(postsObj)
        }
    }else {
        writeFile(posts)
    }
}
fetchData()