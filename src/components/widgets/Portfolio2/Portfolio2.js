// import React, { useState, useEffect, Fragment } from "react";
// import { SpringGrid, enterExitStyle } from "react-stonecutter";
// import { Link } from "react-router-dom";
// import useCurrentWidth from "../../../utilities/useCurrentWidth";
// import useHover from "../../../utilities/useHover";
// import styles from "./Portfolio2.module.scss";
// import THEME from "../../../state/theme";

// export default ({ data = [] }) => {
//   // Active category (start with all)
//   const [active, setActive] = useState("All Projects");

//   // Width of single portfolio item, calculation based on screen size
//   const width = useCurrentWidth();
//   const [itemWidth, setItemWidth] = useState(0);
//   useEffect(() => {
//     switch (true) {
//       case width > 1920:
//         setItemWidth(width / 5);
//         break;
//       case width > 992:
//         setItemWidth(width / 4);
//         break;
//       case width > 768:
//         setItemWidth(width / 3);
//         break;
//       case width > 576:
//         setItemWidth(width / 2);
//         break;
//       default:
//         setItemWidth(width);
//         break;
//     }
//   }, [width]);
//   //------------------------------------------------------------

//   // Animation styles for masonry component
//   const { enter, entered, exit } = enterExitStyle.simple;

//   // Take category tags from every item in database, and make array with unique values
//   const categories = [
//     ...new Set(
//       Array.prototype.concat(
//         ...data.map((item) => item.cats.split(" ").map((cat) => cat))
//       )
//     ),
//   ];

//   // Creating array of jsx items for masonry grid
//   const portfolioList = shuffleArray(
//     data
//       .filter((item) => item.cats.includes(active) || active === "All Projects")
//       .map((item, index) => (
//         <div
//           key={index}
//           style={{
//             width: itemWidth,
//             height: width > 576 ? itemWidth : itemWidth / 1.5,
//           }}
//         >
//           <div className={styles.item}>
//             <img src={item.img} alt="portfolio" />
//             <div className={styles.project_description}>
//               <Link to={"/portfolio/" + item.id}>
//                 <h3>{item.title}</h3>
//               </Link>
//               <p style={{ color: THEME.color }}>{item.cats}</p>
//             </div>
//           </div>
//         </div>
//       ))
//       .splice(0, useCurrentWidth() > 576 ? 8 : 4)
//   );

//   // Randomizing array every time component re-rendering for better animation
//   function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }

//     return array;
//   }

//   return (
//     <Fragment>
//       <div className={["layout-header", styles.header].join(" ")}>
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Our Portfolio
//         </span>
//         <h2>We proud to show you some famous projects.</h2>
//         <p>
//           Energistically predominate high-payoff alignments whereas maintainable
//           materials timely deliverables. Synergistically leverage other's
//           holistic mindshare via high-payoff expertise.
//         </p>
//       </div>
//       <div className={styles.portfolio}>
//         <ul>
//           <Button
//             key="all_projects"
//             item="All Projects"
//             active={active}
//             setActive={setActive}
//           />
//           {categories.map((item, index) => (
//             <Button
//               key={index}
//               item={item}
//               active={active}
//               setActive={setActive}
//             />
//           ))}
//         </ul>
//         <SpringGrid
//           component="ol"
//           columns={window.outerWidth / itemWidth}
//           columnWidth={itemWidth}
//           itemHeight={width > 576 ? itemWidth : itemWidth / 1.5}
//           enter={enter}
//           entered={entered}
//           exit={exit}
//           springConfig={{ stiffness: 170, damping: 26 }}
//         >
//           {portfolioList}
//         </SpringGrid>
//       </div>
//     </Fragment>
//   );
// };

// const Button = ({ item, active, setActive }) => {
//   const [hoverRef, isHovered] = useHover();

//   return (
//     <li
//       ref={hoverRef}
//       onClick={() => setActive(item)}
//       className={active === item ? styles.active : null}
//       style={{
//         color: active === item || isHovered ? THEME.color : null,
//         borderColor: active === item && THEME.color,
//       }}
//     >
//       {item}
//     </li>
//   );
// };



