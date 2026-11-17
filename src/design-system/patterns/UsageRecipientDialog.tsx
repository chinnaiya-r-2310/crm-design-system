import { UserSelectionModal, type UserSelection } from '../components/UserSelectionModal/UserSelectionModal';
import { ADDITIONAL_RECIPIENT_OPTIONS, INDIVIDUAL_USER_OPTIONS } from '../components/UserSelectionModal/UserSelectionModal.data';
import { MessageInfo } from '../components/MessageInfo/MessageInfo';
import './UsageRecipientDialog.css';

export type UsageRecipient = UserSelection;

export function UsageRecipientDialog({ value, onSave, onClose }: {
  value: UsageRecipient[];
  onSave: (value: UsageRecipient[]) => void;
  onClose: () => void;
}) {
  return <UserSelectionModal value={value} options={INDIVIDUAL_USER_OPTIONS} variant="individual-users"
    allowAdditionalEmails additionalRecipientOptions={ADDITIONAL_RECIPIENT_OPTIONS} onSave={onSave} onClose={onClose}
    footerNote={<MessageInfo variant="note" points={[
      'Email: You can select up to 90 CRM users and add up to 10 additional email addresses. The total number of email recipients cannot exceed 100.',
      'Push Notifications: You can select up to 100 CRM users. Additional recipients are not supported.',
    ]} />} />;
}
