

const Footer = () => {
  return <>
    <footer class="l-footer p-footer">
      <div className="l-footer__container">
        <div className="p-footer__head u-justify-between">
          <img src="/images/400x120.webp" alt="フェアスタート"/>
          <div><a href="/contact" className="p-footer__btn">お問い合わせ</a></div>
        </div>
        <div className="p-footer__body">
          <p>
            ＜本社＞<br/>
            〒231-0003<br/>
            神奈川県横浜市中区北仲通3-33<br/>
            関内フューチャーセンター214（一階）
          </p>
          <p>
            ＜馬車道オフィス＞<br/>
            〒231-0011<br/>
            神奈川県横浜市中区太田町6-82<br/>
            第2須賀ビル 4階 C号室
          </p>
          <p>TEL：045-319-4675(2法人共通)</p>
        </div>
        <div className="p-footer__footer">
          <p>Copyright &copy; 株式会社フェアスタート／<span>特定非営利活動法人フェアスタートサポート</span> <span>All Rights Reserved.</span></p>
        </div>
      </div>
    </footer>
  </>
}

export default Footer
