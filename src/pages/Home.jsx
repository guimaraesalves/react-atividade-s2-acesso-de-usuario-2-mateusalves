import { Link } from "react-router-dom";
import "./Style.css";

const Home = ({ members }) => {
  const handleLink = (member) => {
    let output = ``;
    if (member.type === "pj") {
      output = `/company/${member.id}`;
    } else {
      output = `/customer/${member.id}`;
    }
    return output;
  };

  return (
    <div className="link">
      {members.map((member, index) => (
        <div key={index}>
          <Link to={() => handleLink(member)}>{member.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
