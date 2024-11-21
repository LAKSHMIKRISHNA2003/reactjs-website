import React from "react";
import "./Section5.css";

function Section5() {
  return (
    <div className="section5">
      {/* Column 1 */}
      <div className="section5-column">
        <img
          src="/images/1.jpg"
          alt="Image 1"
          className="section5-image"
        />
        <h3>Heading 1</h3>
        <p>
          This is a description for the first column. It can describe the
          image, service, or feature.
        </p>
      </div>

      {/* Column 2 */}
      <div className="section5-column">
        <img
          src="/images/2.jpg"
          alt="Image 2"
          className="section5-image"
        />
        <h3>Heading 2</h3>
        <p>
          This is a description for the second column. It highlights something
          important about your offering.
        </p>
      </div>

      {/* Column 3 */}
      <div className="section5-column">
        <img
          src="/images/3.jpg"
          alt="Image 3"
          className="section5-image"
        />
        <h3>Heading 3</h3>
        <p>
          This is a description for the third column. It could include details
          about a feature or product.
        </p>
      </div>

      {/* Column 4 */}
      <div className="section5-column">
        <img
          src="/images/1.jpg"
          alt="Image 4"
          className="section5-image"
        />
        <h3>Heading 4</h3>
        <p>
          This is a description for the fourth column. Use this space to
          provide helpful information.
        </p>
      </div>
    </div>
  );
}

export default Section5;
