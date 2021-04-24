/*eslint-disable*/
import { ContentBooks } from "../../components/ListBooks";
import { NavBar } from "../../components/NavbarBooks";
import { DashBoardContainer } from "./styles";
import P from "prop-types";

const Dashboard = ({
  auth,
  posts,
  currentPage,
  pages,
  handlePrevBtn,
  handleNextBtn,
}) => {
  return (
    <DashBoardContainer>
      <NavBar user={auth} />

      <ContentBooks user={auth} />
    </DashBoardContainer>
  );
};

export default Dashboard;

Dashboard.propType = {
  auth: P.object,
};
