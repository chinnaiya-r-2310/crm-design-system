import { UserSelectionModal, type UserSelection } from '../components/UserSelectionModal/UserSelectionModal';
import { RECIPIENT_OPTIONS } from '../components/UserSelectionModal/UserSelectionModal.data';
import './UsageRecipientDialog.css';

export type UsageRecipient = UserSelection;

export function UsageRecipientDialog({ value, onSave, onClose }: {
  value: UsageRecipient[];
  onSave: (value: UsageRecipient[]) => void;
  onClose: () => void;
}) {
  return <UserSelectionModal value={value} options={RECIPIENT_OPTIONS}
    allowAdditionalEmails onSave={onSave} onClose={onClose} />;
}
