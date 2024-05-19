const Button = ({ label, icon, style = '', fullWidth }) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full border-coral-red ${style || 'text-white'} ${fullWidth && 'w-full'} hover:opacity-80 transitio-[opacity] duration-200`}>
      {label}
      {icon && <img className="size-5 ml-2 rounded-full" src={icon} alt="arrow right" />}
    </button>
  );
}

export default Button;
