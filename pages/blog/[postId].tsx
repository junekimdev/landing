import { useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import Meta from '../../components/meta';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Post from '../../components/post';
import { IPost } from '../../types';

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

function Page(props: { post: IPost }) {
  const { post } = props;
  const router = useRouter();
  const { postId, title } = router.query;
  const publicUrl = process.env.PUBLIC_URL || 'localhost:3000';
  useEffect(() => {
    const header = document.querySelector('header');
    header?.classList.add('header--opaque');
    header?.classList.add('header--sticky');
  }, []);

  return (
    <>
      <Meta
        title={`${title} | Landing Page Demo`}
        desc={`${title} | Landing Page Demo`}
        url={`${publicUrl}/blog/${postId}?title=${title}`}
        image={post.image}
        imageWidth={post.imageWidth}
        imageHeight={post.imageHeight}
      />
      <Header pathname={router.pathname} />
      <main role="main">
        <Post post={post} />
      </main>
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // This mimics getting a post from DB
  const { query } = context;
  const post = await getDummy(query.postId as string);
  return { props: { post } };
};

export default Page;
