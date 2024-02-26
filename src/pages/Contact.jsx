//Import the Contact component to be rendered
import Contact from "../components/Contact"

//Render the Contact component after its data is processed by the component
export default function Portfolio(){
    return(
        <div>
            {<Contact/>}
        </div>       
    )
}