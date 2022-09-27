function Button({ title, onClick, type }) {
  return (
    <button type={type} onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
