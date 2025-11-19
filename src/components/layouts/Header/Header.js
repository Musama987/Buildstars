import React, { useState, Fragment } from "react";
import styles from "./Header.module.scss";
import Layout from "../Layout/Layout";
import { Button, Link, Logo } from "../../elements";
// import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const [sticky, setSticky] = useState(true);
  const actions = useCustomState()[1];

  // Dutch translations fallback (if data is not loaded from mock.js)
  const dutchMenu = [
    {
      name: "Home page",
      url: "/",
      children: [
        // { name: "Slider Header", url: "/" },
        // { name: "Parallax Image", url: "/home-paralax" },
        // { name: "About us", url: "/about-us" },
        // { name: "Video Background", url: "/home-video" },
        { name: "Why us", url: "/why-us" },
        { name: "How we work", url: "/how-we-work" },
        { name: "Start working", url: "/working-us" },
      ],
    },
    { name: "About us", url: "/about-us" },
    { name: "Services", url: "/services" },
    { name: "Portfolio", url: "/portfolio" },
    // {
    //   name: "Blogging",
    //   url: "/blog-grid-left-sidebar",
    //   children: [
    //     { name: "Grid Left Sidebar", url: "/blog-grid-left-sidebar" },
    //     { name: "List Links Sidebar", url: "/blog-list-left-sidebar" },
    //     { name: "Grid Right Sidebar", url: "/blog-grid-right-sidebar" },
    //     { name: "List Right Sidebar", url: "/blog-list-right-sidebar" },
    //     { name: "Grid No Sidebar", url: "blog-grid-without-sidebar" },
    //   ],
    // },
    {
      name: "Contacts", url: "/contacts",
      children:
        [
          { name: "Consultation", url: "/consultation" },
        ]
    },
  ];

  const menuData = data.length > 0 ? data : dutchMenu;

  const menu = menuData.map((item, index) => {
    if (!item.children) {
      return (
        <li key={index}>
          <Link url={item.url} className={styles.menuLink}>
            {item.name}
          </Link>
        </li>
      );
    } else {
      return (
        <li key={index}>
          <span>
            <Link url={item.url} className={styles.menuLink}>
              {item.name}
            </Link>
          </span>
          <ul>
            {item.children.map((subitem, subindex) => (
              <li key={subindex}>
                <a href={subitem.url}>{subitem.name}</a>
              </li>
            ))}
          </ul>
        </li>
      );
    }
  });

  const header = (
    <Layout>
      <div className={styles.header}>
        <Link url="/">
          <Logo dark />
        </Link>

        <ul className={styles.menu}>{menu}</ul>


        {/* <Button
            after="&#xf107;"
            type="outline-white-tw"
            hoverType="solid-white-tb"
            click={() => actions.toogleModal()}
          >
            Get Quote
          </Button> */}

        <div className={styles.btn_desktop}>
          <Button
            after="&#xf107;"
            // ✅ Use the new types we just created
            type="outline-orange-ot"      // This is our new default style
            hoverType="solid-orange-wt"  // This is our new hover style
            click={() => actions.toogleModal()}
          >
            Offerte aanvragen
          </Button>
        </div>

        <div
          // style={{ color: "#000000" }}
          className={styles.btn_mobile}
          onClick={() => actions.toogleSidebar()}
        >
          <Button
            after="&#xf0c9;"
            type="outline-color-tw"
            hoverType="solid-color-tw"
          //  style={{ color: "#000000", borderColor: "#000000" }}
          />
        </div>
      </div>
    </Layout>
  );

  return (
    <Fragment>
      <div className={styles.wrapper}>{header}</div>
      <div
        className={[
          styles.wrapper,
          sticky ? styles.sticky : styles.hidden,
        ].join(" ")}
      >
        {header}
      </div>
    </Fragment>
  );
};
