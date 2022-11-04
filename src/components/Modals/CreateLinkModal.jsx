import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const CreateLinkModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const linkRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const { addLink, isLoading, fetchCurrentUserLinks } = useContext(AuthContext);

  const handleAddLink = async (e) => {
    e.preventDefault();
    await addLink(
      titleRef.current.value,
      linkRef.current.value,
      descriptionRef.current.value
    );
    onClose();
    await fetchCurrentUserLinks();
  };

  return (
    <>
      <Button onClick={onOpen}>Add Link</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleAddLink}>
            <ModalHeader>Add a new link</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="space-y-3">
              <div className="flex items-start space-y-1 flex-col">
                <label htmlFor="link" className="text-base font-bold">
                  Title
                </label>
                <input
                  ref={titleRef}
                  required
                  type="text"
                  id="link"
                  className="w-full placeholder:text-lg text-lg p-2 rounded-md border"
                />
              </div>

              <div className="flex items-start space-y-1 flex-col">
                <label htmlFor="link" className="text-base font-bold">
                  Link
                </label>
                <input
                  ref={linkRef}
                  required
                  type="text"
                  id="link"
                  className="w-full placeholder:text-lg text-lg p-2 rounded-md border"
                />
              </div>
              <div className="flex items-start space-y-1 flex-col">
                <label htmlFor="link" className="text-base font-bold">
                  Description
                </label>
                <Textarea
                  ref={descriptionRef}
                  required
                  type="text"
                  id="link"
                  className="w-full placeholder:text-lg text-lg p-2 rounded-md border"
                />
              </div>
            </ModalBody>

            <ModalFooter>
              <Button
                type="submit"
                isLoading={isLoading}
                colorScheme="blue"
                mr={3}
              >
                Add
              </Button>
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateLinkModal;
