
function SportCard({ sport }) {
  return (
    <div className="col-lg-4 col-md-6 my-3">
      <div className="bg-white rounded shadow p-4 border-top border-4 border-dark pop">
        <div
          className="card border-0 shadow"
          style={{ maxWidth: "320px", margin: "auto" }}
        >
          <img
            src={sport.image}
            className="card-img-top"
            alt={sport.name}
          />

          <div className="card-body text-center">
            <Link
              to={`/sports/${sport.slug}`}
              className="text-decoration-none text-dark d-inline-block mb-2"
            >
              <h5>{sport.name}</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SportCard;