const fetch = require('node-fetch')
const fs = require('fs')
let postsObj = require('../routes/blog/_posts.json')
require('dotenv').config()

const API = process.env.GHOST_API
const siteTitle = process.env.SITE_TITLE
const siteUrl = process.env.SITE_URL
const siteCover = process.env.SITE_COVER
const siteDesc = process.env.SITE_DESC
const siteFavicon = process.env.SITE_FAVICON

const writeFile = async (obj)=> {
    const parseData = JSON.stringify(obj)
    const rss = await createRss(obj)
    const sitemap = await createSitemap(obj)
    fs.writeFileSync('./src/routes/blog/_posts.json', parseData)
    console.log('🧡 Datos Guardados')
    fs.writeFileSync('./static/rss.xml', rss)
    console.log('Update rss.xml')
    fs.writeFileSync('./static/sitemap.xml', sitemap)
    console.log('Update sitemap.xml')
}

const getDate = date => {
    if(date) {
        return new Date(date).toUTCString()
    }else {
        return new Date().toUTCString()
    }
}

const createRss = async (data) => {
    const parseItems = await data.map(item => {
        const pubDate = getDate(item.createdAt)
        return `
            <item>
                <title><![CDATA[${item.title}]]></title>
                <link>${siteUrl}/blog/${item.slug}</link>
                <description><![CDATA[${item.desc}]]></description>
                <category><![CDATA[${item.tag}]]></category>
                <dc:creator><![CDATA[${siteTitle}]]></dc:creator>
                <upDate>
                    ${pubDate}
                </upDate>
                <media:content url="${siteCover}" medium="image" />
                <content:encoded>
                    <![CDATA[${item.html}]]>
                </content:encoded>
            </item>
        `
    }).join('')
    const template = `
    <?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
        <channel>
            <title><![CDATA[${siteTitle}]]></title>
            <description><[!CDATA[${siteDesc}]]></description>
            <image>
                <url>${siteFavicon}</url>
                <title>
                    <![CDATA[${siteTitle}]]>
                </title>
                <link>${siteUrl}]]</link>
            </image>
            <generator>
                Innovation Dent
            </generator>
            <lastBuildDate>
                ${getDate()}
            </lastBuildDate
            <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
            <ttl>60</ttl>
            <link><![CDATA[${siteUrl}]]></link>
            <description>Free web building tutorials</description>
            ${parseItems}
        </channel>
    </rss>
    `
    return template
}

const createSitemap = async (data) => {
    const parseItems = await data.map(item => {
        return `
            <url>
                <loc>${siteUrl}/blog/${item.slug}</loc>
                <lastmod>${getDate(item.createdAt)}</lastmod>
                <priority>0.80</priority>
            </url>
        `
    }).join('')
    const template = `
        <?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${siteUrl}</loc>
                <lastmod>${getDate()}</lastmod>
                <priority>1.0</priority>
            </url>
            ${parseItems}
        </urlset>
    `
    return template
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