import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/UI/Buttons";
import Card from "../../components/UI/card";
import "./index.css";
import NoteList from '../../database.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";


function Home() {
  

  const [currentNote, setCurrentNote] = useState("all");
  const categoryHandler = (e) => {
    console.log(e);
  };
  const [sideBar, setSideBar] = useState(false);
  const sideBarToggler = () => {
    setSideBar(!sideBar);
  };
  return (
    <>
      <div className="position-relative overflow-hidden">
        <div className="container">
          <h1 className="text-center h2 mt-2 mb-2"></h1>
          <div className="row">
            <main className="col-12 col-md-8 col-lg-9">
              <div className="rounded-25">
                <div className="card-header">
                  <h2 className="h5">Viewing {currentNote} notes</h2>
                </div>
                <div className="card-body p-0">
                  {NoteList.map(function (note, id) {
                    return (
                      <Card
                        key={id}
                        note={note.note}
                        color={note.color}
                        created_date={note.created_date}
                        category={note.category}
                      />
                    );
                  })}
                </div>
              </div>
            </main>
            <aside
              className={`col-6 col-md-4 col-lg-3 order-sm-first d-flex justify-content-around ${
                sideBar ? "sideBarOn" : "sideBarOff"
              }`}
            >
             
              <div className={`row sticky-top `}>
                <div className="col-12">
                  <Button
                    onClick={() => categoryHandler("uncategorized")}
                    children="Uncategorized"
                    buttonSize="btn-sm"
                    buttonStyle="btn btn-warning text-light btn-block w-100 mb-3"
                  />
                  <Button
                    onClick={() => categoryHandler("personal")}
                    children="Personal"
                    buttonSize="btn-sm"
                    buttonStyle="btn btn-info text-light btn-block w-100 mb-3"
                  />
                  <Button
                    onClick={() => categoryHandler("work")}
                    children="Work"
                    buttonSize="btn-sm"
                    buttonStyle="btn btn-success text-light btn-block w-100 mb-3"
                  />
                  <Button
                    onClick={() => categoryHandler("family")}
                    children="Family "
                    buttonSize="btn-sm"
                    buttonStyle="btn btn-primary text-light btn-block w-100 mb-3"
                  />
                  <Button
                    onClick={() => categoryHandler("study")}
                    children="Study"
                    buttonSize="btn-sm"
                    buttonStyle="btn btn-light text-dark btn-block w-100"
                  />
                </div>
              </div>
            </aside>
          </div>
          <br />
        </div>

        <Link to={'/addpage'}>
        <button  type="button" className="add-note-wrapper  d-flex justify-content-center align-items-center text-white btn">
          <FontAwesomeIcon className="text-light" icon={faAdd} size={"1x"} />
        </button>
        </Link>
        <div
                onClick={sideBarToggler}
                className="open-sidebar  btn bg-light"
              >
                <img className={sideBar? 'svg-toggler1':'svg-toggler2'} src="/assets/sidebarToggler.svg" />
              </div>
      </div>

      
    </>
  );
}
export default Home;
