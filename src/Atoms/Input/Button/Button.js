import button from './button.module.css'

export default function Button(props){

    return (
        <div className={button.mainComponent}>
            <button onClick={props.onClick} className={button.button}> {props.ButtonText} </button>
        </div>
    )
}

