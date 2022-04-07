import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoNewsApiHeaders={
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': '5d2302e56emshf4f792390094cb5p159e91jsn0cbb4b450acb'
  }

  const baseUrl='https://bing-news-search1.p.rapidapi.com';

  const createRequest=(url)=>({url,headers:cryptoNewsApiHeaders})

  export const cryptoNewsApi =createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});
export const {useGetCryptoNewsQuery}=cryptoNewsApi;