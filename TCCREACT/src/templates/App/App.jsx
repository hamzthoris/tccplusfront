import Home from '../Home/Home';
import Login from '../Login/Login'
import Register from '../Register/Register';
import ShowProject from '../Project/ShowProject';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import EditProject from '../Project/EditProject';
import UsuariosLista from '../Project/ShowProject';
import ProjectRegister from '../Project/ProjectRegister';
import ProfessorArea from '../VisualizarProfessor/ProfessorArea';
import UserEdit from '../User/UserEdit';
import Painel from '../ADM/Painel';


function App() {

  return (
    <>
   
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/showproject/:id" element={<ShowProject />}></Route>
          <Route path="/createproject" element={<ProjectRegister />}></Route>
          <Route path="/visualizar" element={<ProfessorArea />}></Route>
          <Route path='/editaruser/:id' element={<UserEdit/>}></Route>
          <Route path='/editarprojeto/:id' element={<EditProject/>}></Route>
          <Route path='/paineladm' element={<Painel/>}></Route>
        </Routes>
    </>
  )
}

export default App
