import React from "react";
import { motion } from "framer-motion";

function Contact() {
  const locations = ["Junction Square", "Myanmar Plaza", "Junction Ciyt"];

  return (
    <motion.div className="container-lg center">
      <motion.div class="row row-cols-2 row-cols-lg-3 g-4 g-lg-5">
        {locations.map((location) => (
          <div className="col">
            <motion.div class="card border-dark mb-3">
              <div class="card-header text-primary">
                Location
                <button className="btn btn-primary float-end">Call</button>
              </div>
              <div class="card-body text-dark">
                <h5 class="card-title">{location}</h5>
                <p class="card-text text-secondary">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Contact;
