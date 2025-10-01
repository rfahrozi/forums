import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/slices/categorySlice';

const kategoriList = ['Semua', 'React', 'Redux', 'Javascript', 'General'];

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.category.selected);

  return (
    <div className="category-tabs">
      {kategoriList.map((cat) => (
        <button
          type="button"
          key={cat}
          className={`category-btn ${selected === cat ? 'active' : ''}`}
          onClick={() => dispatch(setCategory(cat))}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
