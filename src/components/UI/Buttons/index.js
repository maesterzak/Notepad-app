import './styles.css';


function Button({ buttonSize, buttonStyle, children}){
    
    const checkButtonStyle = buttonStyle? buttonStyle:'btn-primary'
    const checkButtonSize = buttonSize? buttonSize:'btn-sm'
    
    return(
        <>
            <button className={`${checkButtonStyle} ${checkButtonSize}`}>{children}</button>
        </>
    )
}
export default Button;