import React from "react";

export default function BookCard({
  title,
  description,
  imageUrl,
  characters = [],
  onShow,
}) {
  const handleClick = () => {
    console.log(`Title: ${title}`);
    console.log("Characters:", characters.join(", "));
    if (onShow) onShow(title, characters);
  };

  return (
    <article className="card">
      <div className="card-img-wrapper">
        <img className="card-img" src={imageUrl} alt={title} />
      </div>

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{description}</p>

        {characters.length > 0 && (
          <ul className="card-list">
            {characters.map((character) => (
              <li key={character}>{character}</li>
            ))}
          </ul>
        )}
      </div>

      <button className="card-btn" onClick={handleClick}>
        Show in Console
      </button>
    </article>
  );
}
