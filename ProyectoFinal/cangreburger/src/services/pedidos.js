import { URL_BACKEND2} from "../enviroment/enviroment";

export const getPedidos = async () => {
  const response = await fetch(`${URL_BACKEND2}/pedidos`);
  const json = await response.json();
  return json;
};
export const getPedidosById = async (pedido_id) => {
    const response = await fetch(`${URL_BACKEND2}/pedidos/${pedido_id}`);
    const json = await response.json();
    return json;
  };

