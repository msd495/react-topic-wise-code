import React, {useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

function PubSub() {
    let dt = {}

    useEffect(() => {
        const unsubscribe = subscribe("topic1", function () {
            console.log("subscribed to topic1")
        })
        publish("topic1","hello")
        return unsubscribe
    }, [])

    const publish = (topic, args) =>{
        if (!dt[topic]) return
        Object.values(dt[topic]).forEach((fn) => {
            fn(args)
        })
    }


    const subscribe = (topic,fn) =>{
        if(!dt[topic]) dt[topic]={}
        const id =uuidv4()
        dt[topic][id]=fn
        //unsubscribe topic
        return ()=>{
            console.log("deleted the topic");
            dt[topic][id]=null
            delete dt[topic][id]
        }
    }

    return (
        <React.Fragment>
            <button type="button" onClick={publish}>Publish</button>
            <button type="button" onClick={subscribe}>Subscribe</button>
        </React.Fragment>
    )
}

export default PubSub;