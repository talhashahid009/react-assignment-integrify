export const Address = ({address}) => {
    console.log(address)
    return(
        <div>
            - address:
            <ul>
                <li>{address.street}</li>
                <li>{address.suite}</li>
                <li>{address.city}</li>
                <li>{address.zipcode}</li>
            </ul>
        </div>
    )
}