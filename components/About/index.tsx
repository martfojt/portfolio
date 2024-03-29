import Fade from 'react-reveal/Slide';
import { attributes } from '../../content/main';

type Props = {
  data: (typeof attributes)['about'];
};

export default function About({ data }: Props) {
  const { heading, text, image } = data;
  return (
    <div
      data-test-id="about"
      id="about"
      className="w-screen grid grid-flow-cols grid-rows-2 md:grid-cols-2 md:grid-rows-1 text-gray-800"
    >
      <div className="about__left px-4 py-16 md:p-16 lg:p-32">
        <Fade left>
          <h3 className="text-3xl font-bold mb-6">{heading}</h3>
          <p>{text}</p>
        </Fade>
      </div>
      <div
        className="about_right"
        style={{
          backgroundImage: `url('${image}')`,
          backgroundPosition: 'bottom',
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
}
