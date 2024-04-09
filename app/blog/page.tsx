import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-3xl mb-8 tracking-tighter">Blog</h1>
      <BlogPosts />
      <p className='font-semibold text-2xl mb-8 tracking-tighter'> Coming Soon! </p>
    </section>
  )
}
