import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isOpenModel, setIsOpenModel] = useState();

//   return (
//     <>
//       <Button onClick={() => setIsOpenModel((e) => !e)}>Add new cabin</Button>
//       {isOpenModel && (
//         <Modal onClose={() => setIsOpenModel(false)}>
//           <CreateCabinForm onClose={() => setIsOpenModel(false)} />
//         </Modal>
//       )}
//     </>
//   );
// }
export default AddCabin;
