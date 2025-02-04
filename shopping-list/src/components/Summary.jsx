export default function Summary({items}){
    if(items.length === 0){
      return (
        <footer className="summary">Sepetiniz boş</footer>
      );
    }
    const itemsCount = items.length;
    const completedItemsCount = items.filter(item => item.completed).length;
    return (
      <footer className="summary">
        {itemsCount === completedItemsCount ? 
          <p>Alışverişinizi tamamladınız. 😍</p> :
          <p>Alışveriş sepetinizde {itemsCount} üründen {completedItemsCount} tanesini aldınız.</p>
        } 
      </footer>
    );
  }