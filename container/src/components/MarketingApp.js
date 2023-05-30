import {mount} from 'marketing/MarketingApp'
import React, {useRef, useEffect} from 'react'

//these following lines wont need to be changed even if marketing app is written in angular or anything
export default() => {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
    })

    return <div ref={ref}/>
}