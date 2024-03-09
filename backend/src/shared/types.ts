export type RoomType = {
    type: string;
    price: number;
    quantity: number;
};

export type UserType = {
    _id: string,
    email: string,
    mobile: string,
    password: string,
    firstName: string,
    lastName: string,
    isBlocked: boolean,
    imageFile: FileList | null,
    imageUrl: string,
    role: string[],
};

export type HotelType = {
    _id: string,
    name: string,
    city: string,
    country: string,
    description: string,
    roomTypes: RoomType[],
    type: string,
    adultCount: number,
    childCount: number,
    facilities: string[],
    starRating: number,
    imageUrls: string[],
    lastUpdated: Date,
    bookings: BookingType[];
    isBlocked: boolean,
};

export type RestaurantType = {
    _id: string,
    name: string,
    city: string,
    country: string,
    description: string,
    cuisineType: string,
    averageCost: number,
    openingHours: {
        day: string,
        startTime: string,
        endTime: string
    }[],
    facilities: string[],
    rating: number,
    imageUrls: string[],
    lastUpdated: Date,
    bookings: BookingType[],
    isBlocked: boolean,
};

export type BookingType = {
    _id: string;
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    adultCount: number;
    childCount: number;
    checkIn: Date;
    checkOut: Date;
    totalCost: number;
};

export type SearchResponse = {
    data: HotelType[];
    pagination: {
        total: number;
        page: number;
        pages: number;
    }
}


export type PaymentIntentResponse = {
    paymentIntentId: string;
    clientSecret: string;
    totalCost: number;
}