function ButtonComponents() {
    return  <div className="container">
                <Button
                size="medium"
                label="Button"
                type="primary"
                />

                <Button
                size="small"
                label="Button"
                type="secondary"
                />

                <Button
                size="large"
                label="Button"
                type="tertiary"
                onClickHandler={() => alert("You CLicked Me!")}
                />
            </div>
}

function Button(props) {
    let size = props.size || "medium";
    let color = props.color || "primary";
    let type = props.type || "button";
    let handleClick = props.onClickHandler;

  return (
    <div>
      <button className={`${size} ${color} ${type}`} onClick={handleClick}>
        Click Me !
      </button>
    </div>
  );
}

export default ButtonComponents;