enum TypeColor {
    Electronics = '#ffc107',
    Jewelery = '#007bff',
    MenClothing = '#dc3545',
    WomenClothing = '#17a2b8',
}

export const setTypeColor = (type: string): string => {
    switch (type) {
        case "electronics":
            return TypeColor.Electronics;
        case "jewelery":
            return TypeColor.Jewelery;
        case "men's clothing":
            return TypeColor.MenClothing;
        case "women's clothing":
            return TypeColor.WomenClothing;
        default:
            return '#333';
    }
};