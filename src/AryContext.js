import { createContext, useState } from "react"
const AryContext = createContext()

function DataHub(data) {

    const [todo, settodo] = useState([
        {
            id: 1,
            activity: "Wake up at 5 am"
        }
    ])
    return (
        <>
            <AryContext.Provider value={{ todo, settodo }}>
                {data.children}
            </AryContext.Provider>
        </>
    )
}
export default DataHub
export { AryContext }