import React, { useState, useEffect, Fragment } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { PacmanLoader } from "react-spinners";
import { getFirestore } from "../../firebase/firebase";
import { useParams } from "react-router-dom";

const getItems = (id) => {
  const db = getFirestore();
  const itemsCollection = db.collection("productos");

  const item = itemsCollection.doc(id);
  return item.get();
};

const ItemDetailContainer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    getItems(itemId).then((res) => {
      setIsLoading(false);

      if (res.exists) {
        setItem(res.data());
      }
    });
  }, [itemId]);

  return (
    <Fragment>
      {isLoading === true ? (
        <div className="m-5 p-5">
          {" "}
          <PacmanLoader type={"PacmanLoader"} color={"#007bff"} size={40} />
        </div>
      ) : (
        <ItemDetail item={{ id: itemId, ...item }} />
      )}
    </Fragment>
  );
};
export default ItemDetailContainer;
