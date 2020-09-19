import React, { useEffect, useState } from "react";
import { getPedidos } from "../../../services/pedidos";
import { MDBBadge, MDBDataTable } from "mdbreact";


const PedidosTabla = ({ history }) => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    getPedidos().then((rpta) => {
      if (rpta.ok) {
        setPedidos(rpta.pedidos);
      }
    });
  }, []);

  const irAverPedido=(badge)=>{
    history.push(`/admin/pedidos/${badge}`)
  }
  
    const datatable = {
      columns: [
        { label: "Nro. Pedidos", field: "pedido_nro",width: 100, },
        { label: "Estado", field: "pedido_est",width: 100, },
        { label: "Medio de Pago", field:"pedido_med_pago"},
        { label: "Detalles del Pedido", field:"pedido_detalle"}
      ],
      rows: [
        {
          pedido_nro:"01",
          pedido_est:"Pagado",
          pedido_med_pago:"Visa",
          pedido_detalle:(
            <>
              <button 
              className="btn btn-success"
              onClick={()=> irAverPedido()}>
                Ver Detalle
              </button>
            </>
          )
        },
        {
          pedido_nro:"01",
          pedido_est:"Pagado",
          pedido_med_pago:"Contra Entrega",
          pedido_detalle:(
            <>
              <button 
              className="btn btn-success"
              onClick={()=> irAverPedido()}>
                Ver Detalle
              </button>
            </>
          )
        },
        {
          pedido_nro:"02",
          pedido_est:"Pagado",
          pedido_med_pago:"Visa",
          pedido_detalle:(
            <>
              <button 
              className="btn btn-success"
              onClick={()=> irAverPedido()}>
                Ver Detalle
              </button>
            </>
          )
        },
        {
          pedido_nro:"03",
          pedido_est:"Pendiente",
          pedido_med_pago:"Visa",
          pedido_detalle:(
            <>
              <button 
              className="btn btn-success"
              onClick={()=> irAverPedido()}>
                Ver Detalle
              </button>
            </>
          )
        },
        {
          pedido_nro:"04",
          pedido_est:"Pagado",
          pedido_med_pago:"Mastercard",
          pedido_detalle:(
            <>
              <button 
              className="btn btn-success"
              onClick={()=> irAverPedido()}>
                Ver Detalle
              </button>
            </>
          )
        },
        {
          pedido_nro:"05",
          pedido_est:"Pendiente",
          pedido_med_pago:"Paypal",
          pedido_detalle:(
            <>
              <button 
              className="btn btn-success"
              onClick={()=> irAverPedido()}>
                Ver Detalle
              </button>
            </>
          )
        }
      ]
    };
    const badgesData = {
      columns: [
        {
          label: 'ID',
          field: 'pedido_id',
        },
        ...datatable.columns,
      ],
      rows: [
        ...datatable.rows.map((row, order) => ({
          ...row,
          pedido_id: (
            <MDBBadge pill color='primary' className='p-1 px-2' key={order} searchvalue={order}>
              ID: {order + 1}
            </MDBBadge>
          ),
        })),
      ],
    };
  
  

  return (
    <div className="row mt-4">
      <div className="col">
        <div className="card shadow">
          <div className="card-body">
            {
              <MDBDataTable 
                responsive
                searchLabel={"Buscar"}
                infoLabel={["Mostrando", "al", "de", "registros"]}
                paginationLabel={["Anterior","Siguiente"]}
                bordered
                striped
                entriesOptions={[5, 20, 25]}
                entries={5}
                pagesAmount={4}
                data={datatable,badgesData}
                small
                // sortRows={['badge']}
              />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosTabla;