// //image add
// import React, { useState, useEffect, Fragment } from "react";
// import { SpringGrid, enterExitStyle } from "react-stonecutter";
// // Link is no longer needed as the hover effect is removed
// // import { Link } from "react-router-dom";
// import useCurrentWidth from "../../../utilities/useCurrentWidth";
// // useHover is no longer needed
// // import useHover from "../../../utilities/useHover";
// import styles from "./Portfolio2.module.scss";
// import THEME from "../../../state/theme";

// // --- Import Images from Assets ---
// // We import the images from your assets/placeholders folder
// // and create a map to look them up based on the database filename.
// import portfolio1 from "../../../assets/placeholders/portfolio1 (1).jpeg";
// import portfolio2 from "../../../assets/placeholders/portfolio1 (2).jpeg";
// import portfolio3 from "../../../assets/placeholders/portfolio1 (3).jpeg";
// import portfolio4 from "../../../assets/placeholders/portfolio1 (4).jpeg";
// import portfolio5 from "../../../assets/placeholders/portfolio1 (5).jpeg";
// import portfolio6 from "../../../assets/placeholders/portfolio1 (6).jpeg";
// import portfolio7 from "../../../assets/placeholders/portfolio1 (7).jpeg";
// import portfolio8 from "../../../assets/placeholders/portfolio1 (8).jpeg";
// import portfolio9 from "../../../assets/placeholders/portfolio1 (9).jpeg";
// import portfolio10 from "../../../assets/placeholders/portfolio1 (10).jpeg"; // Fallback image

// const imageMap = {
//   "first_home.png": portfolio1,
//   "second_home.png": portfolio2,
//   "third_home.png": portfolio3,
//   "fourth_home.png": portfolio4,
//   "fifth_home.png": portfolio5,
//   "ararat_bouw.png": portfolio6,
//   "homeslider 1.jpeg": portfolio7,
//   "homeslider 2.jpeg": portfolio8,
//   "logotype.png": portfolio9,
//   "photo.jpg": portfolio10,
// };
// // ---------------------------------

// export default ({ data = [] }) => {
//   // --- State for "Load More" ---
//   // Start by showing 8 items
//   const [visibleItems, setVisibleItems] = useState(8);

//   // Function to load 8 more items, up to a max of 24
//   const loadMore = () => {
//     setVisibleItems((prev) => Math.min(prev + 8, 24));
//   };
//   // -----------------------------

//   // Active category (start with all)
//   // const [active, setActive] = useState("All Projects"); // <-- Commented out as requested

//   // Width of single portfolio item, calculation based on screen size
//   const width = useCurrentWidth();
//   const [itemWidth, setItemWidth] = useState(0);
//   useEffect(() => {
//     switch (true) {
//       case width > 1920:
//         setItemWidth(width / 5);
//         break;
//       case width > 992:
//         setItemWidth(width / 4);
//         break;
//       case width > 768:
//         setItemWidth(width / 3);
//         break;
//       case width > 576:
//         setItemWidth(width / 2);
//         break;
//       default:
//         setItemWidth(width);
//         break;
//     }
//   }, [width]);
//   //------------------------------------------------------------

//   // Animation styles for masonry component
//   const { enter, entered, exit } = enterExitStyle.simple;

//   // Take category tags from every item in database, and make array with unique values
//   // const categories = [ // <-- Commented out as requested
//   //   ...new Set(
//   //     Array.prototype.concat(
//   //       ...data.map((item) => item.cats.split(" ").map((cat) => cat))
//   //     )
//   //   ),
//   // ];

//   // Creating array of jsx items for masonry grid
//   const portfolioList = shuffleArray(
//     data
//       // .filter((item) => item.cats.includes(active) || active === "All Projects") // <-- Filter logic removed
//       .map((item, index) => (
//         <div
//           key={index}
//           style={{
//             width: itemWidth,
//             height: width > 576 ? itemWidth : itemWidth / 1.5,
//           }}
//         >
//           <div className={styles.item}>
//             {/* We now use the imageMap to get the correct image path */}
//             {/* The hover effect div is removed */}
//             <img
//               src={imageMap[item.img] ||portfolio10} // Use image from map, or fallback
//               alt={item.title || "portfolio"}
//             />
//           </div>
//         </div>
//       ))
//   ).slice(0, visibleItems); // Use slice() with visibleItems state

