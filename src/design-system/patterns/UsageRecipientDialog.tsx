import { UserSelectionModal, type UserSelection } from '../components/UserSelectionModal/UserSelectionModal';
import { ADDITIONAL_RECIPIENT_OPTIONS, INDIVIDUAL_USER_OPTIONS } from '../components/UserSelectionModal/UserSelectionModal.data';
import './UsageRecipientDialog.css';

export type UsageRecipient = UserSelection;

export function UsageRecipientDialog({ value, onSave, onClose }: {
  value: UsageRecipient[];
  onSave: (value: UsageRecipient[]) => void;
  onClose: () => void;
}) {
  return <UserSelectionModal value={value} options={INDIVIDUAL_USER_OPTIONS} variant="individual-users"
    allowAdditionalEmails additionalRecipientOptions={ADDITIONAL_RECIPIENT_OPTIONS} onSave={onSave} onClose={onClose} />;
}
