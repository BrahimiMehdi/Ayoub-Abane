import React from 'react'
import { getPosts,getPostDetails} from '../../services'
import { Post } from '../../components'
const postDetails = ({postDetailsData}) => {
    return (
        <main className="min-h-screen bg-main-dark max-w-screen grid md:grid-cols-8 sm:grid-cols-2 grid-cols-1 grid-rows-2 lg:grid-cols-12 sm:grid-rows-1">
            <div className="max-w-full h-full grid place-items-center md:col-span-2 sm:col-span-1 order-2 sm:order-1 col-span-1 lg:col-span-4">
                <img className="object-cover max-w-full h-full" src={postDetailsData.backgroundImg.url} alt="" />
            </div>
            <Post postData={postDetailsData} />
        </main>
    )
}

export default postDetails
export async function getStaticProps({params}) {
    const postDetailsData = await getPostDetails(params.slug)
    return {
      props: { 
          postDetailsData
       },
    };
}
export async function getStaticPaths() {
    const postsDet = await getPosts();
    return {
      paths: postsDet.map(({slug}) => ({ params: { slug } })),
      fallback: false,
    };
  }