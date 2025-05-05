import { FC, ReactNode } from "react";
import style from "./Button.css?inline";

export interface ButtonProps {
    label: ReactNode
}

export const Button: FC<ButtonProps> = ({label = "Click Me"}: ButtonProps) => {
    return <>
        <style>{style}</style>
        <button className="Button">{label}</button>
    </>
}