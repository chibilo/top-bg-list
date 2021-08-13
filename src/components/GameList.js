import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from "react-bootstrap";
import GameCard from "./GameCard";
import { Hosts } from "./../Consts";

export default ({ host, limit }) => {
  const [data, setData] = useState([]);
  const [isAlertShown, showAlert] = useState(false);

  const makeLinks = (info) => {
    return Object.values(Hosts).map(({ title, linkIdField, makeLink }) => {
      return {
        title: title,
        link: makeLink(info[linkIdField])
      };
    });
  };

  useEffect(() => {
    showAlert(true);
    //setData([]);
    const sort = Hosts[host]?.sortField || "-ratingn10";
    axios
      .get(`https://api.tesera.ru/games?offset=0&limit=${limit}&sort=${sort}`)
      .then((res) => {
        //console.log(res.data);
        showAlert(false);
        const ratingField = Hosts[host]?.ratingField || "ratingUser";
        setData(
          res.data.map((info, idx) => {
            return {
              id: info.teseraId,
              title: info.title,
              desc: info.descriptionShort,
              photo: info.photoUrl,
              numRating: idx + 1,
              gameRating: info[ratingField],
              links: makeLinks(info)
            };
          })
        );
      })
      .catch((e) => {
        console.error(e);
      });
  }, [host, limit]);

  return (
    <div className="game-list">
      <Alert className="alert" show={isAlertShown} variant="info">
        Loading...
      </Alert>
      {data.map((info) => (
        <GameCard info={info} />
      ))}
    </div>
  );
};
