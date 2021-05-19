import "./FacultyListItem.css";
import { Link } from "react-router-dom";

const FacultyListItem = (props) => {
  let {
    facultyName,
    facultyID,
    facultyInitials,
    teaching,
    grading,
    friendliness,
    voteCount,
  } = props.faculty;
  if (voteCount === 0) {
    voteCount = 0.1;
  }
  let avgTeaching = teaching / voteCount;
  let avgGrading = grading / voteCount;
  let avgFriendliness = friendliness / voteCount;

  
  return (
    <Link style={{ textDecoration: "none" }} to={`/faculty/${facultyID}`}>
      <div className="faculty-wrapper">
        <div className="name-wrapper">
          <div className="faculty-name">{facultyName}</div>
          <div className="faculty-initials">{facultyInitials}</div>
        </div>
        <div className="rating-wrapper">
          <div className="average-rating">
            {((teaching + grading + friendliness) / (3 * voteCount)).toFixed(1)}
            <span>&#9733;</span>
          </div>
          <div className="faculty-vote-count">
            T: <span className="red">{avgTeaching}</span> G: <span className="red">{avgGrading}</span> F: <span className="red">{avgFriendliness}</span> <br/> 
              {voteCount === 0.1 ? '0' : voteCount} vote(s)
            </div>
          <div className="rating-bar-wrapper">
            <div
              className="rating-bar"
              style={{ height: (avgTeaching) * 1.8 + 2 }}
            ></div>
            <div
              className="rating-bar"
              style={{ height: (avgGrading) * 1.8 + 2 }}
            ></div>
            <div
              className="rating-bar"
              style={{ height: (avgFriendliness) * 1.8 + 2 }}
            ></div>
            
          </div>
        </div>
      </div>
    </Link>
  );
};

export default FacultyListItem;
