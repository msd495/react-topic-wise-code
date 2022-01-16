import React from "react"
import {FirstName} from "./index"
import {LastName} from "./index"

//this is known as useContext API

function CompC() {
    return (
        <>
            <FirstName.Consumer>
                    {
                        (fname)=>{
                            return (
                                <LastName.Consumer>
                                    {
                                        (lname) => {
                                            return (<h1>Hello {fname} {lname}</h1>)
                                        }
                                    }
                                </LastName.Consumer>)

                        }
                    }

            </FirstName.Consumer>
        </>
    )
}

export default CompC;