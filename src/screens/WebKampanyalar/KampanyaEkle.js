import React from "react";
import "./kampanyaekle.css";

export const KampanyaEkle = () => {
  return (
    <div className="kampanya-ekle-popup">
      <div className="text-wrapper">Kampanya Ekle</div>
      <div className="frame">
        <div className="div">
            Kampanya Adı
          <div className="input">
            <div className="outer">
              <div className="right-input">
                <div className="text-2" />
              </div>
            </div>
          </div>
          Slogan

          <div className="input">
            <div className="outer">
              <div className="right-input">
                <div className="text-2" />
              </div>
            </div>
          </div>
          Ürün Adı
          <div className="input">
            <div className="outer">
              <div className="right-input">
                <div className="text-2" />
              </div>
            </div>
          </div>
          Ürünüm Listede Yok
          <div className="input">
            <div className="outer">
              <div className="right-input">
                <div className="text-2" />
              </div>
            </div>
          </div>
          Süre (Gün)
          <div className="input">
            <div className="outer">
              <div className="right-input">
                <div className="text-2" />
              </div>
            </div>
          </div>
          Post Tipi
          <div className="input">
            <div className="outer">
              <div className="right-input">
                <div className="text-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      Endüstri
      <br />
      <div className="frame-2">
        <div className="div-wrapper">
          <div className="text-wrapper-2">Önizleme</div>
        </div>
        <div className="frame-3">
          <div className="text-wrapper-3">İptal</div>
        </div>
      </div>
    </div>
  );
};
