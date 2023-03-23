import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import rehypeSanitize from "rehype-sanitize";
import Button from "../../components/UI/Buttons";
import styles from './styles.css'
import NoteList from "../../database.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faBriefcase, faPerson, faRandom, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";


function AddPage(){
    
    const [status, setStatus] = useState(true)
    const statusToggler=()=>{
        setStatus(!status)
    }
    const [category, setCategory]=useState("Uncategorized")
    
    const [value, setValue] = useState("**Hello world**");
    const Save=()=>{
        // NoteList.push({
        //     note:value,
        //     category:category,
        //     created_date:22/01/2022,
        //     color:"bg-primary"
        // })
        console.log('qq', value)
        console.log('ee', category)
    }
    return(
        <>
            <div className="container mb-5">
            <div className="row mt-1 d-flex justify-content-end">
                <div className="col-6 mb-3 col-md-2 d-flex justify-content-between">
                    <button onClick={Save} className="btn-outline-warning btn btn-md">Save</button>
                    <button onClick={statusToggler}  className="btn-warning btn text-light btn-md">{status ? "Preview":"Edit"}</button>

                </div>

            </div>
            <div className=" mt-1 ">
                <MDEditor
                    height={700}
                    preview={status? "edit":"preview"}
                    value={value}
                    onChange={setValue}
                    previewOptions={{
                        rehypePlugins: [[rehypeSanitize]],
                    }}
                />
                {/* <MDEditor.Markdown source={value} />     */}
                <h2 className="text-center h6">category: {category}</h2>
                <div className="mt-2 row flex-wrap d-flex justify-content-around">
                    <div className="col-2 col-md-1 p-1 ">
                        <button className={`category ${category === "Uncategorized" ? "text-warning":''}`}>
                        <FontAwesomeIcon onClick={()=>setCategory("Uncategorized")} icon={faRandom} size={'1x'} />
                        </button>
                    </div>
                    <div className="col-2 col-md-1 p-1 text-center">
                    <button className={`category ${category === "Personal" ? "text-info":''}`}>
                    
                    <FontAwesomeIcon onClick={()=>setCategory("Personal")} icon={faUser} size={'1x'} />
                    
                    </button>
                    </div>
                    <div className="col-2 col-md-1 p-1 text-center">
                        
                    <button className={`category ${category === "Work" ? "text-success":''}`}>
                    <FontAwesomeIcon onClick={()=>setCategory("Work")} icon={faBriefcase} size={'1x'} />
                    </button>
                    </div>
                    <div className="col-2 col-md-1 p-1 text-center">
                    <button className={`category ${category === "Family" ? "text-primary":''}`}>
                    <FontAwesomeIcon onClick={()=>setCategory("Family")} icon={faUserGroup} size={'1x'} />
                    </button>
                    </div>
                    <div className="col-2 col-md-1 p-1 text-center">
                    <button className={`category ${category === "Study" ? "text-light":''}`}>
                    <FontAwesomeIcon onClick={()=>setCategory("Study")} icon={faBook} size={'1x'} />
                    </button>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}
export default AddPage;