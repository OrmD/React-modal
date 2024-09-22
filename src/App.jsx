import React, { useEffect, useState } from "react";
import "./index.scss";
import { ButtonOpen } from "./button";
import { ModalWindow } from "./popap";

export default function App() {
  const [open, setOpen] = useState(false);
  const [openClass, setOpenClass] = useState(false);

  const onChangeState = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const onChangeClass = () => {
    if (openClass === false) {
      setOpenClass(!openClass);
    } else {
      setOpenClass(false);
    }
  };

  return (
    <div className="App">
      <ButtonOpen
        className={"open-modal-btn "}
        name={"✨ Відкрити окно 1"}
        onClickOpen={onChangeState}
      ></ButtonOpen>
      <ButtonOpen
        className={"open-modal-btn "}
        name={"✨ Відкрити окно 2"}
        onClickOpen={onChangeClass}
      ></ButtonOpen>
      <div className="modal-hover">
        <ButtonOpen
          className={"open-modal-btn "}
          name={"✨ Відкрити окно 3"}
          onClickOpen={onChangeState}
        ></ButtonOpen>
        <div className="modal-hover__body">
          <h2 className="modal-hover__title">Hover popap</h2>
        </div>
      </div>

      <ModalWindow
        className={"overlay animated "}
        onClickOpen={onChangeClass}
      ></ModalWindow>
      <ModalWindow
        className={`overlay animated ${openClass ? "show" : ""}`}
        onClickOpen={onChangeClass}
      ></ModalWindow>
      {open && (
        <ModalWindow
          className={"overlay"}
          onClickOpen={onChangeState}
        ></ModalWindow>
      )}
    </div>
  );
}
