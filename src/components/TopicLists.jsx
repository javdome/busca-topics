export default function TopicLists({ filterTopics, filterAll }) {
    return (
        <>
            {filterTopics.map((topic, index) => (
                <div className="bloque">
                    {/* {topic.data && <p key={ index }>{topic.title}</p>} */}
                    {(!filterAll || topic.data.length > 0) && <p key={index}>{topic.title}</p>}
                    <ul className="">
                        {topic.data.map((el, ind2) => (
                            <li key={index + '_' + ind2}>{el}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </>
    )
}
