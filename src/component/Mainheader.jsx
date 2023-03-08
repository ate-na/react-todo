import { MdMessage, MdPostAdd } from "react-icons/md";

const MainHeader = (props) => {
  return (
    <>
      <header
        style={{
          width: "80%",
          display: "flex",
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
        <button
          style={{
            backgroundColor: "rgb(107, 26, 156)",
            display: "flex",
            alignItems: "center",
            fontSize:'20px',
            border:'1px'
          }}
        >
          {/* new post */}
          <MdPostAdd
            size={30}
            style={{ backgroundColor: "rgb(107, 26, 156)", color: "white",paddingLeft:'10px' }}
            onClick={props.open}
          />
        </button>
      </header>
    </>
  );
};

export default MainHeader;
