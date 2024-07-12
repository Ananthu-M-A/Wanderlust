import { HotelTypes } from "../../../../../types/Enums";

type Props = {
    selectedHotelTypes: string[];
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};


const HotelTypesFilter = ({ selectedHotelTypes, onChange }: Props) => {
    return (
        <div className="pb-5">
            <h4 className="text-md font-semibold mb-2">Hotel Type</h4>
            {Object.values(HotelTypes).map((hotelType, index) => (
                <label key={index} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" value={hotelType}
                        checked={selectedHotelTypes.includes(hotelType)} onChange={onChange} />
                        <span>{hotelType}</span>
                </label>
            ))}
        </div>
    )
};

export default HotelTypesFilter;