//   // Randomizing array every time component re-rendering for better animation
//   function shuffleArray(array) {
//     for (var i = array.length - 1; i > 0; i--) {
//       var j = Math.floor(Math.random() * (i + 1));
//       var temp = array[i];
//       array[i] = array[j];
//       array[j] = temp;
//     }

//     return array;
//   }

//   // Check if we should show the "Load More" button
//   const showLoadMore = visibleItems < data.length && visibleItems < 24;

//   return (
//     <Fragment>
//       <div className={["layout-header", styles.header].join(" ")}>
//         <span className="subtitle" style={{ color: THEME.color }}>
//           Our Portfolio
//         </span>
//         <h2>We proud to show you some famous projects.</h2>
//         <p>
//           Energistically predominate high-payoff alignments whereas maintainable
//           materials timely deliverables. Synergistically leverage other's
//           holistic mindshare via high-payoff expertise.
//         </p>
//       </div>
//       <div className={styles.portfolio}>
//         {/* --- This is the filter button code you asked to comment out --- */}
//         {/* <ul>
//           <Button
//             key="all_projects"
//             item="All Projects"
//             active={active}
//             setActive={setActive}
//           />
//           {categories.map((item, index) => (
//             <Button
//               key={index}
//               item={item}
//               active={active}
//               setActive={setActive}
//             />
//           ))}
//         </ul> */}
//         {/* ------------------------------------------------------------ */}

//         <SpringGrid
//           component="ol"
//           columns={window.outerWidth / itemWidth}
//           columnWidth={itemWidth}
//           itemHeight={width > 576 ? itemWidth : itemWidth / 1.5}
//           enter={enter}
//           entered={entered}
//           exit={exit}
//           springConfig={{ stiffness: 170, damping: 26 }}
//         >
//           {portfolioList}
//         </SpringGrid>

//         {/* --- "Load More" Button --- */}
//         {showLoadMore && (
//           <button className={styles.load_more_btn} onClick={loadMore}>
//             Load More
//           </button>
//         )}
//         {/* ------------------------- */}
//       </div>
//     </Fragment>
//   );
// };

// // --- This Button component is no longer needed as it was for the filters ---
// // const Button = ({ item, active, setActive }) => {
// //   const [hoverRef, isHovered] = useHover();

// //   return (
// //     <li
// //       ref={hoverRef}
// //       onClick={() => setActive(item)}
// //       className={active === item ? styles.active : null}
// //       style={{
// //         color: active === item || isHovered ? THEME.color : null,
// //         borderColor: active === item && THEME.color,
// //       }}
// //     >
// //       {item}
// //     </li>
// //   );
// // };




import React, { useState, useEffect, Fragment } from "react";
import { SpringGrid, enterExitStyle } from "react-stonecutter";
import useCurrentWidth from "../../../utilities/useCurrentWidth";
import styles from "./Portfolio2.module.scss";
import THEME from "../../../state/theme";

