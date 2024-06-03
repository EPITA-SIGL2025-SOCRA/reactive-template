import useAppContext from "./AppContext";

function EmptyBasket() {
  return <h4>Votre panier est vide</h4>;
}

export function Basket() {
  const {
    state: { basket },
  } = useAppContext();

  return (
    <table>
      <thead>
        <tr>
          <th>Catégorie</th>
          <th>Commune</th>
        </tr>
      </thead>
      <tbody>
        {basket.length > 0 ? (
          basket.map((item, idx) => (
            <tr key={idx}>
              <td>{item.category}</td>
              <td>Lieu: {item.commune}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="2">
              <EmptyBasket />
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
