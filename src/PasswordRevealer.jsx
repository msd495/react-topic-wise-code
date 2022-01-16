import React,{useState} from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

const PasswordRevealer = ()=>{

    const [showPassowrd,setShowPassowrd] = useState(true);

    return(
        <div style={{height:'87px',display:"inline-flex",alignItems:"center",justifyContent:"center"}}>
            <Input placeholder="password"  type={showPassowrd?"password":"text"} />
            <Button variant="outlined" style={{marginLeft:'12px'}} color="secondary" onClick={()=>setShowPassowrd(!showPassowrd)}>{`show ${showPassowrd?"password":"text"}`} </Button>
        </div>
    )

}

export default PasswordRevealer;