import "./Button.scss";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ onClick, children }, props) => {
  return (
    <button onClick={props.onClick} className="button">
      {children}
    </button>
  );
};
