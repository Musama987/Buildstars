import React, { useState, useEffect, Fragment } from "react";
import styles from "./Header.module.scss";
import Layout from "../Layout/Layout";
import { Button, Link, Logo } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default ({ data = [] }) => {
  const [sticky, setSticky] = useState(false);
  const actions = useCustomState()[1];

  // Dutch translations fallback (if data is not loaded from mock.js)
  const dutchMenu = [
    {
      name: "Startpagina",
      url: "/",
      children: [
        { name: "Slider Koptekst", url: "/" },
        { name: "Parallax Afbeelding", url: "/home-paralax" },
        { name: "Video Achtergrond", url: "/home-video" },
      ],
    },
    { name: "Over ons", url: "/about-us" },
    { name: "Diensten", url: "/services" },
    { name: "Portefeuille", url: "/portfolio" },
    {
      name: "Bloggen",
      url: "/blog-grid-left-sidebar",
      children: [
        { name: "Raster Links Zijbalk", url: "/blog-grid-left-sidebar" },
        { name: "Lijst Links Zijbalk", url: "/blog-list-left-sidebar" },
        { name: "Raster Rechts Zijbalk", url: "/blog-grid-right-sidebar" },
        { name: "Lijst Rechts Zijbalk", url: "/blog-list-right-sidebar" },
        { name: "Raster Geen Zijbalk", url: "blog-grid-without-sidebar" },
      ],
    },
    { name: "Contacten", url: "/contacts" },
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

        <div className={styles.btn_desktop}>
          {/* <Button
            after="&#xf107;"
            type="outline-white-tw"
            hoverType="solid-white-tb"
            click={() => actions.toogleModal()}
          >
            Get Quote
          </Button> */}
          <Button
            after="&#xf107;"
            type="outline-white-tw"
            hoverType="solid-white-tb"
            click={() => actions.toogleModal()}
          >
            Offerte aanvragen
          </Button>
        </div>

        <div
          className={styles.btn_mobile}
          onClick={() => actions.toogleSidebar()}
        >
          <Button
            after="&#xf0c9;"
            type="outline-white-tw"
            hoverType="solid-white-tb"
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
