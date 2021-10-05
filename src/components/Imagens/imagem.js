export function Imagem(props) {
    return (
        <img 
            className={props.className} 
            src={props.src} 
            alt={props.alt} 
        />
    )
}