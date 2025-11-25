import "./comments.css";

const reviews = [
  {
    name: "Emily R.",
    comment:
      "Absolutely fantastic service! My apartment has never been this clean. Highly recommended.",
    stars: 5,
  },
  {
    name: "John M.",
    comment:
      "They arrived on time and cleaned every corner perfectly. Very professional team.",
    stars: 5,
  },
  {
    name: "Sophia L.",
    comment:
      "Incredible attention to detail. I was amazed by how spotless everything was!",
    stars: 5,
  },
];

const StarRating = ({ count }) => (
  <div className="stars">{"⭐".repeat(count)}</div>
);

const Comments = () => {
  return (
    <div className="testimonials-container">
      <h2 className="title">Best Comments</h2>
      <div className="review-cards">
        {reviews.map((review, idx) => (
          <div className="card" key={idx}>
            <StarRating count={review.stars} />
            <p className="comment">"{review.comment}"</p>
            <span className="name">{review.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
