import { AryContext } from "../AryContext"
import { useContext } from "react"

function TodoList() {
    const { todo, settodo } = useContext(AryContext)

    // delete button fucntion
    function dltbtn(removeid) {
        var tempArr = todo.filter(
            function (data) {
                if (removeid === data.id) {
                    return false
                }
                else {
                    return true
                }
            }
        )
        console.log(tempArr)
        settodo(tempArr)
    }
    return (
        <>
            <div
                className="mt-5 flex flex-col gap-5 border 
            border-green-800 p-5 w-10/12 items-center 
            justify-center text-center ml-8 md:ml-28">
                <h1 className="text-3xl font-medium">Your Tasks are here 📝 </h1>
                <ol>
                    {
                        todo.map(
                            function (item) {
                                return <li>{item.activity} <button className="text-red-500 bg-red-200 p-1 rounded-md my-1" onClick={() => { dltbtn(item.id) }}>Delete</button></li>
                            }
                        )
                    }
                </ol >
            </div>
        </>
    )
}
export default TodoList