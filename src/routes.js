import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InformacoesProvider } from './commom/context/infs';
import PageDefault from "./components/PageDefault";
import PagePerfil from "./pages/PagePerfil";
import PagePerfilConfig from "./pages/PagePerfil/PagePerfilConfig";

function AppRoute() {

  return (
    <BrowserRouter>
      <InformacoesProvider>

        <Routes>
            <Route path='/' element={<PageDefault />}>
              <Route index element={<PagePerfil/>}></Route>
              <Route path='/:id' element={<PagePerfilConfig/>}></Route>
            </Route>
        </Routes>

      </InformacoesProvider>
    </BrowserRouter>
  );
}

export default AppRoute;
