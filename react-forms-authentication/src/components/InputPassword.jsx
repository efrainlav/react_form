import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const InputPassword = () => {
    const [type, setType] = useState("password")
    const [show, setShow] = useState(false);
    /*     const clickVisible = () => {
            setType("text");
            };
        const clickInvisible = () => {
            setType("password");
            }; */
    const switchVisibility = (visibility) => {
        setShow(visibility);

        //IF ternario
        setType(visibility ? "text" : "password");

        //IF Normal
        /*         if (visibility) {
                    setType("text");
                } else {
                    setType("password");
                } */
    };

    return (
        <div className="input-password">
            <input type={type} />
            {!show && <AiOutlineEye className="password-icon" onClick={() => switchVisibility(true)} />}
            {show && <AiOutlineEyeInvisible className="password-icon" onClick={() => switchVisibility(false)} />}
        </div>
    );
};


export default InputPassword;