// --- Import All Portfolio Images ---
import portfolio1 from "../../../assets/placeholders/portfolio1 (1).jpeg";
import portfolio2 from "../../../assets/placeholders/portfolio1 (2).jpeg";
import portfolio3 from "../../../assets/placeholders/portfolio1 (3).jpeg";
import portfolio4 from "../../../assets/placeholders/portfolio1 (4).jpeg";
import portfolio5 from "../../../assets/placeholders/portfolio1 (5).jpeg";
import portfolio6 from "../../../assets/placeholders/portfolio1 (6).jpeg";
import portfolio7 from "../../../assets/placeholders/portfolio1 (7).jpeg";
import portfolio8 from "../../../assets/placeholders/portfolio1 (8).jpeg";
import portfolio9 from "../../../assets/placeholders/portfolio1 (9).jpeg";
import portfolio10 from "../../../assets/placeholders/portfolio1 (10).jpeg";
import portfolio11 from "../../../assets/placeholders/portfolio1 (11).jpeg";
import portfolio12 from "../../../assets/placeholders/portfolio1 (12).jpeg";
import portfolio13 from "../../../assets/placeholders/portfolio1 (13).jpeg";
import portfolio14 from "../../../assets/placeholders/portfolio1 (14).jpeg";
import portfolio15 from "../../../assets/placeholders/portfolio1 (15).jpeg";
import portfolio16 from "../../../assets/placeholders/portfolio1 (16).jpeg";
import portfolio17 from "../../../assets/placeholders/portfolio1 (17).jpeg";
import portfolio18 from "../../../assets/placeholders/portfolio1 (18).jpeg";
import portfolio19 from "../../../assets/placeholders/portfolio1 (19).jpeg";
import portfolio20 from "../../../assets/placeholders/portfolio1 (20).jpeg";
import portfolio21 from "../../../assets/placeholders/portfolio1 (21).jpeg";
import portfolio22 from "../../../assets/placeholders/portfolio1 (22).jpeg";
import portfolio23 from "../../../assets/placeholders/portfolio1 (23).jpeg";
import portfolio24 from "../../../assets/placeholders/portfolio1 (24).jpeg";
import portfolio25 from "../../../assets/placeholders/portfolio1 (25).jpeg";
import portfolio26 from "../../../assets/placeholders/portfolio1 (26).jpeg";
import portfolio27 from "../../../assets/placeholders/portfolio1 (27).jpeg";
import portfolio28 from "../../../assets/placeholders/portfolio1 (28).jpeg";
import portfolio29 from "../../../assets/placeholders/portfolio1 (29).jpeg";
import portfolio30 from "../../../assets/placeholders/portfolio1 (30).jpeg";
import portfolio31 from "../../../assets/placeholders/portfolio1 (31).jpeg";
import portfolio32 from "../../../assets/placeholders/portfolio1 (32).jpeg";
import portfolio33 from "../../../assets/placeholders/portfolio1 (33).jpeg";
import portfolio34 from "../../../assets/placeholders/portfolio1 (34).jpeg";
import portfolio35 from "../../../assets/placeholders/portfolio1 (35).jpeg";
import portfolio36 from "../../../assets/placeholders/portfolio1 (36).jpeg";
import portfolio37 from "../../../assets/placeholders/portfolio1 (37).jpeg";
import portfolio38 from "../../../assets/placeholders/portfolio1 (38).jpeg";
import portfolio39 from "../../../assets/placeholders/portfolio1 (39).jpeg";
import portfolio40 from "../../../assets/placeholders/portfolio1 (40).jpeg";
import portfolio41 from "../../../assets/placeholders/portfolio1 (41).jpeg";
import portfolio42 from "../../../assets/placeholders/portfolio1 (42).jpeg";
import portfolio43 from "../../../assets/placeholders/portfolio1 (43).jpeg";
import portfolio44 from "../../../assets/placeholders/portfolio1 (44).jpeg";
import portfolio45 from "../../../assets/placeholders/portfolio1 (45).jpeg";
import portfolio46 from "../../../assets/placeholders/portfolio1 (46).jpeg";
import portfolio47 from "../../../assets/placeholders/portfolio1 (47).jpeg";
import portfolio48 from "../../../assets/placeholders/portfolio1 (48).jpeg";
import portfolio49 from "../../../assets/placeholders/portfolio1 (49).jpeg";
import portfolio50 from "../../../assets/placeholders/portfolio1 (50).jpeg";
import portfolio51 from "../../../assets/placeholders/portfolio1 (51).jpeg";
import portfolio52 from "../../../assets/placeholders/portfolio1 (52).jpeg";
import portfolio53 from "../../../assets/placeholders/portfolio1 (53).jpeg";
import portfolio54 from "../../../assets/placeholders/portfolio1 (54).jpeg";
import portfolio55 from "../../../assets/placeholders/portfolio1 (55).jpeg";
import portfolio56 from "../../../assets/placeholders/portfolio1 (56).jpeg";
import portfolio57 from "../../../assets/placeholders/portfolio1 (57).jpeg";
import portfolio58 from "../../../assets/placeholders/portfolio1 (58).jpeg";
import portfolio59 from "../../../assets/placeholders/portfolio1 (59).jpeg";
import portfolio60 from "../../../assets/placeholders/portfolio1 (60).jpeg";
import portfolio61 from "../../../assets/placeholders/portfolio1 (61).jpeg";
import portfolio62 from "../../../assets/placeholders/portfolio1 (62).jpeg";
import portfolio63 from "../../../assets/placeholders/portfolio1 (63).jpeg";
import portfolio64 from "../../../assets/placeholders/portfolio1 (64).jpeg";


