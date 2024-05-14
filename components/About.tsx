import React from 'react';

// 기술 스택 데이터
const techStacks = [
  {
    category: 'Machine Learning',
    items: [
      { name: 'Pandas', image: '/pan.svg' },
      { name: 'Numpy', image: '/num.svg' },
      { name: 'Scikit-learn', image: '/sci.svg' },
      { name: 'Anaconda', image: '/ana.svg' },
    ],
  },
  {
    category: 'Programming',
    items: [
      { name: 'Python', image: '/py.svg' },
      { name: 'R Studio', image: '/r.svg' },
      { name: 'MySQL', image: '/my.svg' },
      { name: 'Postgresql', image: '/pos.png' },
      { name: 'Jupyter', image: '/ju.svg' },
    ],
  },
  {
    category: 'Others',
    items: [
      { name: 'GitHub', image: '/gi.png' },
      { name: 'Slack', image: '/sl.svg' },
      { name: 'VS Code', image: '/vs.svg.png' },
      { name: 'Obsidian', image: '/ob.png' },
      { name: 'MS Office', image: '/ex.svg' },
    ],
  },
];

// 기술 스택 아이템 컴포넌트
const TechItem = ({ name, image }) => (
  <div className="space-x-3 mb-3 text-center border p-1 rounded text-gray-400 shadow-md">
    <img src={image} alt={name} className="h-10 mx-auto" /> {/* 이미지 크기 조정 */}
    <span className="font">{name}</span>
  </div>
);


// 기술 스택 카테고리 컴포넌트
const TechCategory = ({ category, items }) => (
  <div className="text-md text-gray-400 my-4 text-center text-xl border-2 border-gray-300 bg-gray-950 p-3 rounded-lg shadow-lg">
    <h2 className="text-xl text-white mb-3 text-center">{category}</h2>
    <div className="flex flex-wrap justify-center items-center gap-3">
      {items.map((item, index) => (
        <TechItem key={index} name={item.name} image={item.image} />
      ))}
    </div>
  </div>
);


const Skills = () => {
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-white font-semibold text-center text-6xl pt-[35px]">
        SKILLS
      </h2>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        Get To Know More
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center">
        {techStacks.map((stack, index) => (
          <TechCategory key={index} category={stack.category} items={stack.items} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
