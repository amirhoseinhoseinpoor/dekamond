import styles from './Input.module.scss';

interface Props {
  label?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
}

export default function Input({ label, value, onChange, placeholder, className , type }: Props) {
  return (
    <div className={`form-group ${styles.inputGroup} ${className}`}>
      {label && <label>{label}</label>}
      <input
        className={`form-control ${className}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}
