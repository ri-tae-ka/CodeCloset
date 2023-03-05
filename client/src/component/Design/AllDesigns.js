import React, { Fragment, useEffect } from "react";
import "./AllDesigns.css";
import { getAllDesigns } from "../../action/designAction";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AllDesigns = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const { loading, error, designs } = useSelector((state) => state.designs);

  useEffect(() => {
    dispatch(getAllDesigns());
  }, [dispatch]);

  return (
    <Fragment>
      <div>
        {!isAuthenticated && (
          <div className="center-items">
            <p>
              <strong>Uh-oh</strong>, looks like you need to use your secret decoder ring to
              unlock the magic of this page! Just kidding, all you need is your
              login information to gain access to the hidden treasures within.
              Don't have an account yet? It's as easy as pie, and twice as
              sweet!
            </p>
            <p>
              <button onClick={() => loginWithRedirect()}>log in</button> to
              access your designs!
            </p>
          </div>
        )}
        {isAuthenticated && (
          <div>
            <h1>Your designs</h1>
            <div className="allDesigns">
              {loading ? (
                <p>Loading...</p>
              ) : error ? (
                <p>{error}</p>
              ) : designs && designs.length > 0 ? (
                <div className="design">
                  {designs
                    .sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .map((design) => (
                      <div className="single" key={design._id}>
                        <Link to={`/design/${design._id}`}>
                          {new Intl.DateTimeFormat("en-US", {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })
                            .format(new Date(design.createdAt))
                            .toLowerCase()}
                        </Link>
                        <h3>{design.topic}</h3>
                      </div>
                    ))}
                </div>
              ) : (
                <p className="center-items">No data found.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default AllDesigns;
