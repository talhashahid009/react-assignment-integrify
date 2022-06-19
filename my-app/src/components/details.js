import { Button, Paper } from "@mui/material"
import { useParams, Link } from "react-router-dom"
import { Address } from "./address"
import { Company } from "./company"


export const Details = ({users}) => {
    const {id} = useParams()
    const user = users.find(user => id === id)
    return(
        <>
            <div>
                <Link to={`/`}>
                    <Button variant="contained">Homepage</Button>
                </Link>
            </div>
            <div className="">
                <Paper elevation={5}>
                    <p>- name: {user.name}</p>
                    <p>- username: {user.username}</p>
                    <p>- email: {user.email}</p>
                    <p>- phone: {user.phone}</p>
                    <Company company={user.company}/>
                    <Address address={user.address}/>
                </Paper>
            </div>
        </>   
    )
}