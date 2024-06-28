import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";
import Table from "./Table";

function SortableTable(props) {
  // 오름차순 (asc), 내림차순(desc) 판단, 둘다 없으면 null
  const [sortOrder, setSortOrder] = useState(null);
  // 정렬기준 (이름, 점수, 점수의 제곱)
  const [sortBy, setSortBy] = useState(null);
  const { config, data } = props;

  const handleClick = (label) => {
    // TODO - 정렬 화살표 클릭 시 정렬을 해주는 함수
    // sortBy가 있고 지금 클릭한 label 이름이랑
    // 지금 가지고 있는 sortBy가 다르면
    // => 이미 정렬한 label 말고 다른 label을 클릭할경우
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    if (sortOrder === null) {
      // 클릭할때마다 sortOrder랑 sortBy가 바뀌어야됨
      // 처음에 아무것도 안했을때 클릭했으면
      // 오름차순 정렬
      setSortOrder("asc");
      // 클릭할때마다 label값을 받고있음
      // 그 값이 정렬기준이 돼야함
      setSortBy(label);
      // 오름차순 정렬일때 클릭했으면
    } else if (sortOrder === "asc") {
      // 내림차순 정렬
      setSortOrder("desc");
      setSortBy(label);
      // 내림차순 정렬일때 클릭했으면
    } else if (sortOrder === "desc") {
      // 정렬 안함
      setSortOrder(null);
      setSortBy(null);
    }
  };

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      // TODO - 정렬된 데이터로 바꿔 끼우는 부분 들어갈 comparator 함수
      // 정렬기준에 따라 다르게 데이터를 정렬해줘야함
      // Object 정렬 (어떤 값을 기준으로 정렬할건지)
      // label값을 기준으로
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      // sortOrder가 오름차순이면 양수, 아니면 음수
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

			if(typeof valueA === "string") {
				return valueA.localeCompare(valueB) * reverseOrder;
			} else {
				return (valueA - valueB) * reverseOrder;
			}
    });
  }

  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoArrowUp />
        <GoArrowDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowDown />
      </div>
    );
  }
}

export default SortableTable;
