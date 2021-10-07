import React, {FC, useState} from "react";
import {Image} from "semantic-ui-react";

interface LoadingZookImageProps {
    zookId: number,
    alt?: string
}

const LoadingZookImage: FC<LoadingZookImageProps & React.HTMLProps<HTMLDivElement>> = (props) => {

    const [loading, setLoading] = useState<Boolean>(true)

    let loaded = () => {
        setLoading(false)
    }

    let imageClass: () => string = () => {
        if (loading) {
            return "square image"
        } else {
            return ""
        }
    }

    return <>
        <div {...props} className="ui placeholder" >
            <Image className={imageClass()} onLoad={loaded}
                   src={`${process.env.REACT_APP_STATIC_URL}/zooks/${props.zookId}/image.png`} alt={props.alt}/>
        </div>
    </>

}

export default LoadingZookImage