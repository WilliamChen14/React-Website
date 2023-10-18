import ListGroup from "react-bootstrap/ListGroup";

function HeaderLinks() {
  let items = ["Projects", "Education", "Who Am I"];
  

  const getMessage = () =>{
    return items.length === 0 && <p>No items Found</p>;
  }

  return (
    <>
    {getMessage()}
    <ListGroup>
      {items.map((item) => (
        <ListGroup.Item key={item}>{item}</ListGroup.Item>
      ))}
    </ListGroup>
    </>
  );
}

export default HeaderLinks;
