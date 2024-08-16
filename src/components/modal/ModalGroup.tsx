import AccessibilityModal from "./AccessibilityModal";
import PollingModal from "./PollingModal";
import CommentModal from "./CommentModal";

const ModalGroup = () => {
  return (
    <div className="flex flex-col gap-3">
      <PollingModal />
      <CommentModal />
      <AccessibilityModal />
    </div>
  );
};

export default ModalGroup;
