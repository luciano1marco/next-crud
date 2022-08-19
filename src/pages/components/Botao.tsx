//-------------------------------------------------
interface BotaoProps{
    cor?: 'green' | 'blue' | 'gray'
    children?: any
    className?: string
}
//--------------------------------------------------
export default function Botao(props: BotaoProps){
    //const cor = props.cor ?? 'green'
    
    return(

       <button className={` bg-gradient-to-r from-${props.cor}-400 to-${props.cor}-700
                            text-white px-4 py-2 rounded-md 
                            ${props.className}
       `}>
            {props.children}
       </button>
    )
}