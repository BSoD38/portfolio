import React, {useState} from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

export default function AnimationWrapper({visibleClasses, children}) {
    // Does this library really work? It seems to constantly flip between visible and invisible when in view...
    const [componentVisible, setComponentVisible] = useState(false);

    return (
        <ReactVisibilitySensor onChange={setComponentVisible}>
            <div className={componentVisible ? visibleClasses : "animation-default-state"}>
                {children}
            </div>
        </ReactVisibilitySensor>
    );
}