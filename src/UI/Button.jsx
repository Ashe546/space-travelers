// eslint-disable-next-line react/prop-types

function Button({ title, onReserve, className }) {
  return (
    <button type="button" onClick={onReserve} className={className}>
      {title}
    </button>
  );
}

export default Button;
