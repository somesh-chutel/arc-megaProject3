import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaLocationDot, FaBagShopping } from "react-icons/fa6";
import "./index.css";

const DisplayAllJobs = (props) => {
  const { jobsItem } = props;

  return (
    <Link className="all-jobs-card" to={`/jobs/${jobsItem.id}`}>
      <li className="jobs-card ">
        <div className="title-icon-rating-cont">
          <img className="card-icon" src={jobsItem.company_logo_url} alt="" />
          <div>
            <h4>{jobsItem.title}</h4>
            <FaStar className="rating-icon" />
            <span>{jobsItem.rating}</span>
          </div>
        </div>

        <div className="location-emptype-pakage-cont">
          <div className="d-flex flex-row">
            <span className="me-1">
              <FaLocationDot />
            </span>
            <p className="me-2">{jobsItem.location}</p>
            <span className="me-1">
              <FaBagShopping />
            </span>
            <p>{jobsItem.employment_type}</p>
          </div>

          <h5>{jobsItem.package_per_annum}</h5>
        </div>

        <hr />

        <h5>Description</h5>
        <p>{jobsItem.job_description}</p>
      </li>
    </Link>
  );
};

export default DisplayAllJobs;
