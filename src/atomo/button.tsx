

interface ButtonProps{
  size?: 'small' | 'large'
  color?: 'blue' | 'brown'
  type?: 'mediaIcon'
  id?: string
  children: any
}

export const Button = ({size, color, children, type, id}: ButtonProps) => {

  const buttonSize = size === 'large' 
  ? 'font-belleza w-[100%] p-3 rounded-normal' 
  : 'p-1 rounded-normal h-[80px]';

  const buttonColor = color === 'blue' 
  ? 'bg-darkBlue text-white font-extrabold text-4xl' 
  : "bg-mediumBrown text-darkBrown"

  const buttonType = type === 'mediaIcon'
  ? 'flex justify-center items-center text-5xl text-center'
  : ''


  return(
    <button
    className={`${buttonSize} ${buttonColor} ${buttonType}`}
    id={id}
    >
      {children}
    </button>
  )
}