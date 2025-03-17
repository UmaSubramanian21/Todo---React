import { useContext, useState } from "react"
import { AryContext } from "../AryContext"

function AddTodoForm() {
    const { todo, settodo } = useContext(AryContext)
    // to store user's values
    const [evalue, setEvalue] = useState()

    // 
    function userAct(evt) {
        setEvalue(evt.target.value)
        console.log(evalue)
    }

    function todoList() {
        settodo([
            ...todo, {
                id: todo.length + 1,
                activity: evalue
            }])
    }
    return (
        <>
            <div className=" mb-10  flex flex-col justify-center items-center">
                <h1
                    className="text-4xl font-bold text-center mb-5"> 📚  To - do List ✅  </h1>
                <div
                    className="flex flex-col gap-6 border
                 border-green-800 p-5 mt-5 text-center
                  items-center w-9/12">
                    <h1 className="text-3xl font-medium">Add Activities 📋</h1>
                    <input
                        type="text"
                        placeholder="Enter Activity"
                        className="border border-black w-64 p-1 outline-green-400 bg-transparent"
                        value={evalue}
                        onChange={userAct}>
                    </input>
                    <button
                        onClick={todoList}
                        className="bg-green-400 w-44 py-1 hover:bg-green-500 rounded-md">Add</button>

                </div>
            </div>

        </>
    )
}

export default AddTodoForm
