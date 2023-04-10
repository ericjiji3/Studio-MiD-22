

export default function Contact(){
    return(
        <div className="contact">
            <div className="left">
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <form className="form-container">
                    <input className="text-input" autocomplete="name" placeholder="Name" type="text" name="your-name"/>
                    <input className="text-input" autocomplete="name" placeholder="Email Address" type="text" name="your-email"/>
                    <input className="text-input" autocomplete="name" placeholder="Number" type="text" name="your-number"/>
                    <input className="text-input" autocomplete="name" placeholder="Project Type" type="text" name="your-project"/>
                    <input className="text-input" autocomplete="name" placeholder="Availability" type="text" name="your-availability"/>
                    <button className="submit-button" type="submit">Submit</button>
                </form>
            </div>
        
        </div>
    )
}