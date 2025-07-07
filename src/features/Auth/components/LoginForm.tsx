"use client";

import { useState } from "react";
import Input from "@/shared/components/Input";
import Button from "@/shared/components/Button";
import { validatePhone } from "../utils/validatePhone";
import styles from "./LoginForm.module.scss";
import { useLogin } from "@/features/Auth/hooks/useLogin";

export default function LoginForm() {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const { login } = useLogin();

  const handleLogin = () => {
    if (!validatePhone(phone)) {
      setError("شماره همراه معتبر نیست");
      return;
    }
    login();
  };

  return (
    <div className={`container ${styles.loginContainer} pt-3 pb-3`}>
      <div className={`${styles.innerContainer} position-relative`}>
        <div className={styles.closeIconImg}>
          <svg
            width={24}
            height={25}
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.4756C17.5 22.4756 22 17.9756 22 12.4756C22 6.97559 17.5 2.47559 12 2.47559C6.5 2.47559 2 6.97559 2 12.4756C2 17.9756 6.5 22.4756 12 22.4756Z"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.16992 15.3055L14.8299 9.64551"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.8299 15.3055L9.16992 9.64551"
              stroke="#333333"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-center mb-4">Logo</h2>
        {error && (
          <div className={`${styles.handelLoginError} mediumText`}>{error}</div>
        )}
        <Input
          label="شماره همراه"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="09123456789"
          className="smallText"
          type="number"
        />

        <Button onClick={handleLogin} isButtonDisabled={!validatePhone(phone)}>ورود</Button>
        <div className="mt-4">
          <span className={`xsmallText`}>ورود شما به معنای پذیرش</span>
          <span className={`${styles.Role} xsmallText`}>
            {" "}
            قوانین حریم‌خصوصی
          </span>
          <span className={`xsmallText`}> است.</span>
        </div>
      </div>
    </div>
  );
}
