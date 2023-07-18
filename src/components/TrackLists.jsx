export default function TrackLists({ filterTracks, filterAll }) {
    return (
        <>
            {filterTracks.map((track, index) => (
                <div className="bloque">
                    {/* {track.data && <p key={ index }>{track.title}</p>} */}
                    {(!filterAll || track.data.length > 0) && <p key={index}>{track.title}</p>}
                    <ul className="">
                        {track.data.map((el, ind2) => (
                            <li key={index + '_' + ind2}>{el.slice(0, 1) + el.slice(2)} </li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}
