import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { PacmanLoader } from "react-spinners";
import { getFirestore } from "../../firebase/firebase";
import "./itemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();
  const [taskItems, setTaskItems] = useState([]);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("productos");

    let data = localStorage.getItem("task");
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setTaskItems([
        {
          name: items,
          done: false,
        },
      ]);
    }

    const filtrado = categoryId
      ? itemsCollection.where("category", "==", categoryId)
      : itemsCollection;
    const prom = filtrado.get();

    prom.then((snaptshot) => {
      setIsLoading(false);
      if (snaptshot.size > 0) {
        setItems(
          snaptshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      }
    });
  }, [categoryId, items]);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  return (
    <div className="container bg-dark align-center" style={{ display: "" }}>
      <div className="d-flex-rap">
        <h1 className="neon" margin={2}>
          {greeting}
        </h1>
        {isLoading === true ? (
          <PacmanLoader
            timeout={5000}
            className="loader"
            margin={1}
            type={"PacmanLoader"}
            color={"#007bff"}
            size={40}
          />
        ) : (
          <ItemList items={items} />
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
