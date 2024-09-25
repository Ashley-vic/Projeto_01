import "./styles.css";

const Modal = () => {
  return (
    <div>
      <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Dados do Pedido</h3>
          <p className="py-4">
            aqui vão os dados
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Finalizar Compra</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;