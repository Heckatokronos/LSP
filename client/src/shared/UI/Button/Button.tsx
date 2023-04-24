import "./Button.scss";

interface Props {
  children?: React.ReactNode;
  props?: any;
  onClick?: () => void;
}

export const Button: React.FC<Props> = ({ onClick, children, ...props }) => {
  return (
    <button onClick={onClick} {...props} className="button">
      {children}
    </button>
  );
};
