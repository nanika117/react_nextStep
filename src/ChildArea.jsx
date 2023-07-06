import { memo } from "react/cjs/react.production.min";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "green",
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  const data = [...Array(2000).keys()];
  data.forEach(() => console.log("foo"));

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
