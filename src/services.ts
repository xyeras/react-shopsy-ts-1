enum TypeColor {
    Electronics = 'bg-warning',
    Jewelry = 'bg-primary',
    MenClothing = 'bg-danger',
    WomenClothing = 'bg-info',
}

  export const setTypeColor = (type: string): string => {
    switch (type) {
      case "electronics":
        return TypeColor.Electronics;
      case "jewelry":
        return TypeColor.Jewelry;
      case "men's clothing":
        return TypeColor.MenClothing;
      case "women's clothing":
        return TypeColor.WomenClothing;
      default:
        return '#333';
    }
  };