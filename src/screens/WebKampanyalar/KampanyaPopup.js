import React from "react";
import "./kampanya.css";

export const KampanyaPopup = () => {
  return (
    <div className="kampanya-popup">
      <div className="text-wrapper">Kampanya Adı 1</div>
      <img className="line" alt="Line" src="line-10.svg" />
      <div className="frame">
        <div className="div">
          <div className="text-wrapper-2">Slogan:</div>
          <div className="text-wrapper-3">Endüstri:</div>
          <div className="text-wrapper-3">Ürün Kapsamı:</div>
          <div className="frame-2">
            <img className="img" alt="Iconsax linear clock" src={require('../img/4085ea86-28c1-42c1-ad8f-0d70d4279d3d.png')} />
            <div className="div-wrapper">
              <div className="text-wrapper-2">Kampanya Süresi:</div>
            </div>
          </div>
          <div className="frame-2">
            <img className="img" alt="Iconsax linear eye" src={require('../img/a9de0c9d-5980-4587-bb2e-7ac6a2bd08e4.png')} />
            <div className="div-wrapper">
              <div className="text-wrapper-2">Görüntülenme</div>
            </div>
          </div>
          <div className="frame-2">
            <img className="img" alt="Tabler click"src={require('../img/64f81722-9283-45b2-b960-030c512213f5.png')} />
            <div className="div-wrapper">
              <div className="text-wrapper-2">Tıklanma Sayısı</div>
            </div>
          </div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-4">Slogan 1</div>
          <div className="frame-4">
            <div className="text-wrapper-4">Teknoloji</div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-4">Ürün 1, Ürün 2</div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-4">1 ay</div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-4">100</div>
          </div>
          <div className="frame-5">
            <div className="text-wrapper-4">10</div>
          </div>
        </div>
      </div>
    </div>
  );
};
