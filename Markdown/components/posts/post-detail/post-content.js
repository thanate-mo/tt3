import PostHeader from './post-header';
import classes from './post-content.module.css';
import ReactMarkdown from 'react-markdown';

const DUMMY_POST = {
    slug: "getting-started-with-nextjs",
    title: "Dragon Quest: The Adventure of Dai",
    image: "dai.jpg",
    excerpt: "Nextjs",
    date: "2022-02-10",
    content:'# This is a first post'
  }

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`

  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent;
