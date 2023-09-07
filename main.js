import { renderizarCatalogo } from "./src/cartaoProduto";
import { inicializarFiltros } from "./src/filtroCatalogo";
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/menuCarrinho";

renderizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();
inicializarFiltros();