import { useContext } from "react";
import styles from "./register.module.css";
import { useForm } from "react-hook-form";
import LoaderContext from "../../context/LoaderContext";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startUpsertUser } from "../../redux/actions/userActions";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { setLoading } = useContext(LoaderContext);

  // Add registered users function
  const onSubmit = (data) => {
    if (data.fullName === "") return alert("Please enter fullname");
    if (data.email === "") return alert("Please enter email");
    if (
      data.email.indexOf("@") < 1 ||
      data.email.lastIndexOf(".") - data.email.indexOf("@") < 2
    )
      return alert("Please enter valid email");
    if (data.password === "") return alert("Please enter password");
    if (data.confirmPassword === "")
      return alert("Please enter confirm password");
    if (data.password !== data.confirmPassword)
      return alert("Password not match, please try again!");

    const payload = {
      id: Number(new Date()),
      fullName: data.fullName,
      email: data.email,
      pass: data.password,
    };

    dispatch(startUpsertUser(payload, "add"));
    navigate("/user-list");
  };

  return (
    <form className={styles.register} onSubmit={handleSubmit(onSubmit)}>
      <h2>
        <b>Register</b>
      </h2>
      <br />
      <div className="row">
        <div className="row justify-content-start">
          <div className={`${styles.customCol1} col-4`}>
            <small className={styles.right}>
              <b>Full Name</b>
            </small>
          </div>
          <div className={`${styles.customCol2} col-4`}>
            <input
              type="text"
              className={styles.input}
              {...register("fullName")}
              placeholder="Anne Hunter"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row justify-content-start">
          <div className={`${styles.customCol1} col-4`}>
            <small className={styles.right}>
              <b>Email</b>
            </small>
          </div>
          <div className={`${styles.customCol2} col-4`}>
            <input
              type="text "
              className={styles.input}
              {...register("email")}
              placeholder="anne.hunter@mail.com"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row justify-content-start">
          <div className={`${styles.customCol1} col-4`}>
            <small className={styles.right}>
              <b>Password</b>
            </small>
          </div>
          <div className={`${styles.customCol2} col-4`}>
            <input
              type="password"
              className={styles.input}
              {...register("password")}
              aria-describedby="passwordHelpBlock"
              placeholder="******"
            />
          </div>
        </div>
        <br />
        <br />
        <div className="row justify-content-start">
          <div className={`${styles.customCol1} col-4`}>
            <small className={styles.right}>
              <b>Confirm Password</b>
            </small>
          </div>
          <div className={`${styles.customCol2} col-4`}>
            <input
              type="password"
              className={styles.input}
              {...register("confirmPassword")}
              aria-describedby="passwordHelpBlock"
              placeholder="******"
            />
          </div>
        </div>
      </div>
      <br />
      <button type="submit" className={styles.button}>
        <small>Register</small>
      </button>
    </form>
  );
};

export default Register;
