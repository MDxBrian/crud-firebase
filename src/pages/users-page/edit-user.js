import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import LoaderContext from "../../context/LoaderContext";
import { useDispatch } from "react-redux";
import { startUpsertUser } from "../../redux/actions/userActions";

const EditUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const { setLoading } = useContext(LoaderContext);

  const onSubmit = async (data) => {
    if (data.fullName === "") return alert("Enter fullname");
    if (data.email === "") return alert("Enter email");
    if (
      data.email.indexOf("@") < 1 ||
      data.email.lastIndexOf(".") - data.email.indexOf("@") < 2
    )
      return alert("Please enter valid email");

    const payload = {
      id: location.state.id,
      fullName: data.fullName,
      email: data.email,
    };

    setLoading(true);
    dispatch(startUpsertUser(payload, "edit"));
    navigate("/user-list", { replace: true });
    return setLoading(false);
  };

  return (
    <div className="align-items-start">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main">
          <h2 className="edit-header">
            <b>Edit User Information</b>
          </h2>
          <div className="row">
            <div className="row justify-content-start">
              <div className="col-4 col-edit-1">
                <small>
                  <b>Full Name</b>
                </small>
              </div>
              <div className="col-4 col-edit-2">
                <input
                  {...register("fullName")}
                  defaultValue={location.state.fullName}
                  id="input-edit-user-fullname"
                />
              </div>
            </div>
            <br />
            <br />
            <div className="row justify-content-start">
              <div className="col-4 col-edit-1">
                <small>
                  <b>Email</b>
                </small>
              </div>
              <div className="col-4 col-edit-2">
                <input
                  {...register("email")}
                  defaultValue={location.state.email}
                  id="input-edit-user-email"
                  type="text"
                />
              </div>
            </div>
          </div>
          <br />
          <button type="submit" className="button">
            Save
          </button>
          <br />
        </div>
      </form>
    </div>
  );
};

export default EditUser;
