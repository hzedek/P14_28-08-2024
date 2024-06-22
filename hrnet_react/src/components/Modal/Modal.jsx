import "./Modal.scss";

export function openModal() {
   document.getElementById("validationModal").style.display = "block";
}
export function closeModal() {
   document.getElementById("validationModal").style.display = "none";
}
function Modal() {
   return (
      <>
         <div id="validationModal">
            <button id="closeValidationModal" onClick={closeModal}></button>
            <div id="confirmation">Employee Created !</div>
         </div>
      </>
   );
}
export default Modal;
