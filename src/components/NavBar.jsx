export default function Nav({links}){
    return(
        <div className="col text-center">
            <ul>
                {links.map((link) => link)}
            </ul>
        </div>
    )
}