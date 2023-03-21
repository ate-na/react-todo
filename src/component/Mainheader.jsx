import { MdMessage, MdPostAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <>
      <header
        style={{
          width: "80%",
          marginInline: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomColor: "white",
          backgroundColor: "rgb(107, 26, 156)",
          marginTop: "10px",
          marginBottom: "50px",
        }}
      >
        <h1 style={{ backgroundColor: "rgb(107, 26, 156)", color: "white" }}>
          <MdMessage
            style={{
              backgroundColor: "rgb(107, 26, 156)",
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
          />
          React Todo List
        </h1>
        <div></div>
        <Link
          to={"/create-post"}
          style={{
            backgroundColor: "rgb(107, 26, 156)",
            display: "flex",
            alignItems: "center",
            fontSize: "20px",
            border: "1px",
          }}
        >
          {/* new post */}
          <MdPostAdd
            size={30}
            style={{
              backgroundColor: "rgb(107, 26, 156)",
              color: "white",
              paddingLeft: "10px",
            }}
            onClick={props.open}
          />
        </Link>
      </header>
    </>
  );
};

export default MainHeader;
