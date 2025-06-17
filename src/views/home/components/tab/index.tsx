import React, { useState } from "react";
import classnames from "classnames";
import { cloneDeep } from "lodash";
import { TabItemType } from "../../interface";

const tabArr = [
  {
    label: "主页",
    isSelected: true,
  },
  {
    label: "主页2",
    isSelected: false,
  },
  {
    label: "主页3",
    isSelected: false,
  },
];

export interface TabProps {
  getCurItemIdx: (idx: number) => void;
}

const Tab: React.FC<TabProps> = (props) => {
  const { getCurItemIdx } = props;
  const [arr, setArr] = useState<TabItemType[]>(tabArr);

  const handleItem = (idx: number) => {
    console.log(1111);

    setArr((data) => {
      let newArr = cloneDeep(data);
      newArr.forEach((item) => {
        if (item.isSelected) {
          item.isSelected = false;
        }
      });
      newArr[idx].isSelected = true;
      return newArr;
    });
    getCurItemIdx(idx);
  };
  return (
    <div className=" border-b  flex">
      <div className=" ml-[200px] flex">
        {arr.map((item, index) => {
          return (
            <div
              className={classnames(
                " mr-[20px] cursor-pointer ",
                item.isSelected
                  ? " border-b-2 border-orange-600 text-orange-600"
                  : " "
              )}
              onClick={() => handleItem(index)}
              key={index}
            >
              {item.label}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tab;
