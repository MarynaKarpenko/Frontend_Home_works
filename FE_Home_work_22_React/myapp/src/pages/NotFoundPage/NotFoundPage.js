import s from "./NotFoundPage.module.css"

export default function NotFoundPage(){
    return(
        <div className={s.not_found_page}>
            <h1>Not Found Page</h1>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg"></img>
        </div>
    )
}