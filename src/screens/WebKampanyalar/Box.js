import {useState} from 'react';
import './style.css'
import "./kampanya.css";
import IconsaxLinearAddCircle from '../img/iconsax-linear-addcircle.svg';
import { KampanyaPopup } from './KampanyaPopup';
import { KampanyaEkle } from './KampanyaEkle';
const Box = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogOpen2, setIsDialogOpen2] = useState(false);


  const handleClick2 = (campaign) => {
    setIsDialogOpen2(true);
  };

  const handleCloseDialog2 = () => {
    setIsDialogOpen2(false);
  };
  const handleClick = (campaign) => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const arr = [
    {
      kampanyaAdi: 'Kampanya Adı 1',
      endustri: 'Endüstri 1',
      urunKapsami: 'Ürün 1, Ürün 2',
      durum: 'Aktif',
      iconUrl: require('../img/iconsax-linear-tickcircle-1.svg').default

    },
    {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Reddedildi',
      iconUrl: require('../img/iconsax-linear-closecircle.svg').default
    },
    {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Beklemede',
      iconUrl: require('../img/frame.svg').default
    },
    {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Ödeme Bekleniyor',
      iconUrl: require('../img/iconsax-linear-clock.svg').default
    }, {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'AktSüresi Geçmişif',
      iconUrl: require('../img/iconsax-linear-infocircle.svg').default
    }
    , {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Aktif',
      iconUrl: require('../img/iconsax-linear-tickcircle-1.svg').default
    },
    {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Reddedildi',
      iconUrl: require('../img/iconsax-linear-closecircle.svg').default
    }
    , {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Beklemede',
      iconUrl: require('../img/frame.svg').default
    }
    , {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Ödeme Bekleniyor',
      iconUrl: require('../img/iconsax-linear-clock.svg').default
    }
    , {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Süresi Geçmiş',
      iconUrl: require('../img/iconsax-linear-infocircle.svg').default
    }
    , {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Aktif', iconUrl: require('../img/iconsax-linear-clock.svg').default
    }
    , {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Reddedildi',
      iconUrl: require('../img/iconsax-linear-closecircle.svg').default
    }
    , {
      kampanyaAdi: 'Kampanya Adı 2',
      endustri: 'Endüstri 2',
      urunKapsami: 'Ürün 3, Ürün 4',
      durum: 'Beklemede',
      iconUrl: require('../img/frame.svg').default
    }
  ]
  return (
    <>
    <div className='nav'>navbar</div>
    <div className="container">
      <div className="div-2">
        <div className="overlap">
          <div className="frame-7">
            <div className="frame8">
              <div className="text-wrapper-2">Kampanyalar</div>
              <p className="text-wrapper-3">
                En iyi fiyat garantisi ile ekosistem üyelerine kampanya sunabiliriz
              </p>
              <button className='frame9' onClick={() => handleClick2(true)}>  
              <img className="iconsax-linear-4" alt="Iconsax linear" src={IconsaxLinearAddCircle} />
             <div className="text-wrapper-4">Kampanya Ekle</div>
              </button>
            </div>
            <div className='divider'></div>
            <div>
              <table style={{ borderCollapse: 'separate', borderSpacing: '25px 25px' }}>
                <thead>
                  <tr>
                    <th style={{ width: '120px', textAlign: 'left' }}>Kampanya adı</th>
                    <th style={{ width: '157px', textAlign: 'left' }}>Endüstri</th>
                    <th style={{ width: '157px', textAlign: 'left' }}>Ürün Kapsamı</th>
                    <th style={{ width: '157px', textAlign: 'left' }}>Durum</th>
                    <th style={{ width: '120px', textAlign: 'left' }}>Detay</th>
                  </tr>
                </thead>
                <tbody>
                  {arr.map((item, index) => (
                    <tr key={index}>
                      <td>{item.kampanyaAdi}</td>
                      <td>{item.endustri}</td>
                      <td>{item.urunKapsami}</td>
                      <td>
                        <div className="frame24">
                          <img style={{ width: '24px', height: '24px' }} alt="Iconsax linear" src={item.iconUrl} />
                          <div className="textdurum">{item.durum}</div>
                        </div>
                      </td>
                      <td >
                        <button className='detaybox' onClick={() => handleClick(item)}>Detay</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className='containerpagi'>
              <div className="pagination">
                <span>
                  <img style={{ width: '16px', height: '16px' }} src={require('../img/indir.png')} />
                </span>
                <span className='spanselect'> 1</span>
                <span style={{ fontSize: '16px' }}> 2</span>
                <span style={{ fontSize: '16px' }}> 3</span>
                <span style={{ fontSize: '16px' }}> 4</span>
                <span style={{ fontSize: '16px' }}> ...</span>
                <img style={{ width: '16px', height: '16px' }} src={require('../img/indir (1).png')} />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {isDialogOpen && (
      <div className="dialog-overlay" onClick={handleCloseDialog}>
        <div className="dialog">
           <KampanyaPopup />
        </div>
      </div>
    )}
      {isDialogOpen2 && (
      <div className="dialog-overlay" onClick={handleCloseDialog2}>
        <div className="dialog">
           <KampanyaEkle />
        </div>
      </div>
    )}
  </>

  )
}

export default Box