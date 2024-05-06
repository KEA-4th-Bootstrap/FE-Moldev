import { useParams } from 'react-router';
import { ArticleListItemType, CategoryType, ItemDimensions } from '../../data/type';
import { useEffect, useRef, useState } from 'react';
import { MissionControl } from './MissionControl';
import { dummyActivity, dummyAwards, dummyProject, dummyTrouble } from '../../data/dummy';

const useListWrapper = (category: CategoryType) => {
  const { moldevId } = useParams();
  const [listItems, setListItems] = useState<ArticleListItemType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(1);
  const outerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [itemDimensions, setItemDimensions] = useState<ItemDimensions[][]>([]);

  useEffect(() => {
    console.log('list wrapper moldevId', moldevId);
  }, [moldevId]);

  useEffect(() => {
    if (!outerRef.current) return;
    // outerRef size
    const { width, height } = outerRef.current.getBoundingClientRect();
    console.log('outerRef', outerRef.current.className);
    console.log('outerRef', width, height);
    setWidth(width);
    setHeight(height);
  }, [outerRef, outerRef.current?.onresize]);

  useEffect(() => {
    if (!width || !height) return;

    const itemDimensions = MissionControl(width, height, 5, 32);
    console.log('itemDimensions', itemDimensions);
    setItemDimensions(itemDimensions);
  }, [width, height, listItems]);

  useEffect(() => {
    switch (category) {
      case 'activity':
        setListItems(dummyActivity);
        break;
      case 'project':
        setListItems(dummyProject);
        break;
      case 'awards':
        setListItems(dummyAwards);
        break;
      case 'trouble':
        setListItems(dummyTrouble);
        break;
      default:
        setListItems([]);
    }
  }, [category]);

  return { listItems, currentIndex, setCurrentIndex, outerRef, itemDimensions, moldevId };
};

export default useListWrapper;
