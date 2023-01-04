import { MouseEventHandler, useCallback } from "react";
import { Pages, useRouteContext } from "../providers";

interface IProps {}

export default function CardList(props: IProps) {
  const { pushRoute } = useRouteContext();

  const handleClickCardAdd: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.preventDefault();
      pushRoute(Pages.CARD_ADD);
    },
    [pushRoute]
  );

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      <div className="card-box">
        <div className="small-card">
          <div className="card-top">
            <span className="card-text">클린카드</span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">1111 - 2222 - oooo - oooo</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">YUJO</span>
              <span className="card-text">12 / 23</span>
            </div>
          </div>
        </div>
      </div>
      <span className="card-nickname">법인카드</span>
      <div className="card-box">
        <div className="empty-card" onClick={handleClickCardAdd}>
          +
        </div>
      </div>
    </div>
  );
}