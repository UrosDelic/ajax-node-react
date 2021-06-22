const DtextAreaFn = (props) => {
  return (
    <div>
      <textarea
        name='textArea'
        id={props.id}
        value={props.value}
        readOnly={props.readOnly}
        hidden={props.hidden}
      ></textarea>
    </div>
  );
};

export default DtextAreaFn;
