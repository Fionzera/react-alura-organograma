import TextField from "../TextField/TextField.js"
import './Forms.css';

const forms = () =>{
    return(
        <section className="forms">
            <form>
                <TextField label='Name' pretext='Insert your name'/>
                <TextField label='Phone Number' pretext='Insert your number'/>
            </form>

        </section>

    )

}

export default forms;