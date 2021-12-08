import PropTypes from 'prop-types';

function Section({ title, children }) {
  return (
    <div>
      {title && <h2>{title}</h2>}
      {children}
    </div>
  );
}

const dsfds = false;

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
