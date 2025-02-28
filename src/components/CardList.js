import Card from './Card';

function CardList(props) {
    const cardContent = props.cardContent;
    const activeCard = props.activeCard;
    const changeActiveCard = props.changeActiveCard;

    
    return (
        <section className="card-list">
            {cardContent.map((content) => (
                <Card 
                    id={content.id} 
                    title={content.title} 
                    content={content.content}
                    isActive={activeCard === content.id}
                    changeActive = {changeActiveCard}
                />
            ))}
        </section>
    );
}

export default CardList;