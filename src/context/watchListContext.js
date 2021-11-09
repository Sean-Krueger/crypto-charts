import React, {createContext, useState} from "react";

export const WatchListContext = createContext();


export const WatchListContextProvider = props => {
    const [watchList, setWatchlist] = useState(["bitcoin", "ethereum", "dogecoin"])

return (
    <WatchListContext.Provider value={{ watchList }}>
        {props.children}
    </WatchListContext.Provider>
    );
};