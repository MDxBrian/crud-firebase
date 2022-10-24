/* eslint-disable */
import "./main-page.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoaderContext from "../../context/LoaderContext";
import warning from "../../assets/images/warning.png";
import close from "../../assets/images/close.png";
import { useDispatch, useSelector } from "react-redux";
import {
  startLoadingUsers,
  startDeleteUser,
} from "../../redux/actions/userActions";

const utils = require("../../utils/common");

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);
  const { setLoading } = useContext(LoaderContext);
  const [id, setId] = useState("");

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    dispatch(startLoadingUsers());
  };

  const onDelete = (dataId) => {
    document.getElementById("deleteModal").style.display = "block";
    setId(dataId);
  };

  const onOkDelete = async () => {
    setLoading(true);
    dispatch(startDeleteUser(id));
    fetch();
    utils.close("deleteModal");
    return setLoading(false);
  };

  return (
    <div>
      <div className="align-items-start">
        <h2 className="manage-user">
          <b>Users</b>
        </h2>

        <div className="custom-container">
          <Link to={"/register"}> Add Users</Link>
          <table className="table table-borderless table-striped table-responsive">
            <thead className="table-light">
              <tr>
                <th className="custom-th-filename">Name</th>
                <th className="custom-th-label center">User Email ID</th>
                <th className="custom-th-action"></th>
              </tr>
            </thead>
            <tbody id="user-list-table-body">
              {users
                ? users.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.fullName}</td>
                        <td className="center">{item.email}</td>
                        <td className="center">
                          <span
                            className={`pointer`}
                            onClick={() => {
                              navigate("/edit-user", {
                                state: {
                                  id: item.id,
                                  fullName: item.fullName,
                                  email: item.email,
                                },
                              });
                            }}
                          >
                            Edit &nbsp;| &nbsp;
                          </span>
                          <span
                            className={`pointer`}
                            onClick={() => onDelete(item.id)}
                          >
                            Delete
                          </span>
                        </td>
                      </tr>
                    );
                  })
                : []}
            </tbody>
          </table>
        </div>
        <div id="deleteModal" className="modal">
          <div className="modal-content center">
            <p className="modal-title">
              Confirm User Deletion
              <span>
                <img
                  className="close close-img"
                  src={close}
                  onClick={() => utils.close("deleteModal")}
                ></img>
              </span>
            </p>
            <span>
              <img className="question-logo" src={warning} />
              <p className="modal-p center">
                <b>Are you Sure?</b>
              </p>
            </span>
            <span>
              <button className="custom-btn-share" onClick={onOkDelete}>
                ok
              </button>
              <button
                className="custom-btn-plain"
                onClick={() => utils.close("deleteModal")}
              >
                Cancel
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
