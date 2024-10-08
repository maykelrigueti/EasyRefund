import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/ScreenLogin/Login.jsx";
import Register from "./pages/ScreenRegister/Register.jsx";
import ChangePassword from "./pages/ScreenChangePassword/ChangePassword.jsx";
import UploadDocument from "./pages/UploadDocument/UploadDocument.jsx";
import Permission from "./pages/Permission/Permission.jsx";
import Manegement from "./pages/Manegement/Manegement.jsx";
import Home from "./pages/HomeEmployee/Home.jsx"
import FlowRefund from "./pages/FlowRefund/FlowRefund.jsx"


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Fluxo de Login/Cadastro/AlterarSenha */}
          <Route path='/' element={< Login />} />
          <Route path='/register' element={< Register />} />
          <Route path='/change-password' element={< ChangePassword />} />

          {/* Fluxo do funcionário */}
          <Route path='/home' element={< Home />} />
          <Route path='/home/flow-refund' element={< FlowRefund />} />
          <Route path='/home/flow-refund/upload-document' element={< UploadDocument />} />

          {/* Fluxo do Liberador/Gestor */}
          <Route path='/manegement' element={< Manegement />} />
          <Route path='/manegement/permission' element={<Permission />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
