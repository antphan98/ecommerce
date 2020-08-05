import { Columns, Row } from "react-bulma-components";

const AllSkincare = (props) => {
  const { skincare } = props;
  return (
    <Columns>
      <Columns.Column>
        <p className="bd-notification is-success">{skincare.name}</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-info">
          <img src={skincare.image}></img>
        </p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-warning">Third Column</p>
      </Columns.Column>
      <Columns.Column>
        <p className="bd-notification is-warning">Fourth Column</p>
      </Columns.Column>
    </Columns>
  );
};

export default AllSkincare;
