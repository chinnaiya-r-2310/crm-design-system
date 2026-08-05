import styles from './FormSection.module.css';

export interface FormSectionProps {
  title: string;
  children?: React.ReactNode;
}

export function FormSection({ title, children }: FormSectionProps) {
  return (
    <div className={styles.section}>
      <h3 className={styles.heading}>{title}</h3>
      {children}
    </div>
  );
}

export default FormSection;
