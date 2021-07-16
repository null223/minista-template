

const Header = () => {
  return <>
    <header className="l-header p-header">
      <nav className="navbar navbar-expand-xl u-justify-between">

        <a className="navbar-brand p-header__logo" href="/">
          <img src="/images/400x120.webp" alt="フェアスタート" />
          <p>キャリア支援マッチングサイトなら、フェアスタート</p>
        </a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Header Menu Toggler">
          <i className="fas fa-bars"></i>
        </button>

        <div id="navbarNav" className="p-header__nav collapse navbar-collapse">
          <ul className="p-header__list navbar-nav">
            <li className="p-header__item --active">
              <a href="/passion">サイト制作の想い</a>
            </li>
            <li className="p-header__item">
              <a href="/organization">運営団体</a>
            </li>
            <li className="p-header__item">
              <a href="/to_staff">児童養護施設等職員の皆様へ</a>
            </li>
            <li className="p-header__item">
              <a href="/to_company">企業の皆様へ</a>
            </li>
            <li className="nav-item">
              <a className="p-header__btn nav-link" href="contact">お問い合わせ</a>
            </li>
          </ul>
        </div>

      </nav>
    </header>
  </>
}

export default Header
