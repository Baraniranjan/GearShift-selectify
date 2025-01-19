import { Col } from "react-bootstrap";
 
export const ProjectCard = ({ title, description, imgUrl ,handleClick}) => {

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl}
        />
        <div className="proj-txtx">
          <h4 style={{ cursor: 'pointer' }} className="text-white" onClick={() => handleClick(title)}>{title}</h4>
        </div>
      </div>
    </Col>
  )
}