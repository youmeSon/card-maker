import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import Header from "../header/header";
import styles from "./maker.module.css";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: "1",
      name: "Youme",
      company: "Good Company",
      theme: "light",
      title: "Frontend Developer",
      email: "rosydarling@naver.com",
      message: "Trust the process",
      fileName: "youme",
      fileURL: null,
    },
    2: {
      id: "2",
      name: "Nick",
      company: "Nimbus",
      theme: "dark",
      title: "Software Developer",
      email: "rosydarling@naver.com",
      message: "Youme is the best",
      fileName: "nick",
      fileURL: null,
    },
    3: {
      id: "3",
      name: "Laura",
      company: "Filates",
      theme: "colorful",
      title: "Filates Instructor",
      email: "laura12@naver.com",
      message: "Go for it",
      fileName: "laura",
      fileURL: null,
    },
  });

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  });

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
