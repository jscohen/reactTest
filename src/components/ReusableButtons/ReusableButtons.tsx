import styles from "./ReusableButtons.module.css";

interface ReusableButtonProps {
  children: string;
  color?: "primary" | "seconday" | "danger";
  onClick: () => void;
}

const ReusableButtons = ({
  children,
  color = "primary",
  onClick,
}: ReusableButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={[styles.btn, styles["btn-" + color]].join(" ")}
      >
        {children}
      </button>
    </>
  );
};

export default ReusableButtons;
