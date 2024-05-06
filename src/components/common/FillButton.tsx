const FillButton = ({
  type,
  text,
  isAble,
  onClick,
}: {
  type: 'button' | 'submit' | 'reset';
  text: string;
  isAble: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      type={type}
      className="w-full bg-main text-white text-18 rounded-button py-16 px-32 border-none outline-none hover:bg-dark-300 transition-colors active:outline-none focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
      disabled={!isAble}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default FillButton;
