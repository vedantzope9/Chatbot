const ChatResponse = ({response}) =>{
    if(!response){
        return null;
    }

    const  {candidates, usageMetadata} = response;

    return (
        <div className="container my-4">
            <h3>Response</h3>
            {candidates.map((candidate, index) => (
                <div class="card mb-3" key={index}>
                <div class="card-body">
                  <h5 class="card-title">Candidate {index+1}</h5>
                  <p class="card-text">{candidate.content.parts[0].text }</p>
                  <h6>Citations</h6>
                    <ul>
                        {candidate?.citationMetadata?.citationSources.map((source,idx) => (
                            <li key={idx}>
                            <a href={source.url} target="_blank" rel="noopener noreferrer">
                                {source.url}
                            </a> {" "}
                            (Indexes: {source.startIndex}-{source.endIndex})
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            ))}

            <h4>Usage Metadata</h4>
        </div>
    )
}
export default ChatResponse;