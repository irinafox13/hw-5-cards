import { CardProps } from "./CardProps";

const Card = ({image, children}: CardProps) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt=""/>
            {children}
        </div>
    )
}

export default Card;