//-------------------------------------------------
interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    children?: any
    className?: string
    onClick?: () => void
}
//--------------------------------------------------
export default function Botao(props: BotaoProps){
    const cor = props.cor ?? 'green'//para funcionar assista aula 202 aos 7min
    
    return(

       <button  onClick={props.onClick}
                className={` bg-gradient-to-r from-${cor}-400 to-${cor}-700
                            text-white px-4 py-2 rounded-md 
                            ${props.className}
                        `}>
            {props.children}
       </button>
    )
}