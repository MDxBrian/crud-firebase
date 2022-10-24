import { useContext } from "react";
import LoaderContext from "../../context/LoaderContext";
import { Spin } from "antd";
const Loader = ({ children }) => {
  const { loading } = useContext(LoaderContext);
  return (
    <Spin spinning={loading} tip="Loading...">
      {children}
    </Spin>
  );
};

export default Loader;
