import React from "react";

const Badget = ({ barTitle, badgetTitle }) => {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {barTitle}:
      {badgetTitle.map((badge) => (
        <p
          className={`badge ${
            barTitle === "Kategoriler"
              ? "bg-primary"
              : barTitle === "Diller"
              ? "bg-danger"
              : barTitle === "Yapımcı Şirketler"
              ? "bg-success"
              : null
          }`}
        >
          {badge.name}
        </p>
      ))}
    </div>
  );
};

export default Badget;
