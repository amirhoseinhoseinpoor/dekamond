import styles from "./Button.module.scss";

interface Props {
  onClick: () => void;
  children: React.ReactNode;
  isButtonDisabled?: boolean;
}

export default function Button({ onClick, children , isButtonDisabled }: Props) {

  return (
    <button
      className={`mediumText d-flex flex-row gap-2 justify-content-center align-items-center ${
        styles.button
      } ${isButtonDisabled ? styles.disabledButton : styles.activeButton}`}
      onClick={onClick}
      disabled={isButtonDisabled}
    >
      {children}
      <svg
        width={21}
        height={21}
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.47533 5.91748L3.41699 10.9758L8.47533 16.0341"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17.5836 10.9756H3.55859"
          stroke="white"
          strokeWidth="1.5"
          strokeMiterlimit={10}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
