import './FormSection.css';

export function FormSection({ title, children }) {
  return (
    <div className='form-section-section'>
      <h3 className='form-section-heading'>{title}</h3>
      {children}
    </div>
  );
}

export default FormSection;
