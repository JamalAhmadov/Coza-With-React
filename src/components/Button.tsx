interface IButtonProps {
  text: string;
  bgcolor: string;
  color: string;
}

const Button:React.FC<IButtonProps> = ({ text, bgcolor, color }) => {
  return (
    <button className={`${bgcolor} ${color} min-w-40 h-12 rounded-3xl `}>
      {text}
    </button>
  );
};

export default Button;


