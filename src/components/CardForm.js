
function CardForm(props) {
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event.target.title.value, event.target.content.value);
        const title = event.target.title.value;
        const content = event.target.content.value;
        props.addCard(title, content);

        
    }

    return (
        <>
            <form 
                className="card-form"
                onSubmit={submitHandler}>
                <label
                    className="card-form__title" 
                    htmlFor="title">
                    Title:
                </label>
                <input 
                    name="title"
                    id="title"/>
                <label 
                    className="card-form__content" 
                    htmlFor="content">
                    Content:
                </label>
                <input 
                    name="content"
                    id="content"/>
                <button className='card-form__button' >Submit</button>
            </form>
        </>
    )
}

export default CardForm
