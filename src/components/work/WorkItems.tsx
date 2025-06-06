import React from 'react';

type WorkItem = {
  id: number;
  image: string;
  title: string;
};

type WorkItemsProps = {
  item: WorkItem;
};

const WorkItems: React.FC<WorkItemsProps> = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt="" className="work_img" />
      <h3 className="work_title">{item.title}</h3>
      <a href="#" className="work_button">
        Demo <i className="uil uil-arrow-right work_button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
