import React from "react";
import { Route, Routes } from "react-router-dom";
import TodoList from "../Components/TodoList";
import ChatGPT from "../Components/ChatGPT";
import Sidebar from "../Components/utilities/Sidebar";
import ImageToText from "../Components/Image-to-Text/ImageToText";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-slate-200 flex">
      <Sidebar />
      <div className="w-full">
        <Routes>
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/codex" element={<ChatGPT />} />
          <Route path="/image-to-text" element={<ImageToText />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