// Create an array of the imported images.
const images = [
  portfolio1,
  portfolio2,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
  portfolio9,
  portfolio10,
  portfolio11,
  portfolio12,
  portfolio13,
  portfolio14,
  portfolio15,
  portfolio16,
  portfolio17,
  portfolio18,
  portfolio19,
  portfolio20,
  portfolio21,
  portfolio22,
  portfolio23,
  portfolio24,
  portfolio25,
  portfolio26,
  portfolio27,
  portfolio28,
  portfolio29,
  portfolio30,
  portfolio31,
  portfolio32,
  portfolio33,
  portfolio34,
  portfolio35,
  portfolio36,
  portfolio37,
  portfolio38,
  portfolio39,
  portfolio40,
  portfolio41,
  portfolio42,
  portfolio43,
  portfolio44,
  portfolio45,
  portfolio46,
  portfolio47,
  portfolio48,
  portfolio49,
  portfolio50,
  portfolio51,
  portfolio52,
  portfolio53,
  portfolio54,
  portfolio55,
  portfolio56,
  portfolio57,
  portfolio58,
  portfolio59,
  portfolio60,
  portfolio61,
  portfolio62,
  portfolio63,
  portfolio64,
];
// ------------------------------------

export default ({ data = [] }) => {
  const [visibleItems, setVisibleItems] = useState(8);

  // --- FIX #1: Removed the hardcoded '24' and used data.length ---
  const loadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 8, images.length));
  };
// Whether to show the button
const showLoadMore = visibleItems < images.length;

  const width = useCurrentWidth();
  const [itemWidth, setItemWidth] = useState(0);

  useEffect(() => {
    switch (true) {
      case width > 1920:
        setItemWidth(width / 5);
        break;
      case width > 992:
        setItemWidth(width / 4);
        break;
      case width > 768:
        setItemWidth(width / 3);
        break;
      case width > 576:
        setItemWidth(width / 2);
        break;
      default:
        setItemWidth(width);
        break;
    }
  }, [width]);

  const { enter, entered, exit } = enterExitStyle.simple;

  const portfolioList = images
    .slice(0, visibleItems)
    .map((img, index) => (
      <div
        key={index}
        style={{
          width: itemWidth,
          height: width > 576 ? itemWidth : itemWidth / 1.5,
        }}
      >
        <div className={styles.item}>
          <img
            src={img}
            alt={`portfolio-${index}`}
          />
        </div>
      </div>
    ));

    // --- FIX #2: Removed the redundant '24' check ---
// const loadMore = () => setVisibleItems((prev) => Math.min(prev + 8, images.length));
// const showLoadMore = visibleItems < images.length;

  return (
    <Fragment>
      <div className={["layout-header", styles.header].join(" ")}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Our Portfolio
        </span>
        <h2>We proud to show you some famous projects.</h2>
        <p>
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p>
      </div>
      <div className={styles.portfolio}>
        <SpringGrid
          component="ol"
          columns={width > 576 ? Math.floor(width / itemWidth) : 1}
          columnWidth={itemWidth}
          itemHeight={width > 576 ? itemWidth : itemWidth / 1.5}
          enter={enter}
          entered={entered}
          exit={exit}
          springConfig={{ stiffness: 170, damping: 26 }}
        >
          {portfolioList}
        </SpringGrid>

        {showLoadMore && (
  <button className={styles.load_more_btn} onClick={loadMore}>
    Load More
  </button>
)}
      </div>
    </Fragment>
  );
};