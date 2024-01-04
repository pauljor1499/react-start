import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import "./App.css";

function App() {
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);

    return (
        <div className="App">
            <DateRangePicker
                onChange={(item) => setState([item.selection])}
                minDate={addDays(new Date(), 0)}
                maxDate={addDays(new Date(), 120)}
                showSelectionPreview={true}
                moveRangeOnFirstSelection={true}
                months={1}
                ranges={state}
                direction="vertical"
                scroll={{ enabled: true }}
            />
        </div>
    );
}

export default App;
