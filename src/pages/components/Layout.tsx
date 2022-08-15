import TituLo from "./Titulo";
//---------------------------------------------------
interface LayoutProps {
    titulo?: string   //a interrogação após titulo significa que no componente Layout não é obrigatorio passar a propriedade titulo 
    children: any
}
//----------------------------------------------------
export default function Layout(props: LayoutProps){
    return(
        <div className={`
                flex flex-col w-2/3
                bg-white text-gray-800 rounded-md`}>
            <TituLo>{props.titulo}</TituLo>
            <div className="p-6 ">
                {props.children}
            </div>

        </div>
    )
}
//-----------------------------------------------------