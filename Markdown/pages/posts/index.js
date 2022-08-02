import Head from "next/head"
import { Fragment } from "react"
import AllPosts from "../../components/posts/all-posts"

const DUMMY_POSTS = [
  {
    slug: "getting-started-with-nextjs",
    title: "Dragon Quest: The Adventure of Dai",
    image: "dai.jpg",
    excerpt: "Nextjs",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Pop",
    image: "pop.jpg",
    excerpt: "Nextjs",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Avan",
    image: "avan.jpg",
    excerpt: "Nextjs",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Dragon Dai",
    image: "dai.jpg",
    excerpt: "Nextjs",
    date: "2022-02-10",
  },
]

function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={DUMMY_POSTS} />
    </Fragment>
  )
}

export default AllPostsPage
