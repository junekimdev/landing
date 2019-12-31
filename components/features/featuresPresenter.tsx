import './features.scss';
import Item from './featuresViewItem';

const presenter = () => {
  const lorem =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid officia eius necessitatibus est, sequi ducimus totam velit fugiat fuga sunt dolorum doloremque laudantium recusandae aut laboriosam neque consectetur saepe repellat?';
  return (
    <section className="features hash" id="features">
      <div className="features__container">
        <h1 className="features__title page-title">Features</h1>
        <Item image="//unsplash.it/300/300?random=f1" title="Feature 1" content={lorem} />
        <Item image="//unsplash.it/300/300?random=f2" title="Feature 2" content={lorem} />
        <Item image="//unsplash.it/300/300?random=f3" title="Feature 3" content={lorem} />
        <Item image="//unsplash.it/300/300?random=f4" title="Feature 4" content={lorem} />
        <Item image="//unsplash.it/300/300?random=f5" title="Feature 5" content={lorem} />
        <Item image="//unsplash.it/300/300?random=f6" title="Feature 6" content={lorem} />
        <Item image="//unsplash.it/300/300?random=f7" title="Feature 7" content={lorem} />
        <Item image="//unsplash.it/300/300?random=f8" title="Feature 8" content={lorem} />
      </div>
    </section>
  );
};

export default presenter;
