import React, { useState, useImperativeHandle } from "react";
import { ComponyProjectItem } from "../../../../store/useProjectStore";

export interface DetailProps {
  curItem: ComponyProjectItem;
}
export interface DetailRef {
  open: () => void;
  close: () => void;
}

const InnerDetail: React.ForwardRefRenderFunction<DetailRef, DetailProps> = (
  props,
  ref
) => {
  const { curItem } = props;
  console.log(curItem, "curItem");
  const [isShow, setIsShow] = useState(false);

  const open = () => {
    setIsShow(true);
  };
  const close = () => {
    setIsShow(false);
  };
  useImperativeHandle(ref, () => {
    return { open, close };
  });
  return (
    <div>
      {isShow && (
        <div className=" fixed top-[80px] bottom-0 left-0 right-0 bg-white ">
          <div className=" m-[10px]">
            <div className=" flex">
              <div className=" flex-1"></div>
              <div
                onClick={() => {
                  close();
                }}
              >
                删除
              </div>
            </div>
            <div>内容</div>
          </div>
        </div>
      )}
    </div>
  );
};
const Detail = React.forwardRef(InnerDetail);
export default Detail;
