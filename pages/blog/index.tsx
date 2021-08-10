import { useEffect } from 'react';
import { NextPage } from 'next';
import Meta from '../../components/meta';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Blog from '../../components/blog';
import { IPropsPageBlog, IPost } from '../../types';

const dummyBody = [
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur voluptatibus nulla
    aliquid odit, deserunt temporibus voluptates, perspiciatis autem, cum vitae nisi possimus labore
    explicabo itaque! Exercitationem obcaecati consectetur qui.`,
  `Reprehenderit officiis perferendis magni eos vel at ipsum ad distinctio, inventore amet quaerat
    non illo? Et ipsum qui, libero deleniti ut, reiciendis beatae ex quidem dolores eum facilis
    itaque nulla.`,
  `Excepturi tempore enim consequatur laudantium iusto quaerat fugit explicabo expedita. Architecto
    iste eos repellendus exercitationem, doloremque obcaecati quos molestiae reprehenderit, amet,
    non perferendis. Eum eveniet iure dolorum qui ipsa adipisci!`,
];

const getDummy: (id: string) => Promise<IPost> = async (id) => {
  return {
    id,
    title: 'Hello World! This is June',
    time: new Date().toISOString(),
    image: `https://unsplash.it/600/300?random=${Math.random()}`,
    imageWidth: '600',
    imageHeight: '300',
    body: dummyBody,
  };
};

const page: NextPage<IPropsPageBlog> = (props) => {
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
  useEffect(() => {
    const header = document.querySelector('header');
    header?.classList.add('header--opaque');
    header?.classList.add('header--sticky');
  }, []);

  return (
    <>
      <Meta
        title="Blog | Landing Page Demo"
        desc="Blog of Landing Page Demo"
        url={`${publicUrl}/blog`}
      />
      <Header pathname="/blog" />
      <main role="main">
        <Blog posts={props.posts} />
      </main>
      <Footer />
    </>
  );
};

page.getInitialProps = async (_props) => {
  // This mimics getting posts from DB
  const posts: Array<IPost> = [];
  for (let i = 0; i < 10; i++) posts[i] = await getDummy(i.toString());
  return { posts };
};

export default page;
