export function ButtonOpen(props) {
  return (
    <button className={props.className} onClick={props.onClickOpen}>
      {props.name}
    </button>
  );
}
