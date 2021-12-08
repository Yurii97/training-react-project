import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string,
};

const rss = false;
console.log(rss);
export default Section;
